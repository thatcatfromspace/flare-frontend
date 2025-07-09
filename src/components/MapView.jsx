import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import { deliveries } from "../data/deliveries";
import { drivers } from "../data/drivers";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  return (
    <div className="h-[70vh] w-full rounded-xl overflow-hidden shadow">
      <MapContainer
        center={[28.54, -81.38]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Delivery routes as polylines */}
        {deliveries.map((d) =>
          d.route && d.route.length > 1 ? (
            <Polyline key={d.id} positions={d.route} color="#2563eb" />
          ) : null
        )}
        {/* Driver markers */}
        {drivers.map((d) => (
          <Marker key={d.id} position={d.location}>
            <Popup>
              <b>{d.name}</b>
              <br />
              {d.vehicle} ({d.vehicleType})<br />
              Current assignment:{" "}
              {d.assignments.length ? d.assignments.join(", ") : "None"}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
