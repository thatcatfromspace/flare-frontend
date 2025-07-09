// Score calculators for FLARE
export function calculateCO2Saved(deliveries, drivers) {
  // Mock: EV saves 100g/mi, Hybrid 50g/mi, Petrol 0g/mi
  let total = 0;
  deliveries.forEach((delivery) => {
    const driver = drivers.find((d) => d.id === delivery.assignedDriver);
    if (!driver) return;
    if (driver.vehicleType === "Electric") total += 100;
    else if (driver.vehicleType === "Hybrid") total += 50;
  });
  return total;
}

export function calculateFuelSaved(deliveries, drivers) {
  // Mock: EV saves 1 gal/100mi, Hybrid 0.5 gal/100mi, Petrol 0
  let total = 0;
  deliveries.forEach((delivery) => {
    const driver = drivers.find((d) => d.id === delivery.assignedDriver);
    if (!driver) return;
    if (driver.vehicleType === "Electric") total += 1;
    else if (driver.vehicleType === "Hybrid") total += 0.5;
  });
  return total;
}
