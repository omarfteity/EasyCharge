import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function AuthLayout({
  children,
  title,
  description,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center space-y-2 mb-8">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-green-600" />
            <span className="text-2xl font-bold">EasyCharge</span>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground text-center">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
