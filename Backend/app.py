from flask import Flask,request,jsonify,Blueprint
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_migrate import Migrate
from sqlalchemy.dialects.postgresql import JSON, ARRAY, UUID
from werkzeug.security import generate_password_hash, check_password_hash
import os

'''from usersettings import register_user, authenticate_user'''


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://flask_user:password@localhost:5432/flask_app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

def init_db():
    db_path = 'flask_app.db'
    if not os.path.exists(db_path):
        with app.app_context():
            db.create_all()
            print("Database tables created successfully")
            # Run migrations
            from flask_migrate import upgrade
            upgrade()
    else:
        print("Database already exists")

class User(db.Model):
    user_id = db.Column(db.Integer,unique=True, primary_key=True)
    email = db.Column(db.String(255),  nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    created_at= db.Column(db.DateTime, nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Vehicle(db.Model):
    vehicle_id = db.Column(db.Integer, primary_key=True)
    model = db.Column(db.String(100), nullable=False)
    battery_status = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    mileage = db.Column(db.Integer, nullable=False)

class Diagnostic(db.Model):
    diagnostic_id = db.Column(db.Integer, primary_key=True)
    vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicle.vehicle_id'), nullable=False)
    diagnostic_date = db.Column(db.DateTime, nullable=False)
    battery_health = db.Column(db.String(50), nullable=False)
    issues_detected = db.Column(db.Text, nullable=False)

class ChargingSession(db.Model):
    session_id = db.Column(db.Integer, primary_key=True)
    vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicle.vehicle_id'), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    energy_consumed = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(50), nullable=False)

class Article(db.Model):
    article_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)

class EmissionStats(db.Model):
    stat_id = db.Column(db.Integer, primary_key=True)
    vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicle.vehicle_id'), nullable=False)
    co2_saved_kg = db.Column(db.Float, nullable=False)
    date = db.Column(db.DateTime, nullable=False)

init_db()
migrate = Migrate(app, db)

auth_bp = Blueprint('auth', __name__)

def register_user(email, password):
    # Check if user already exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return None
    
    # Create new user
    new_user = User(
        email=email,
        created_at=datetime.utcnow()
    )
    new_user.set_password(password)
    
    try:
        db.session.add(new_user)
        db.session.commit()
        return new_user
    except Exception as e:
        db.session.rollback()
        print(f"Error registering user: {e}")
        return None

def authenticate_user(email, password):
    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        return user
    return None

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    user = register_user(email, password)
    if user:
        return jsonify({'message': 'User registered successfully', 'user_id': user.user_id}), 201
    else:
        return jsonify({'error': 'Email already registered or registration failed'}), 400

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = authenticate_user(email, password)
    if user:
        return jsonify({'message': 'Login successful', 'user_id': user.user_id}),
    else:
        return jsonify({'error': 'Invalid credentials'}),

diagnostics_bp = Blueprint('diagnostics', __name__)

@diagnostics_bp.route('/diagnose', methods=['POST'])
def diagnose():
    data = request.get_json()
    model = data.get('model')
    battery_health = data.get('battery_health')
    mileage = data.get('mileage')

    if battery_health == 'good' and mileage < 100000:
        result = "Vehicle is in good condition"
    else:
        result = "Vehicle requires a check-up"

    return jsonify({'diagnosis': result})

@diagnostics_bp.route('/diagnostics', methods=['GET'])
def get_diagnostics():
    diagnostics = Diagnostic.query.all()
    diagnostics_list = []
    for diagnostic in diagnostics:
        diagnostics_list.append({
            'diagnostic_id': diagnostic.diagnostic_id,
            'vehicle_id': diagnostic.vehicle_id,
            'diagnostic_date': diagnostic.diagnostic_date,
            'battery_health': diagnostic.battery_health,
            'issues_detected': diagnostic.issues_detected
        })
    return jsonify({'diagnostics': diagnostics_list})

charging_bp = Blueprint('charging', __name__)

@charging_bp.route('/charge', methods=['POST'])
def charge():
    data = request.get_json()
    vehicle_id = data.get('vehicle_id')
    start_time = data.get('start_time')
    end_time = data.get('end_time')
    energy_consumed = data.get('energy_consumed')
    status = data.get('status')

    session = ChargingSession(vehicle_id=vehicle_id, start_time=start_time, end_time=end_time, energy_consumed=energy_consumed, status=status)
    db.session.add(session)
    db.session.commit()

    return jsonify({'message': 'Charging session added successfully'})

@charging_bp.route('/charging_sessions', methods=['GET'])
def get_charging_sessions():
    sessions = ChargingSession.query.all()
    sessions_list = []
    for session in sessions:
        sessions_list.append({
            'session_id': session.session_id,
            'vehicle_id': session.vehicle_id,
            'start_time': session.start_time,
            'end_time': session.end_time,
            'energy_consumed': session.energy_consumed,
            'status': session.status
        })
    return jsonify({'charging_sessions': sessions_list})

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(diagnostics_bp, url_prefix='/diagnostics')
app.register_blueprint(charging_bp, url_prefix='/charging')

if __name__ == '__main__':
    app.run(debug=True)


