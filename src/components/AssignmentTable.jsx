import React from "react";
import StatusBadge from "./StatusBadge";
import { deliveries } from "../data/deliveries";
import { drivers } from "../data/drivers";

export default function AssignmentTable({ assignments, onRowClick }) {
  const getDelivery = (id) => deliveries.find((d) => d.id === id);
  const getDriver = (id) => drivers.find((d) => d.id === id);
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="px-2 py-2">Assignment ID</th>
              <th className="px-2 py-2">Delivery</th>
              <th className="px-2 py-2">Driver</th>
              <th className="px-2 py-2">Status</th>
              <th className="px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => {
              const delivery = getDelivery(a.deliveryId);
              const driver = getDriver(a.driverId);
              return (
                <tr
                  key={a.id}
                  className="border-b hover:bg-blue-50 cursor-pointer transition"
                >
                  <td className="px-2 py-2 font-medium">{a.id}</td>
                  <td className="px-2 py-2">
                    {delivery ? delivery.pickup + " → " + delivery.drop : "-"}
                  </td>
                  <td className="px-2 py-2">{driver ? driver.name : "-"}</td>
                  <td className="px-2 py-2">
                    <StatusBadge status={a.status} />
                  </td>
                  <td className="px-2 py-2">
                    <button className="px-2 py-1 text-xs rounded bg-green-100 text-green-700 mr-1">
                      Delivered
                    </button>
                    <button className="px-2 py-1 text-xs rounded bg-red-100 text-red-700 mr-1">
                      Missed
                    </button>
                    <button className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                      Reassign
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
