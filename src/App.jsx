import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
// Page imports (to be implemented next)
import DashboardPage from "./pages/DashboardPage";
import DriversPage from "./pages/DriversPage";
import DeliveriesPage from "./pages/DeliveriesPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import MapViewPage from "./pages/MapViewPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/deliveries" element={<DeliveriesPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/map" element={<MapViewPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
