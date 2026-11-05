import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";

// Server-side validation: never trust the browser alone.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  // In production this would send an email or save to a database.
  console.log("[contact] new message from", body.email);

  return NextResponse.json({
    message: `Your message has been received, ${String(body.name).trim().split(" ")[0]}. We will get back to you soon.`,
  });
}
