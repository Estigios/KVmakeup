import { NextResponse } from "next/server";
import { products } from "@/data/mock";

export async function GET() {
  return NextResponse.json({
    source: "kv-admin-products-api",
    items: products,
    requiredRole: "administrador"
  });
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    category?: string;
    description?: string;
    price?: number;
    stock?: number;
    image?: string;
  };

  if (!body.name || !body.category || typeof body.price !== "number" || typeof body.stock !== "number") {
    return NextResponse.json(
      {
        ok: false,
        message: "Faltan campos obligatorios: name, category, price, stock",
        requiredRole: "administrador"
      },
      { status: 400 }
    );
  }

  const created = {
    id: `P-${Math.floor(Math.random() * 9000 + 1000)}`,
    name: body.name,
    category: body.category,
    description: body.description ?? "",
    price: body.price,
    stock: body.stock,
    image: body.image ?? ""
  };

  return NextResponse.json(
    {
      ok: true,
      message: "Producto validado para creación (demo sin DB)",
      requiredRole: "administrador",
      item: created
    },
    { status: 201 }
  );
}
