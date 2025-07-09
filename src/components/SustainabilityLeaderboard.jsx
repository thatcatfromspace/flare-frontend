import React from "react";
import { drivers } from "../data/drivers";

export default function SustainabilityLeaderboard() {
  // Mock: sort by reliability + EV/Hybrid bonus
  const sorted = [...drivers].sort((a, b) => {
    const scoreA =
      a.reliability +
      (a.vehicleType === "Electric" ? 20 : a.vehicleType === "Hybrid" ? 10 : 0);
    const scoreB =
      b.reliability +
      (b.vehicleType === "Electric" ? 20 : b.vehicleType === "Hybrid" ? 10 : 0);
    return scoreB - scoreA;
  });
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold text-md mb-2 text-blue-700">
        Top Sustainable Drivers
      </h3>
      <ol className="list-decimal ml-5 text-sm">
        {sorted.slice(0, 5).map((d, i) => (
          <li key={d.id} className="mb-1">
            <span className="font-bold text-blue-700">{d.name}</span> –{" "}
            {d.vehicleType} ({d.reliability}% reliability)
          </li>
        ))}
      </ol>
    </div>
  );
}
