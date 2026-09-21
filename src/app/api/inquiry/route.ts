import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

/**
 * Server-side validation schema — mirrors the client-side form schema.
 * This is the single source of truth for what gets accepted.
 */
const inquiryApiSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().toLowerCase().email().max(254),
  businessName: z.string().trim().min(2).max(160),
  website: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal("")),
  service: z.string().trim().min(1).max(80),
  projectDescription: z.string().trim().min(20).max(3000),
});

/**
 * POST /api/inquiry
 *
 * Receives an inquiry from the contact form and stores it in the studio
 * database. A success response is returned ONLY after the row is actually
 * persisted — the UI never claims a message was "sent" without this
 * confirmation.
 */
export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, message: "Invalid request format." },
        { status: 400 }
      );
    }

    const parsed = inquiryApiSchema.safeParse(body);
    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message ?? "Please review the highlighted fields and try again.";
      return NextResponse.json(
        { ok: false, message: firstError, issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const inquiry = await db.inquiry.create({
      data: {
        name: data.name,
        email: data.email,
        businessName: data.businessName,
        website: data.website ? data.website : null,
        service: data.service,
        projectDescription: data.projectDescription,
      },
      select: { id: true },
    });

    return NextResponse.json({ ok: true, id: inquiry.id }, { status: 201 });
  } catch (error) {
    console.error("[/api/inquiry] Failed to store inquiry:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "The inquiry could not be stored due to a server issue. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
