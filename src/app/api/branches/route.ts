import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  const branche = await prisma.branche.findMany();
  return NextResponse.json(branche);
}

export async function POST(request: Request) {
  const { name, img, description } = await request.json();
  const newNote = await prisma.branche.create({
    data: {
      name,
      img,
      description,
    },
  });
  return NextResponse.json(newNote);
}
