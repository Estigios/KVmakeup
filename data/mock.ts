export type Customer = {
  id: string;
  name: string;
  phone: string;
  lastPurchase: string;
  status: "nuevo" | "fiel" | "inactivo";
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
};

export const customers: Customer[] = [
  {
    id: "C-001",
    name: "María López",
    phone: "+57 300 111 2233",
    lastPurchase: "2026-01-18",
    status: "fiel"
  },
  {
    id: "C-002",
    name: "Ana Díaz",
    phone: "+57 301 000 1122",
    lastPurchase: "2025-12-09",
    status: "nuevo"
  },
  {
    id: "C-003",
    name: "Carolina Pérez",
    phone: "+57 315 400 9988",
    lastPurchase: "2025-08-04",
    status: "inactivo"
  }
];

export const products: Product[] = [
  { id: "P-001", name: "Base Líquida HD", category: "rostro", price: 59900, stock: 16 },
  { id: "P-002", name: "Labial Mate Velvet", category: "labios", price: 38900, stock: 42 },
  { id: "P-003", name: "Paleta Nude Pro", category: "ojos", price: 89900, stock: 8 }
];
