import { Card } from "@/components/ui/card";
import {
  Battery,
  Leaf,
  MapPin,
  Zap,
  Shield,
  Clock,
  CreditCard,
  Smartphone,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Everything You Need to Manage Your EV
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive tools and features designed for modern electric
            vehicle owners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 space-y-4">
            <Battery className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Smart Battery Management</h3>
            <p className="text-gray-600">
              Real-time monitoring of battery health, range estimation, and
              charging optimization.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <MapPin className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Advanced Station Finder</h3>
            <p className="text-gray-600">
              Locate nearby charging stations, check availability, and get
              turn-by-turn navigation.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <Shield className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Predictive Maintenance</h3>
            <p className="text-gray-600">
              AI-powered maintenance predictions and automatic service
              scheduling.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <Clock className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Smart Scheduling</h3>
            <p className="text-gray-600">
              Schedule charging during off-peak hours to save money and reduce
              grid load.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <Leaf className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Environmental Impact</h3>
            <p className="text-gray-600">
              Track your carbon footprint reduction and environmental
              contributions.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <Smartphone className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Mobile App</h3>
            <p className="text-gray-600">
              Control and monitor your EV charging from anywhere with our mobile
              app.
            </p>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
