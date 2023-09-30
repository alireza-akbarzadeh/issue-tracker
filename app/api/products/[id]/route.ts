import { NextRequest, NextResponse } from "next/server";

import productSchema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!product)
    return NextResponse.json({ error: "user not found" }, { status: 400 });
  else return NextResponse.json(product);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  const isProduct = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  if (!isProduct)
    return NextResponse.json({ error: "product notfound" }, { status: 400 });

  await prisma.product.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json({}, { status: 200 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  const isProduct = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  if (!isProduct)
    return NextResponse.json({ error: "product notfound" }, { status: 400 });

  const mutated = await prisma.product.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(mutated, { status: 201 });
}
