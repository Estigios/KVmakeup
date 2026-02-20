export type UserRole = "administrador" | "vendedor" | "cliente";

export type RolePermission = {
  role: UserRole;
  canAccessDashboard: boolean;
  canManageInventory: boolean;
  canManageReceivables: boolean;
  canCreateProducts: boolean;
  canBuyOnline: boolean;
};

export type CustomerStatus = "nuevo" | "fiel" | "inactivo";

export type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  totalSpent: number;
  status: CustomerStatus;
};

export type ProductCategory = "rostro" | "ojos" | "labios" | "brochas";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  stock: number;
  image: string;
  bestseller?: boolean;
};

export type Sale = {
  id: string;
  customerId: string;
  total: number;
  date: string;
  channel: "instagram" | "whatsapp" | "web";
  status: "pagado" | "pendiente";
};

export type Receivable = {
  id: string;
  customer: string;
  dueDate: string;
  amount: number;
  status: "vigente" | "vencido";
};

export const rolePermissions: RolePermission[] = [
  {
    role: "administrador",
    canAccessDashboard: true,
    canManageInventory: true,
    canManageReceivables: true,
    canCreateProducts: true,
    canBuyOnline: true
  },
  {
    role: "vendedor",
    canAccessDashboard: true,
    canManageInventory: true,
    canManageReceivables: false,
    canCreateProducts: false,
    canBuyOnline: true
  },
  {
    role: "cliente",
    canAccessDashboard: false,
    canManageInventory: false,
    canManageReceivables: false,
    canCreateProducts: false,
    canBuyOnline: true
  }
];

export const customers: Customer[] = [
  {
    id: "C-001",
    name: "María López",
    phone: "+57 300 111 2233",
    email: "maria.lopez@email.com",
    city: "Medellín",
    totalSpent: 560000,
    status: "fiel"
  },
  {
    id: "C-002",
    name: "Ana Díaz",
    phone: "+57 301 000 1122",
    email: "ana.diaz@email.com",
    city: "Bogotá",
    totalSpent: 189000,
    status: "nuevo"
  },
  {
    id: "C-003",
    name: "Carolina Pérez",
    phone: "+57 315 400 9988",
    email: "carolina.p@email.com",
    city: "Cali",
    totalSpent: 99000,
    status: "inactivo"
  }
];

export const products: Product[] = [
  {
    id: "P-001",
    name: "Base Líquida HD",
    category: "rostro",
    description: "Cobertura media-alta con acabado natural para uso diario.",
    price: 59900,
    stock: 16,
    image: "/images/base-hd.jpg",
    bestseller: true
  },
  {
    id: "P-002",
    name: "Labial Mate Velvet",
    category: "labios",
    description: "Larga duración y textura cremosa con tono ciruela.",
    price: 38900,
    stock: 42,
    image: "/images/labial-velvet.jpg",
    bestseller: true
  },
  {
    id: "P-003",
    name: "Paleta Nude Pro",
    category: "ojos",
    description: "12 tonos neutros para looks de día y noche.",
    price: 89900,
    stock: 8,
    image: "/images/paleta-nude.jpg"
  },
  {
    id: "P-004",
    name: "Set Brochas Soft 8p",
    category: "brochas",
    description: "Set profesional de brochas sintéticas para rostro y ojos.",
    price: 75900,
    stock: 20,
    image: "/images/brochas-soft.jpg"
  }
];

export const sales: Sale[] = [
  {
    id: "S-1001",
    customerId: "C-001",
    total: 159800,
    date: "2026-02-01",
    channel: "web",
    status: "pagado"
  },
  {
    id: "S-1002",
    customerId: "C-002",
    total: 38900,
    date: "2026-02-03",
    channel: "instagram",
    status: "pendiente"
  },
  {
    id: "S-1003",
    customerId: "C-001",
    total: 119800,
    date: "2026-02-10",
    channel: "whatsapp",
    status: "pagado"
  }
];

export const receivables: Receivable[] = [
  { id: "CC-01", customer: "Ana Díaz", dueDate: "2026-02-18", amount: 38900, status: "vigente" },
  {
    id: "CC-02",
    customer: "Carolina Pérez",
    dueDate: "2026-02-02",
    amount: 56000,
    status: "vencido"
  }
];
