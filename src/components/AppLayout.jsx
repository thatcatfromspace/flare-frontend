import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiTruck,
  FiMap,
  FiSettings,
  FiTrendingUp,
  FiList,
} from "react-icons/fi";
import flareLogo from "../assets/flare-logo.svg";

const navItems = [
  { to: "/", label: "Dashboard", icon: <FiHome /> },
  { to: "/drivers", label: "Drivers", icon: <FiUsers /> },
  { to: "/deliveries", label: "Deliveries", icon: <FiTruck /> },
  { to: "/assignments", label: "Assignments", icon: <FiList /> },
  { to: "/sustainability", label: "Sustainability", icon: <FiTrendingUp /> },
  { to: "/map", label: "Map View", icon: <FiMap /> },
  { to: "/settings", label: "Settings", icon: <FiSettings /> },
];

export default function AppLayout({ children }) {
  const location = useLocation();
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-20 md:w-56 bg-white shadow-lg flex flex-col items-center py-6">
        <img src={flareLogo} alt="FLARE Logo" className="w-16 h-16 mb-8" />
        <nav className="flex flex-col gap-4 w-full items-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg w-5/6 transition font-semibold text-gray-700 hover:bg-blue-100 ${
                location.pathname === item.to ? "bg-blue-100 text-blue-700" : ""
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden md:inline">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-white">
        {children}
      </main>
    </div>
  );
}
