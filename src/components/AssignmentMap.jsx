import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import { assignments } from "../data/assignments";
import { deliveries } from "../data/deliveries";
import { drivers } from "../data/drivers";
import "leaflet/dist/leaflet.css";

export default function AssignmentMap() {
  return (
    <div className="h-64 w-full rounded-xl overflow-hidden shadow">
      <MapContainer
        center={[28.54, -81.38]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {assignments.map((a) => {
          const delivery = deliveries.find((d) => d.id === a.deliveryId);
          if (!delivery || !delivery.route) return null;
          return (
            <Polyline key={a.id} positions={delivery.route} color="#2563eb" />
          );
        })}
        {drivers.map((d) => (
          <Marker key={d.id} position={d.location}>
            <Popup>
              <b>{d.name}</b>
              <br />
              {d.vehicle} ({d.vehicleType})
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
