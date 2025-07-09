import React from "react";
import classNames from "classnames";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  "In Transit": "bg-blue-100 text-blue-800",
  Delivered: "bg-green-100 text-green-800",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={classNames(
        "inline-block px-2 py-1 text-xs font-semibold rounded-full",
        statusColors[status] || "bg-gray-100 text-gray-800"
      )}
    >
      {status}
    </span>
  );
}
