import connectDB from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required." }, { status: 400 });
    }

    const subscriber = await Subscriber.create({ email });
    return NextResponse.json({ success: true, data: subscriber }, { status: 201 });
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "You are already subscribed!" },
        { status: 409 }
      );
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
