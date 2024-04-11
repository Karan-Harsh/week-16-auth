import { NextRequest, NextResponse } from "next/server";

export function GET(
  req: NextRequest,
  { params }: { params: { authRoutes: string[] } }
) {
  console.log(params);
  return NextResponse.json({
    message: "asd",
  });
}
