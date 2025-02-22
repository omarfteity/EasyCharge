import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Payments() {
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Payment Methods</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Payment Method
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-4">
            <CreditCard className="w-8 h-8 text-gray-500" />
            <div>
              <p className="font-medium">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-500">Expires 12/24</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            Remove
          </Button>
        </div>
      </Card>
    </div>
  );
}
