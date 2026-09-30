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

export const vehicles: Vehicle[] = [
  {
    id: "land-cruiser-zx-2021",
    make: "Toyota",
    model: "Land Cruiser ZX",
    name: "Toyota Land Cruiser ZX",
    year: 2021,
    mileage: 42000,
    fuel: "Diesel",
    transmission: "Automatic",
    body: "SUV",
    price: 12500000,
    location: "Kangundo Road, Nairobi",
    source: "Imported",
    status: "Available",
    description: "Demo listing for the Safi Motors platform. Replace with confirmed dealership stock before publishing.",
    images: ["https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=85"],
  },
  {
    id: "nissan-x-trail-2019",
    make: "Nissan",
    model: "X-Trail",
    name: "Nissan X-Trail",
    year: 2019,
    mileage: 68000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "SUV",
    price: 2950000,
    location: "Kangundo Road, Nairobi",
    source: "Imported",
    status: "Available",
    description: "Demo listing for the Safi Motors platform. Replace with confirmed dealership stock before publishing.",
    images: ["https://images.unsplash.com/photo-1517994112540-009c47ea476b?auto=format&fit=crop&w=1400&q=85"],
  },
  {
    id: "toyota-camry-hybrid-2020",
    make: "Toyota",
    model: "Camry Hybrid",
    name: "Toyota Camry Hybrid",
    year: 2020,
    mileage: 51000,
    fuel: "Hybrid",
    transmission: "Automatic",
    body: "Sedan",
    price: 4350000,
    location: "Kangundo Road, Nairobi",
    source: "Imported",
    status: "Available",
    description: "Demo listing for the Safi Motors platform. Replace with confirmed dealership stock before publishing.",
    images: ["https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1400&q=85"],
  },
];

export const formatKes = (value: number) =>
  new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(value);
