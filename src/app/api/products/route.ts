import { NextResponse } from "next/server";
import { productsArray } from "@/lib/assets/copy/products";

export async function GET() {
  return NextResponse.json({ data: productsArray }, { status: 200 });
}
