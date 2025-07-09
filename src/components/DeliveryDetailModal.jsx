import React from "react";
import { drivers } from "../data/drivers";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function DeliveryDetailModal({ delivery, onClose }) {
  if (!delivery) return null;
  const driver = drivers.find((d) => d.id === delivery.assignedDriver);
  const route = delivery.route || [];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-2 text-blue-700">
          Delivery {delivery.id}
        </h2>
        <div className="mb-2 text-sm text-gray-600">
          <b>Pickup:</b> {delivery.pickup} <br />
          <b>Drop:</b> {delivery.drop} <br />
          <b>Size:</b> {delivery.size_lbs} lbs <br />
          <b>ETA:</b> {delivery.eta} <br />
          <b>Status:</b> {delivery.status} <br />
          <b>Driver:</b> {driver ? driver.name : "-"}
        </div>
        <div className="h-48 w-full rounded overflow-hidden mb-2">
          <MapContainer
            center={route[0] || [28.5383, -81.3792]}
            zoom={12}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {route.length > 1 && <Polyline positions={route} color="#2563eb" />}
            {route.map((pos, i) => (
              <Marker key={i} position={pos}>
                <Popup>
                  {i === 0
                    ? "Pickup"
                    : i === route.length - 1
                    ? "Drop"
                    : "Waypoint"}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
