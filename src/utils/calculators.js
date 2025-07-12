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

// Compute a normalized driver fit score for a delivery (0.0000–1.0000)
export function compute_total_score(driver, delivery) {
  // Mock scoring logic based on available fields
  // Each factor is normalized to [0,1] and weighted
  if (!driver || !delivery) return 0;

  // Distance to pickup (mock: closer is better, but we don't have actual distance, so random for now)
  let distanceScore = 0.8; // Placeholder, could use Math.random() or a fixed value

  // Reliability (0-100)
  let reliabilityScore = driver.reliability / 100;

  // Acceptance rate (0-100)
  let acceptanceScore = driver.acceptanceRate / 100;

  // Sustainability (EV best, then Hybrid, then Petrol)
  let sustainabilityScore = 0;
  if (driver.vehicleType === "Electric") sustainabilityScore = 1;
  else if (driver.vehicleType === "Hybrid") sustainabilityScore = 0.7;
  else sustainabilityScore = 0.3;

  // Traffic delay (lower is better, max 5+)
  let trafficScore = 1 - Math.min(delivery.trafficDelay || 0, 5) / 5;

  // Weather delay (lower is better, max 3+)
  let weatherScore = 1 - Math.min(delivery.weatherImpact || 0, 3) / 3;

  // Cost efficiency (mock: higher mpg/kWh is better, normalize to [0,1] by dividing by 120)
  let costScore = (driver.mpg || driver.kWh || 0) / 120;
  if (costScore > 1) costScore = 1;

  // Weighted sum (weights can be tuned)
  const score =
    0.15 * distanceScore +
    0.2 * reliabilityScore +
    0.15 * acceptanceScore +
    0.15 * sustainabilityScore +
    0.15 * trafficScore +
    0.1 * weatherScore +
    0.1 * costScore;

  return Math.max(0, Math.min(1, Number(score.toFixed(4))));
}
