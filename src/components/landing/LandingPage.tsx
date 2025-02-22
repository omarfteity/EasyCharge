import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Battery, Leaf, MapPin, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Navbar />
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            EasyCharge
            <span className="text-green-600"> EV Simplified</span>
          </h1>
          <p className="text-xl text-gray-600">
            Manage your electric vehicle charging, track your environmental
            impact, and find nearby stations all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/features")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            className="p-6 space-y-4 bg-white/80 backdrop-blur cursor-pointer transition-transform hover:scale-105"
            onClick={() => navigate("/features")}
          >
            <Battery className="w-12 h-12 text-green-600" />
            <h3 className="text-xl font-semibold">Battery Management</h3>
            <p className="text-gray-600">
              Real-time monitoring of your EV's battery status and range
              estimates.
            </p>
          </Card>

          <Card
            className="p-6 space-y-4 bg-white/80 backdrop-blur cursor-pointer transition-transform hover:scale-105"
            onClick={() => navigate("/map")}
          >
            <MapPin className="w-12 h-12 text-green-600" />
            <h3 className="text-xl font-semibold">Station Locator</h3>
            <p className="text-gray-600">
              Find nearby charging stations and check their real-time
              availability.
            </p>
          </Card>

          <Card
            className="p-6 space-y-4 bg-white/80 backdrop-blur cursor-pointer transition-transform hover:scale-105"
            onClick={() => navigate("/features")}
          >
            <Zap className="w-12 h-12 text-green-600" />
            <h3 className="text-xl font-semibold">Smart Charging</h3>
            <p className="text-gray-600">
              Schedule charging sessions during off-peak hours to save money.
            </p>
          </Card>

          <Card
            className="p-6 space-y-4 bg-white/80 backdrop-blur cursor-pointer transition-transform hover:scale-105"
            onClick={() => navigate("/features")}
          >
            <Leaf className="w-12 h-12 text-green-600" />
            <h3 className="text-xl font-semibold">Eco Impact</h3>
            <p className="text-gray-600">
              Track your carbon footprint reduction and environmental impact.
            </p>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-green-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-green-50">
            Join thousands of EV owners who are already managing their charging
            smarter.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-green-600 hover:bg-green-50"
            onClick={() => navigate("/signup")}
          >
            Sign Up Now
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
