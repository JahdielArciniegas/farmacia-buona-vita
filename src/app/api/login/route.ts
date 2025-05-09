import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Login GET" });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({ message: "Login POST", data: body });
}
