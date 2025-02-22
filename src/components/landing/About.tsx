import { Card } from "@/components/ui/card";
import { Users, Globe, Award } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
          <p className="text-xl text-gray-600">
            Making electric vehicle charging accessible, efficient, and
            sustainable for everyone.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-white text-center">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <p className="text-gray-600">Active Users</p>
          </Card>

          <Card className="p-8 bg-white text-center">
            <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">500+</div>
            <p className="text-gray-600">Charging Stations</p>
          </Card>

          <Card className="p-8 bg-white text-center">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">50,000+</div>
            <p className="text-gray-600">Charging Sessions</p>
          </Card>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Founded in 2023 by Omar Fteity and his team at IMSET Sousse,
              EasyCharge emerged from a simple observation: EV charging should
              be as simple as traditional refueling. Our dedicated team of
              engineers and designers worked tirelessly to create a platform
              that makes EV ownership truly hassle-free.
            </p>
            <p>
              Today, we're proud to serve thousands of EV owners across the
              country, helping them manage their charging needs efficiently
              while contributing to a more sustainable future.
            </p>
            <p>
              Our commitment to innovation and sustainability drives us to
              continuously improve our platform, making electric vehicle
              ownership more accessible and enjoyable for everyone.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
