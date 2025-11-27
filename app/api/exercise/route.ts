import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { exercise } = await request.json();
  const client = await clientPromise;
  const db = client.db("whifffit");
  await db.collection("exercise").updateOne({}, { $set: { exercise } });
  return NextResponse.json({ success: true, exercise });
}

