import React from "react";
import { FaLeaf, FaGasPump, FaDollarSign, FaRoad } from "react-icons/fa";
import { deliveries } from "../data/deliveries";
import { drivers } from "../data/drivers";
import { calculateCO2Saved, calculateFuelSaved } from "../utils/calculators";

export default function SustainabilityKPICards() {
  const co2Saved = calculateCO2Saved(deliveries, drivers);
  const fuelSaved = calculateFuelSaved(deliveries, drivers);
  const milesOptimized = 1200; // Mock
  const costSaved = (fuelSaved * 3.5).toFixed(2);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="flex items-center gap-4 bg-white rounded-xl shadow p-4 border-l-4 border-green-500">
        <div className="bg-green-100 text-green-600 rounded-full p-3 text-2xl flex items-center justify-center">
          <FaLeaf />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            CO₂ Saved
          </div>
          <div className="text-2xl font-bold text-gray-900">{co2Saved} g</div>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-white rounded-xl shadow p-4 border-l-4 border-yellow-500">
        <div className="bg-yellow-100 text-yellow-600 rounded-full p-3 text-2xl flex items-center justify-center">
          <FaGasPump />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            Fuel Saved
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {fuelSaved} gal
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-white rounded-xl shadow p-4 border-l-4 border-blue-500">
        <div className="bg-blue-100 text-blue-600 rounded-full p-3 text-2xl flex items-center justify-center">
          <FaRoad />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            Miles Optimized
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {milesOptimized}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-white rounded-xl shadow p-4 border-l-4 border-emerald-500">
        <div className="bg-emerald-100 text-emerald-600 rounded-full p-3 text-2xl flex items-center justify-center">
          <FaDollarSign />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            Cost Saved
          </div>
          <div className="text-2xl font-bold text-gray-900">${costSaved}</div>
        </div>
      </div>
    </div>
  );
}
