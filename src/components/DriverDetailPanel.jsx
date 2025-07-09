import React from "react";
import {
  FaUser,
  FaCar,
  FaCheck,
  FaBolt,
  FaLeaf,
  FaGasPump,
  FaHistory,
} from "react-icons/fa";
import { deliveries } from "../data/deliveries";

const vehicleIcons = {
  Electric: <FaBolt className="text-green-500" />,
  Hybrid: <FaLeaf className="text-blue-500" />,
  Petrol: <FaGasPump className="text-yellow-500" />,
};

export default function DriverDetailPanel({ driver }) {
  if (!driver)
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 italic">
        Select a driver to view details
      </div>
    );
  const history = deliveries.filter((d) => d.assignedDriver === driver.id);
  return (
    <div className="bg-white rounded-xl shadow p-6 h-full flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-2">
        <FaUser className="text-2xl text-blue-500" />
        <span className="font-bold text-xl text-gray-900">{driver.name}</span>
        <span className="ml-auto px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
          {driver.vehicle}
        </span>
      </div>
      <div className="flex gap-4 text-sm">
        <span className="flex items-center gap-1">
          <FaCar /> {driver.vehicleType}
        </span>
        <span className="flex items-center gap-1">
          <FaCheck /> Acceptance: {driver.acceptanceRate}%
        </span>
        <span className="flex items-center gap-1">
          <FaCheck /> Reliability: {driver.reliability}%
        </span>
        <span className="flex items-center gap-1">
          <FaHistory /> Completed: {driver.completedDeliveries}
        </span>
        <span className="flex items-center gap-1">
          Capacity: {driver.capacity} lbs
        </span>
      </div>
      <div className="flex gap-2 text-xs">
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
          {driver.fuelType}
        </span>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">
          {driver.status}
        </span>
      </div>
      <div>
        <h3 className="font-semibold text-md mb-1 text-blue-700">
          Delivery History
        </h3>
        <ul className="list-disc ml-5 text-sm">
          {history.length === 0 && <li>No deliveries yet.</li>}
          {history.map((d) => (
            <li key={d.id}>
              {d.pickup} → {d.drop} ({d.status}, {d.eta})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
