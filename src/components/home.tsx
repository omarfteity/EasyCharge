import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import VehicleCard from "@/components/dashboard/VehicleCard";
import ChargingHistory from "@/components/dashboard/ChargingHistory";
import StationMap from "@/components/dashboard/StationMap";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Vehicle Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VehicleCard />
            <ChargingHistory />
          </div>

          {/* Station Map Section */}
          <div className="w-full">
            <StationMap />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
