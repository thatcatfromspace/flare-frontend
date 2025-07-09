import React from "react";
import { assignments } from "../data/assignments";
import AssignmentTable from "../components/AssignmentTable";
import AssignmentMap from "../components/AssignmentMap";

export default function AssignmentsPage() {
  return (
    <div className="space-y-8 bg-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
        Assignments
      </h1>
      <AssignmentTable assignments={assignments} onRowClick={() => {}} />
      <div>
        <h2 className="font-semibold text-lg mb-2 text-blue-700">
          Live Location Tracking
        </h2>
        <AssignmentMap />
      </div>
    </div>
  );
}
