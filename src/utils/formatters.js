// Utility functions for FLARE
export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleString();
}

export function formatStatus(status) {
  switch (status) {
    case "Pending":
      return "text-yellow-700 bg-yellow-100";
    case "In Transit":
      return "text-blue-700 bg-blue-100";
    case "Delivered":
      return "text-green-700 bg-green-100";
    default:
      return "text-gray-700 bg-gray-100";
  }
}

export function formatVehicleType(type) {
  switch (type) {
    case "Electric":
      return "text-green-700 bg-green-100";
    case "Hybrid":
      return "text-blue-700 bg-blue-100";
    case "Petrol":
      return "text-yellow-700 bg-yellow-100";
    default:
      return "text-gray-700 bg-gray-100";
  }
}
