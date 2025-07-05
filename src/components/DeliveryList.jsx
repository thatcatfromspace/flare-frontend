import React from "react";

export default function DeliveryList({ deliveries }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Pickup</th>
            <th className="px-4 py-2 text-left">Drop</th>
            <th className="px-4 py-2 text-left">Size (lbs)</th>
            <th className="px-4 py-2 text-left">ETA</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 font-medium">{delivery.id}</td>
              <td className="px-4 py-2">{delivery.pickup}</td>
              <td className="px-4 py-2">{delivery.drop}</td>
              <td className="px-4 py-2">{delivery.size}</td>
              <td className="px-4 py-2">{delivery.eta}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                    delivery.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : delivery.status === "In Transit"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {delivery.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
