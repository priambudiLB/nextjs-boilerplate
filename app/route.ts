import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("whifffit");
  const exercise = await db.collection("exercise").findOne({});
  return NextResponse.json(exercise?.exercise);
}

