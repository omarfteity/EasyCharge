import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the plan that best fits your charging needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Basic station finder</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Battery monitoring</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Charging history</span>
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </Card>

          {/* Pro Plan */}
          <Card className="p-8 border-green-600 border-2">
            <div className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
              Popular
            </div>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">$9.99</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>All Basic features</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Real-time availability</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Smart scheduling</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Priority support</span>
              </li>
            </ul>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Start Pro Trial
            </Button>
          </Card>

          {/* Enterprise Plan */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>All Pro features</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Fleet management</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Custom integration</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>24/7 support</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Contact Sales
            </Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
