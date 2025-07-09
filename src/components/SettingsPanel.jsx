import React, { useState } from "react";

export default function SettingsPanel() {
  const [maxDelay, setMaxDelay] = useState(10);
  const [reliabilityCutoff, setReliabilityCutoff] = useState(80);
  const [scoring, setScoring] = useState({
    proximity: 30,
    fuel: 20,
    reliability: 20,
    traffic: 15,
    cost: 15,
  });
  const [theme, setTheme] = useState("light");

  const handleSlider = (key, value) => {
    setScoring((prev) => ({ ...prev, [key]: Number(value) }));
  };

  const handleExport = (type) => {
    alert(`Mock export as ${type} triggered!`);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-bold text-blue-700 mb-2">Admin Settings</h2>
      <div className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="font-medium mb-1">Max Allowed Delay (min)</span>
          <input
            type="number"
            min={0}
            max={60}
            value={maxDelay}
            onChange={(e) => setMaxDelay(e.target.value)}
            className="rounded border px-3 py-1 w-32"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium mb-1">Reliability Cutoff (%)</span>
          <input
            type="number"
            min={0}
            max={100}
            value={reliabilityCutoff}
            onChange={(e) => setReliabilityCutoff(e.target.value)}
            className="rounded border px-3 py-1 w-32"
          />
        </label>
        <div>
          <span className="font-medium mb-1 block">Scoring Weights</span>
          {Object.keys(scoring).map((key) => (
            <div key={key} className="flex items-center gap-2 mb-1">
              <span className="w-24 capitalize">{key}</span>
              <input
                type="range"
                min={0}
                max={100}
                value={scoring[key]}
                onChange={(e) => handleSlider(key, e.target.value)}
                className="flex-1"
              />
              <span className="w-8 text-right">{scoring[key]}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="font-medium">Theme</span>
          <button
            className={`px-3 py-1 rounded ${
              theme === "light"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "Light" : "Dark"} Mode
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          <button
            className="px-4 py-2 rounded bg-blue-600 text-white font-semibold"
            onClick={() => handleExport("PDF")}
          >
            Export as PDF
          </button>
          <button
            className="px-4 py-2 rounded bg-emerald-500 text-white font-semibold"
            onClick={() => handleExport("CSV")}
          >
            Export as CSV
          </button>
        </div>
      </div>
    </div>
  );
}
