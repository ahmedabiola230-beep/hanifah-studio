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
 * Receives an inquiry from the contact form, validates it, and keeps a
 * backup record in the studio database when one is available. The real
 * delivery path is the WhatsApp handoff in the form, which opens with the
 * full inquiry typed out to the studio number, so the database copy is
 * best effort: on hosts without a writable database (for example Vercel's
 * serverless filesystem) the inquiry is accepted anyway and the visitor
 * continues to WhatsApp without interruption.
 */
export async function POST(request: Request) {
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

  let id: string | null = null;
  try {
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
    id = inquiry.id;
  } catch (error) {
    // No writable database on this host. WhatsApp handoff remains the
    // delivery path, so accept the inquiry and let the form continue.
    console.error("[/api/inquiry] Database copy skipped (no writable storage):", error);
  }

  return NextResponse.json({ ok: true, id, stored: id !== null }, { status: 201 });
}
