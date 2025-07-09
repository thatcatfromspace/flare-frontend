import React, { useState } from "react";
import { drivers } from "../data/drivers";
import DriverCard from "../components/DriverCard";
import DriverDetailPanel from "../components/DriverDetailPanel";

const vehicleTypes = ["All", "Electric", "Hybrid", "Petrol"];
const statusTypes = ["All", "Available", "Unavailable"];

export default function DriversPage() {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [vehicleFilter, setVehicleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredDrivers = drivers.filter(
    (d) =>
      (vehicleFilter === "All" || d.vehicleType === vehicleFilter) &&
      (statusFilter === "All" || d.status === statusFilter)
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 h-full">
      <div className="flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <select
            className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-900"
            value={vehicleFilter}
            onChange={(e) => setVehicleFilter(e.target.value)}
          >
            {vehicleTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <select
            className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-900"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {statusTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDrivers.map((driver) => (
            <DriverCard
              key={driver.id}
              driver={driver}
              onClick={() => setSelectedDriver(driver)}
              selected={selectedDriver && selectedDriver.id === driver.id}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-96">
        <DriverDetailPanel driver={selectedDriver} />
      </div>
    </div>
  );
}
