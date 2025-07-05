import React, { useState } from "react";
import DeliveryList from "./components/DeliveryList";
import DriverList from "./components/DriverList";
import DriverDetail from "./components/DriverDetail";

const mockDeliveries = [
  {
    id: "DEL001",
    pickup: "Walmart Orlando",
    drop: "Downtown",
    size: 20,
    status: "Pending",
    eta: "10 mins",
    type: "Packing",
    assignedTo: "Oliver Watson",
    completed: true,
  },
  {
    id: "DEL002",
    pickup: "Walmart Orlando",
    drop: "Winter Park",
    size: 15,
    status: "In Transit",
    eta: "5 mins",
    type: "Delivery",
    assignedTo: "Rachel Watson",
    completed: false,
  },
  {
    id: "DEL003",
    pickup: "Walmart Orlando",
    drop: "Lake Eola",
    size: 10,
    status: "Delivered",
    eta: "--",
    type: "Delivery",
    assignedTo: "Emma Watson",
    completed: false,
  },
];

const mockDrivers = [
  {
    id: "DRV001",
    name: "Jordan Miles",
    vehicle: "Electric Bike",
    reliability: 92,
    acceptance: 85,
    payAvg: 14.5,
    deliveriesCompleted: 122,
    capacity: 30,
  },
  {
    id: "DRV002",
    name: "Alina Rivera",
    vehicle: "Hybrid Car",
    reliability: 88,
    acceptance: 79,
    payAvg: 13.2,
    deliveriesCompleted: 98,
    capacity: 50,
  },
  {
    id: "DRV003",
    name: "Jared Wu",
    vehicle: "Petrol Scooter",
    reliability: 81,
    acceptance: 63,
    payAvg: 12.1,
    deliveriesCompleted: 74,
    capacity: 25,
  },
];

export default function FlareDashboard() {
  const [selectedDriver, setSelectedDriver] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">FLARE Analytics</h1>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metrics & Tasks */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow">
            <h2 className="font-semibold text-lg mb-3">Total Deliveries</h2>
            <p className="text-2xl font-bold">32 / 45</p>
            <p className="text-sm text-gray-500">Drivers assigned: 3 / 5</p>
            <p className="text-sm text-gray-500">Completed tasks: 65%</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <h2 className="font-semibold text-lg mb-3">Recently Added</h2>
            <ul className="text-sm space-y-2">
              {mockDeliveries.slice(0, 3).map((d) => (
                <li key={d.id} className="flex justify-between">
                  <span>
                    ✅ {d.id} <span className="text-gray-400">({d.type})</span>
                  </span>
                  <span className="text-xs text-gray-500">{d.eta}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-4 shadow md:col-span-2">
            <h2 className="font-semibold text-lg mb-3">Recently Added Deliveries</h2>
            <ul className="divide-y divide-gray-200">
              {mockDeliveries.map((d) => (
                <li key={d.id} className="flex justify-between items-center py-2">
                  <div>
                    <p className="text-sm font-medium">{d.assignedTo}</p>
                    <p className="text-xs text-gray-500">{d.type}</p>
                  </div>
                  <span className={`text-xs font-medium ${d.completed ? "text-green-600" : "text-yellow-600"}`}>
                    {d.completed ? "Completed" : "Assigned"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Delivery Map & Tips */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl p-4 shadow">
            <h2 className="font-semibold text-lg mb-3">Current Delivery Locations</h2>
            <p className="text-sm mb-1">127 Osk Avenue, Brinnsfield, IL</p>
            <p className="text-xs text-gray-500">Estimated Arrival: Sept 21, 2024 - 2:15 PM CST</p>
            <div className="w-full h-40 mt-3 rounded-xl bg-gray-200 flex items-center justify-center text-gray-500">
              📍 Map Placeholder
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <h2 className="font-semibold text-lg mb-3">Driver Insights</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <strong>Label by Route:</strong> Organize based on optimal drop order.
              </li>
              <li>
                <strong>Heavy Items in Small Boxes:</strong> Easier and safer to handle.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}