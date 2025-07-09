import React, { useState } from "react";
import StatusBadge from "./StatusBadge";
import { drivers } from "../data/drivers";
import classNames from "classnames";

export default function DeliveryTable({ deliveries, onRowClick }) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("id");
  const [sortDir, setSortDir] = useState("asc");

  const getDriverName = (id) => {
    const d = drivers.find((d) => d.id === id);
    return d ? d.name : "-";
  };

  const filtered = deliveries
    .filter(
      (d) =>
        d.id.toLowerCase().includes(search.toLowerCase()) ||
        d.pickup.toLowerCase().includes(search.toLowerCase()) ||
        d.drop.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      let vA = a[sortKey],
        vB = b[sortKey];
      if (typeof vA === "string") vA = vA.toLowerCase();
      if (typeof vB === "string") vB = vB.toLowerCase();
      if (vA < vB) return sortDir === "asc" ? -1 : 1;
      if (vA > vB) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

  const handleSort = (key) => {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center mb-2">
        <input
          className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-900 mr-2"
          placeholder="Search deliveries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th
                className="px-2 py-2 cursor-pointer"
                onClick={() => handleSort("id")}
              >
                ID
              </th>
              <th
                className="px-2 py-2 cursor-pointer"
                onClick={() => handleSort("pickup")}
              >
                Pickup
              </th>
              <th
                className="px-2 py-2 cursor-pointer"
                onClick={() => handleSort("drop")}
              >
                Drop
              </th>
              <th
                className="px-2 py-2 cursor-pointer"
                onClick={() => handleSort("size_lbs")}
              >
                Size (lbs)
              </th>
              <th
                className="px-2 py-2 cursor-pointer"
                onClick={() => handleSort("eta")}
              >
                ETA
              </th>
              <th
                className="px-2 py-2 cursor-pointer"
                onClick={() => handleSort("assignedDriver")}
              >
                Driver
              </th>
              <th
                className="px-2 py-2 cursor-pointer"
                onClick={() => handleSort("status")}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <tr
                key={d.id}
                className={classNames(
                  "border-b hover:bg-blue-50 cursor-pointer transition",
                  d.status === "Delivered" ? "opacity-70" : ""
                )}
                onClick={() => onRowClick(d)}
              >
                <td className="px-2 py-2 font-medium">{d.id}</td>
                <td className="px-2 py-2">{d.pickup}</td>
                <td className="px-2 py-2">{d.drop}</td>
                <td className="px-2 py-2">{d.size_lbs}</td>
                <td className="px-2 py-2">{d.eta}</td>
                <td className="px-2 py-2">{getDriverName(d.assignedDriver)}</td>
                <td className="px-2 py-2">
                  <StatusBadge status={d.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
