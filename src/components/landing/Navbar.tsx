import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">EasyCharge</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-green-600">
              Home
            </Link>
            <Link
              to="/features"
              className="text-sm font-medium hover:text-green-600"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium hover:text-green-600"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-green-600"
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-sm"
              onClick={() => navigate("/login")}
            >
              Log in
            </Button>
            <Button
              className="text-sm bg-green-600 hover:bg-green-700"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
