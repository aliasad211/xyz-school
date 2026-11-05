import { NextResponse } from "next/server";
import { validateAdmission } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const errors = validateAdmission(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  // A reference number the parent can quote when following up.
  const reference = `XYZ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  // In production this would be stored in a database and the admissions office notified.
  console.log("[admissions] application", reference, "for", body.grade);

  return NextResponse.json({
    reference,
    message: `Application for ${String(body.studentName).trim()} (${body.grade}) has been submitted. Your reference number is ${reference}. Our admissions team will contact you shortly.`,
  });
}
