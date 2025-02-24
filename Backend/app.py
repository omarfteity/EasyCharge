from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_migrate import Migrate


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://flask_user:password@localhost:5432/flask_app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

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
    battery_status = db.Column(db.integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    mileage = db.Column(db.Integer, nullable=False)

class diagnostic(db.Model):
    diagnostic_id = db.Column(db.Integer, primary_key=True)
    Vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicle.id'), nullable=False)
    diagnostic_date = db.Column(db.DateTime, nullable=False)
    battery_health = db.Column(db.String(50), nullable=False)
    issues_detected = db.Column(db.Text, nullable=False)

class ChargingSession(db.Model):
    session_id = db.Column(db.Integer, primary_key=True)
    Vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicle.id'), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    energy_consumed = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(50), nullable=False)

class Article(db.Model):
    article_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)

class emissian_stats(db.Model):
    stat_id = db.Column(db.Integer, primary_key=True)
    Vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicle.id'), nullable=False)
    co2_saved_kg = db.Column(db.Float, nullable=False)
    date = db.Column(db.DateTime, nullable=False)

migrate = Migrate(app, db)

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    user = register_user(email, password)
    return jsonify({'message': 'User registered successfully', 'user_id': user.id})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = authenticate_user(email, password)
    if user:
        return jsonify({'message': 'Login successful', 'user_id': user.id}),
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


