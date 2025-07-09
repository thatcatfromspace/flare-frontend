import React from "react";
import SustainabilityKPICards from "../components/SustainabilityKPICards";
import SustainabilityLeaderboard from "../components/SustainabilityLeaderboard";
import CO2BarChart from "../components/CO2BarChart";
import { deliveries } from "../data/deliveries";
import { drivers } from "../data/drivers";

// Mock CO2 per delivery type
const co2ByType = [
  {
    type: "Electric",
    co2:
      deliveries.filter((d) => {
        const dr = drivers.find((x) => x.id === d.assignedDriver);
        return dr && dr.vehicleType === "Electric";
      }).length * 100,
  },
  {
    type: "Hybrid",
    co2:
      deliveries.filter((d) => {
        const dr = drivers.find((x) => x.id === d.assignedDriver);
        return dr && dr.vehicleType === "Hybrid";
      }).length * 50,
  },
  {
    type: "Petrol",
    co2:
      deliveries.filter((d) => {
        const dr = drivers.find((x) => x.id === d.assignedDriver);
        return dr && dr.vehicleType === "Petrol";
      }).length * 0,
  },
];

const recommendations = [
  "Switch driver Jared Wu to EV to save 20% CO₂.",
  "Increase hybrid assignments for long routes.",
  "Encourage drivers to maintain high reliability for more savings.",
];

export default function SustainabilityPage() {
  return (
    <div className="space-y-8 bg-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
        Sustainability Insights
      </h1>
      <SustainabilityKPICards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-lg mb-2 text-blue-700">
            CO₂ Saved per Delivery Type
          </h2>
          <CO2BarChart data={co2ByType} />
        </div>
        <SustainabilityLeaderboard />
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold text-lg mb-2 text-blue-700">
          Recommendations
        </h2>
        <ul className="list-disc ml-5 text-sm">
          {recommendations.map((rec, i) => (
            <li key={i}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
