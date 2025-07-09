import React from "react";
import classNames from "classnames";

export default function KPIStatCard({
  icon,
  label,
  value,
  unit,
  color = "blue",
}) {
  // Map color to Tailwind classes for light mode only
  const colorMap = {
    blue: "bg-blue-100 text-blue-600 border-blue-500",
    green: "bg-green-100 text-green-600 border-green-500",
    yellow: "bg-yellow-100 text-yellow-600 border-yellow-500",
    emerald: "bg-emerald-100 text-emerald-600 border-emerald-500",
  };
  const colorClass = colorMap[color] || colorMap.blue;
  return (
    <div
      className={classNames(
        "flex items-center gap-4 bg-white rounded-xl shadow p-4 transition hover:scale-[1.02]",
        colorClass.split(" ").find((c) => c.startsWith("border-"))
      )}
    >
      <div
        className={classNames(
          colorClass
            .split(" ")
            .filter((c) => c.startsWith("bg-") || c.startsWith("text-")),
          "rounded-full p-3 text-2xl flex items-center justify-center"
        )}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
          {label}
        </div>
        <div className="text-2xl font-bold text-gray-900">
          {value}
          {unit && <span className="text-base font-normal ml-1">{unit}</span>}
        </div>
      </div>
    </div>
  );
}
