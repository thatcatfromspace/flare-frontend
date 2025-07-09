import React from "react";
import {
  FaTruck,
  FaCheckCircle,
  FaClock,
  FaLeaf,
  FaGasPump,
  FaDollarSign,
} from "react-icons/fa";
import { deliveries } from "../data/deliveries";
import { drivers } from "../data/drivers";
import KPIStatCard from "../components/KPIStatCard";
import DeliveryTrendsChart from "../components/DeliveryTrendsChart";
import VehicleTypePieChart from "../components/VehicleTypePieChart";
import { calculateCO2Saved, calculateFuelSaved } from "../utils/calculators";

// Calculate KPIs
const totalDeliveries = deliveries.length;
const completedDeliveries = deliveries.filter(
  (d) => d.status === "Delivered"
).length;
const avgETA = (
  deliveries.reduce((acc, d) => acc + (parseInt(d.eta) || 0), 0) /
  deliveries.filter((d) => d.eta && d.eta !== "--").length
).toFixed(1);
const co2Saved = calculateCO2Saved(deliveries, drivers);
const fuelSaved = calculateFuelSaved(deliveries, drivers);
const costSaved = (fuelSaved * 3.5).toFixed(2); // Mock: $3.5/gal

// Delivery trends (last 7 days) - now using random values
const today = new Date();
const trends = Array.from({ length: 7 }).map((_, i) => {
  const date = new Date(today);
  date.setDate(today.getDate() - (6 - i));
  const dateStr = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  // Generate a random delivery count between 10 and 40
  const count = Math.floor(Math.random() * 31) + 10;
  return { date: dateStr, deliveries: count };
});

// Vehicle type breakdown
const vehicleTypeCounts = drivers.reduce((acc, d) => {
  acc[d.vehicleType] = (acc[d.vehicleType] || 0) + 1;
  return acc;
}, {});

export default function DashboardPage() {
  return (
    <div className="space-y-8 bg-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-blue-700">
        FLARE Dashboard
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPIStatCard
          icon={<FaTruck />}
          label="Total Deliveries"
          value={totalDeliveries}
          color="blue"
        />
        <KPIStatCard
          icon={<FaCheckCircle />}
          label="Completed"
          value={completedDeliveries}
          color="green"
        />
        <KPIStatCard
          icon={<FaClock />}
          label="Avg ETA"
          value={avgETA}
          unit="min"
          color="yellow"
        />
        <KPIStatCard
          icon={<FaDollarSign />}
          label="Cost Saved"
          value={costSaved}
          unit="$"
          color="emerald"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-lg mb-2 text-blue-700">
            Delivery Trends (7 days)
          </h2>
          <DeliveryTrendsChart data={trends} />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-lg mb-2 text-blue-700">
            Vehicle Type Usage
          </h2>
          <VehicleTypePieChart data={vehicleTypeCounts} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KPIStatCard
          icon={<FaLeaf />}
          label="CO₂ Saved"
          value={co2Saved}
          unit="g"
          color="green"
        />
        <KPIStatCard
          icon={<FaGasPump />}
          label="Fuel Saved"
          value={fuelSaved}
          unit="gal"
          color="yellow"
        />
      </div>
    </div>
  );
}
