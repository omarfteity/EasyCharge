import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold">EasyCharge</span>
            </div>
            <p className="text-sm text-gray-600">
              Simplifying EV charging for a sustainable future.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/features" className="hover:text-green-600">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-green-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/stations" className="hover:text-green-600">
                  Charging Stations
                </Link>
              </li>
              <li>
                <Link to="/app" className="hover:text-green-600">
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/about" className="hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-green-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-green-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/privacy" className="hover:text-green-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-green-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-green-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} EasyCharge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
