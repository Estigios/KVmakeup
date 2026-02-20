import { NextResponse } from "next/server";
import { products } from "@/data/mock";

export async function GET() {
  const categories = ["rostro", "ojos", "labios", "brochas"].map((category) => ({
    slug: category,
    title: category.toUpperCase(),
    products: products.filter((product) => product.category === category)
  }));

  return NextResponse.json({
    source: "kv-storefront-api",
    inspiration: ["Shopify collection grid", "Amazon category navigation", "Falabella product cards"],
    currency: "COP",
    categories
  });
}
