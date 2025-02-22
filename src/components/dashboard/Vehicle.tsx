import VehicleCard from "./VehicleCard";
import DiagnosticCard from "./DiagnosticCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Vehicle() {
  const navigate = useNavigate();

  return (
    <div className="container max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>
      </div>
      <h1 className="text-2xl font-semibold mb-6">Vehicle Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VehicleCard />
        <DiagnosticCard />
      </div>
    </div>
  );
}
