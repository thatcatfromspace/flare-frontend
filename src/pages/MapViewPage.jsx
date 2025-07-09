import React from "react";
import MapView from "../components/MapView";

export default function MapViewPage() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
        Map View
      </h1>
      <MapView />
    </div>
  );
}
