import React from "react";
import SettingsPanel from "../components/SettingsPanel";

export default function SettingsPage() {
  return (
    <div className="bg-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
        Settings / Admin Panel
      </h1>
      <SettingsPanel />
    </div>
  );
}
