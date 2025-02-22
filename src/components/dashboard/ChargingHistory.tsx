import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LineChart, BarChart, Battery, Leaf } from "lucide-react";

interface ChargingHistoryProps {
  data?: {
    costs: Array<{ date: string; amount: number }>;
    environmental: Array<{ date: string; co2Saved: number }>;
  };
}

const defaultData = {
  costs: [
    { date: "2024-01", amount: 45 },
    { date: "2024-02", amount: 52 },
    { date: "2024-03", amount: 38 },
  ],
  environmental: [
    { date: "2024-01", co2Saved: 120 },
    { date: "2024-02", co2Saved: 145 },
    { date: "2024-03", co2Saved: 130 },
  ],
};

const ChargingHistory: React.FC<ChargingHistoryProps> = ({
  data = defaultData,
}) => {
  return (
    <Card className="w-full h-[400px] p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Charging History
          </h2>
          <p className="text-sm text-muted-foreground">
            View your charging analytics and environmental impact
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <LineChart className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="costs" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="costs">
            <Battery className="h-4 w-4 mr-2" />
            Cost Analytics
          </TabsTrigger>
          <TabsTrigger value="environmental">
            <Leaf className="h-4 w-4 mr-2" />
            Environmental Impact
          </TabsTrigger>
        </TabsList>

        <TabsContent value="costs" className="space-y-4">
          <div className="h-[250px] flex items-center justify-center border rounded-lg">
            <div className="text-center text-muted-foreground">
              <BarChart className="h-8 w-8 mx-auto mb-2" />
              <p>Cost analytics visualization would go here</p>
              <p className="text-sm">Total Spent: $135</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="environmental" className="space-y-4">
          <div className="h-[250px] flex items-center justify-center border rounded-lg">
            <div className="text-center text-muted-foreground">
              <LineChart className="h-8 w-8 mx-auto mb-2" />
              <p>Environmental impact visualization would go here</p>
              <p className="text-sm">Total CO2 Saved: 395kg</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default ChargingHistory;
