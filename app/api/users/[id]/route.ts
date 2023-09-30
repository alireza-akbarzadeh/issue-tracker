import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const singleUser = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!singleUser)
    return NextResponse.json({ error: "user not found" }, { status: 400 });
  else return NextResponse.json(singleUser);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const existUser = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!existUser)
    return NextResponse.json({ error: "user not found" }, { status: 400 });

  const validationResult = schema.safeParse(body);
  if (!validationResult.success)
    return NextResponse.json(
      { error: validationResult.error.errors },
      { status: 400 }
    );

  const updateUser = await prisma.user.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updateUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const existUser = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!existUser)
    return NextResponse.json({ error: "user not found" }, { status: 400 });

  await prisma.user.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json({}, { status: 200 });
}
