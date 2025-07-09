import React from "react";
import classNames from "classnames";
import { FaBolt, FaLeaf, FaGasPump, FaUserCheck } from "react-icons/fa";

const vehicleIcons = {
  Electric: <FaBolt className="text-green-500" />,
  Hybrid: <FaLeaf className="text-blue-500" />,
  Petrol: <FaGasPump className="text-yellow-500" />,
};

export default function DriverCard({ driver, onClick, selected }) {
  return (
    <div
      className={classNames(
        "bg-white rounded-xl shadow p-4 flex flex-col gap-2 cursor-pointer border-2 transition hover:scale-[1.02]",
        selected ? "border-blue-500" : "border-transparent"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">{vehicleIcons[driver.vehicleType]}</div>
        <div className="font-bold text-lg text-gray-900">{driver.name}</div>
        <span className="ml-auto px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
          {driver.vehicle}
        </span>
      </div>
      <div className="flex gap-2 text-xs text-gray-500">
        <span>
          Reliability: <b>{driver.reliability}%</b>
        </span>
        <span>
          Acceptance: <b>{driver.acceptanceRate}%</b>
        </span>
        <span>
          Capacity: <b>{driver.capacity} lbs</b>
        </span>
      </div>
      <div className="flex gap-2 text-xs">
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
          {driver.fuelType}
        </span>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">
          {driver.completedDeliveries} deliveries
        </span>
        <span
          className={classNames(
            "px-2 py-0.5 rounded",
            driver.status === "Available"
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          )}
        >
          {driver.status}
        </span>
      </div>
    </div>
  );
}
