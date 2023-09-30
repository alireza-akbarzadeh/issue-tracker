import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const user = await prisma.user.findMany();
  return NextResponse.json(user);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, name } = body;

  const singleUser = await prisma.user.findUnique({
    where: { email },
  });
  if (singleUser) {
    return NextResponse.json({ error: "User already exist" }, { status: 400 });
  }
  const users = await prisma.user.create({
    data: {
      email,
      name,
    },
  });
  const validate = schema.safeParse(body);
  if (!validate.success)
    return NextResponse.json({ error: validate.error.errors }, { status: 400 });
  return NextResponse.json(users, { status: 201 });
}
