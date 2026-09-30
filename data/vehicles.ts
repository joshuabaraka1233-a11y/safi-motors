export type Vehicle = {
  id: string;
  make: string;
  model: string;
  name: string;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  body: string;
  price: number;
  location: string;
  source: "Imported" | "Local";
  status: "Available" | "Sold" | "Reserved";
  description: string;
  images: string[];
};

/**
 * Verified-stock policy:
 * Do not publish a vehicle here until Safi Motors confirms the vehicle,
 * specifications, price/status, and supplies an approved photo.
 */
export const vehicles: Vehicle[] = [];

export const formatKes = (value: number) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(value);
