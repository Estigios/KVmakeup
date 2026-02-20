export type CustomerStatus = "nuevo" | "fiel" | "inactivo";

export type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  lastPurchase: string;
  totalSpent: number;
  status: CustomerStatus;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  bestseller?: boolean;
};

export type Sale = {
  id: string;
  customerId: string;
  total: number;
  date: string;
  channel: "instagram" | "whatsapp" | "web";
};

export const customers: Customer[] = [
  {
    id: "C-001",
    name: "María López",
    phone: "+57 300 111 2233",
    email: "maria.lopez@email.com",
    city: "Medellín",
    lastPurchase: "2026-01-18",
    totalSpent: 560000,
    status: "fiel"
  },
  {
    id: "C-002",
    name: "Ana Díaz",
    phone: "+57 301 000 1122",
    email: "ana.diaz@email.com",
    city: "Bogotá",
    lastPurchase: "2025-12-09",
    totalSpent: 189000,
    status: "nuevo"
  },
  {
    id: "C-003",
    name: "Carolina Pérez",
    phone: "+57 315 400 9988",
    email: "carolina.p@email.com",
    city: "Cali",
    lastPurchase: "2025-08-04",
    totalSpent: 99000,
    status: "inactivo"
  }
];

export const products: Product[] = [
  {
    id: "P-001",
    name: "Base Líquida HD",
    category: "rostro",
    price: 59900,
    stock: 16,
    bestseller: true
  },
  {
    id: "P-002",
    name: "Labial Mate Velvet",
    category: "labios",
    price: 38900,
    stock: 42,
    bestseller: true
  },
  {
    id: "P-003",
    name: "Paleta Nude Pro",
    category: "ojos",
    price: 89900,
    stock: 8
  },
  {
    id: "P-004",
    name: "Rubor Soft Glow",
    category: "rostro",
    price: 45900,
    stock: 24
  }
];

export const sales: Sale[] = [
  { id: "S-1001", customerId: "C-001", total: 159800, date: "2026-02-01", channel: "web" },
  {
    id: "S-1002",
    customerId: "C-002",
    total: 38900,
    date: "2026-02-03",
    channel: "instagram"
  },
  {
    id: "S-1003",
    customerId: "C-001",
    total: 119800,
    date: "2026-02-10",
    channel: "whatsapp"
  }
];
