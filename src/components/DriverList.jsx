import React from "react";

export default function DriverList({ drivers, onSelect }) {
  return (
    <ul className="divide-y divide-gray-200">
      {drivers.map((driver) => (
        <li
          key={driver.id}
          onClick={() => onSelect(driver)}
          className="cursor-pointer p-2 hover:bg-gray-100 rounded"
        >
          <div className="font-medium text-sm">{driver.name}</div>
          <div className="text-xs text-gray-500">{driver.vehicle}</div>
        </li>
      ))}
    </ul>
  );
}
