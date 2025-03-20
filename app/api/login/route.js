import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { username, password, userType } = await request.json();

  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .eq("password", password)
      .eq("type", userType)
      .single();

    if (error || !data) {
      console.error("Login error:", error);
      return NextResponse.json({ error: "Login failed. Please try again." }, { status: 401 });
    }

    const token = jwt.sign(
      { username: data.username, type: data.type },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return NextResponse.json({ message: "Login successful!", token });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
