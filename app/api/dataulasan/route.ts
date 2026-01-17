// app/api/ulasan/route.ts
import { NextResponse } from "next/server";
import data from "./ulasan.json";

export async function GET() {
  return NextResponse.json(data);
}
