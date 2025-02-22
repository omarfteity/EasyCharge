import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Battery, Calendar, Navigation, Power } from "lucide-react";

interface VehicleCardProps {
  vehicleName?: string;
  batteryLevel?: number;
  range?: number;
  nextMaintenance?: string;
  onStartCharging?: () => void;
  onScheduleMaintenance?: () => void;
}

const VehicleCard = ({
  vehicleName = "Tesla Model 3",
  batteryLevel = 75,
  range = 280,
  nextMaintenance = "2024-05-15",
  onStartCharging = () => console.log("Start charging"),
  onScheduleMaintenance = () => console.log("Schedule maintenance"),
}: VehicleCardProps) => {
  return (
    <Card className="w-[400px] bg-white">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{vehicleName}</span>
          <Battery
            className={`w-6 h-6 ${batteryLevel > 20 ? "text-green-500" : "text-red-500"}`}
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Battery Status */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Battery Level</span>
            <span>{batteryLevel}%</span>
          </div>
          <Progress value={batteryLevel} className="h-2" />
        </div>

        {/* Range Estimate */}
        <div className="flex items-center gap-2">
          <Navigation className="w-5 h-5 text-gray-500" />
          <span className="text-sm">Range: {range} miles</span>
        </div>

        {/* Next Maintenance */}
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <span className="text-sm">Next Maintenance: {nextMaintenance}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button
            onClick={onStartCharging}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            <Power className="w-4 h-4 mr-2" />
            Start Charging
          </Button>
          <Button
            variant="outline"
            onClick={onScheduleMaintenance}
            className="flex-1"
          >
            Schedule Service
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
