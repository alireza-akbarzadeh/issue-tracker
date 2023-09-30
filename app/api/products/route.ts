import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products, {
    status: 200,
    statusText: "Success Fully Get Data",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validatin = productSchema.safeParse(body);

  if (!validatin.success)
    return NextResponse.json(
      { error: validatin.error.errors },
      { status: 400 }
    );

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}
