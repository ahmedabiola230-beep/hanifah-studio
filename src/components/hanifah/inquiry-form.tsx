"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle2, AlertCircle, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICE_OPTIONS, SITE } from "@/lib/site";
import { LegalDialog } from "./legal-dialog";
import { cn } from "@/lib/utils";

/** Validation schema — kept in sync with the API route's server-side validation. */
const inquiryFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your name (at least 2 characters)." }),
  email: z.string().trim().toLowerCase().email({ message: "Please enter a valid email address." }),
  businessName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your business name (at least 2 characters)." }),
  website: z
    .string()
    .trim()
    .max(200, { message: "That website URL looks too long." })
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, { message: "Please choose the service you need." }),
  projectDescription: z
    .string()
    .trim()
    .min(20, {
      message: "Please describe your project in at least 20 characters — details help me help you.",
    })
    .max(3000, { message: "Please keep your description under 3,000 characters." }),
});

type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputStyles =
  "h-12 rounded-xl border-navy-900/12 bg-white text-[0.95rem] shadow-none transition-colors focus-visible:ring-2 focus-visible:ring-lavender-400 focus-visible:border-lavender-400 aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-red-200";

/**
 * Inquiry form — validates on the client and submits to /api/inquiry,
 * which stores the inquiry in the studio's database. Honest states only:
 * a success message is shown only when the server confirms receipt.
 */
export function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      website: "",
      service: "",
      projectDescription: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: InquiryFormValues) => {
    setStatus("submitting");
    setServerMessage(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setServerMessage(
          data.message ?? "Your inquiry could not be submitted. Please try again in a moment."
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setServerMessage(
        "A network error occurred and your inquiry was not submitted. Please check your connection and try again."
      );
    }
  };

  /* ── Success state ─────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-white p-8 text-center shadow-soft"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">
          Thank you — your inquiry was received.
        </h3>
        <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-500">
          Your project details have been submitted to Hanifah Studio and stored securely. You&rsquo;ll
          get a personal reply at the email address you provided, together with any follow-up
          questions and a clear, no-obligation quote.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            reset();
            setStatus("idle");
          }}
          className="mt-7 h-11 rounded-full border-navy-900/15 px-6 font-semibold text-navy-900 hover:bg-lavender-100 hover:text-navy-900"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  /* ── Form ──────────────────────────────────────────────────── */
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-navy-900/8 bg-white p-6 shadow-soft sm:p-8"
      aria-label="Website project inquiry form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="inq-name" className="text-sm font-semibold text-navy-900">
            Your name <span className="text-lavender-700" aria-hidden="true">*</span>
          </Label>
          <Input
            id="inq-name"
            autoComplete="name"
            placeholder="e.g. Amina Yusuf"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "inq-name-error" : undefined}
            className={inputStyles}
            {...register("name")}
          />
          {errors.name && (
            <p id="inq-name-error" role="alert" className="text-xs font-medium text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="inq-email" className="text-sm font-semibold text-navy-900">
            Email address <span className="text-lavender-700" aria-hidden="true">*</span>
          </Label>
          <Input
            id="inq-email"
            type="email"
            autoComplete="email"
            placeholder="you@yourbusiness.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "inq-email-error" : undefined}
            className={inputStyles}
            {...register("email")}
          />
          {errors.email && (
            <p id="inq-email-error" role="alert" className="text-xs font-medium text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Business name */}
        <div className="space-y-2">
          <Label htmlFor="inq-business" className="text-sm font-semibold text-navy-900">
            Business name <span className="text-lavender-700" aria-hidden="true">*</span>
          </Label>
          <Input
            id="inq-business"
            autoComplete="organization"
            placeholder="e.g. Bloom & Co."
            aria-invalid={!!errors.businessName}
            aria-describedby={errors.businessName ? "inq-business-error" : undefined}
            className={inputStyles}
            {...register("businessName")}
          />
          {errors.businessName && (
            <p id="inq-business-error" role="alert" className="text-xs font-medium text-red-600">
              {errors.businessName.message}
            </p>
          )}
        </div>

        {/* Website (optional) */}
        <div className="space-y-2">
          <Label htmlFor="inq-website" className="text-sm font-semibold text-navy-900">
            Current website{" "}
            <span className="font-normal text-ink-400">(optional)</span>
          </Label>
          <Input
            id="inq-website"
            type="url"
            placeholder="https://… (or leave empty)"
            aria-invalid={!!errors.website}
            aria-describedby={errors.website ? "inq-website-error" : undefined}
            className={inputStyles}
            {...register("website")}
          />
          {errors.website && (
            <p id="inq-website-error" role="alert" className="text-xs font-medium text-red-600">
              {errors.website.message}
            </p>
          )}
        </div>

        {/* Service */}
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="inq-service" className="text-sm font-semibold text-navy-900">
            Service required <span className="text-lavender-700" aria-hidden="true">*</span>
          </Label>
          <Controller
            name="service"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="inq-service"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "inq-service-error" : undefined}
                  className={cn(
                    "h-12 w-full rounded-xl border-navy-900/12 bg-white text-[0.95rem] data-[placeholder]:text-ink-400",
                    errors.service && "border-red-400 ring-red-200"
                  )}
                >
                  <SelectValue placeholder="What do you need?" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-navy-900/10">
                  {SERVICE_OPTIONS.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="rounded-lg text-[0.95rem]"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service && (
            <p id="inq-service-error" role="alert" className="text-xs font-medium text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Project description */}
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="inq-description" className="text-sm font-semibold text-navy-900">
            About your project <span className="text-lavender-700" aria-hidden="true">*</span>
          </Label>
          <Textarea
            id="inq-description"
            rows={5}
            placeholder="Tell me about your business, your goals, and the website you have in mind — the more detail, the better I can help."
            aria-invalid={!!errors.projectDescription}
            aria-describedby={errors.projectDescription ? "inq-description-error" : undefined}
            className="min-h-[120px] rounded-xl border-navy-900/12 bg-white text-[0.95rem] transition-colors focus-visible:ring-2 focus-visible:ring-lavender-400 focus-visible:border-lavender-400"
            {...register("projectDescription")}
          />
          <div className="flex items-start justify-between gap-4">
            {errors.projectDescription ? (
              <p id="inq-description-error" role="alert" className="text-xs font-medium text-red-600">
                {errors.projectDescription.message}
              </p>
            ) : (
              <p className="text-xs text-ink-400">
                Products, services, goals, examples you like — anything helps.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Error banner (server/network failures) */}
      {status === "error" && serverMessage && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
          <div className="text-sm leading-relaxed text-red-800">
            {serverMessage}{" "}
            <span>
              You can also email me directly at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-semibold underline underline-offset-2 hover:text-red-900"
              >
                {SITE.email}
              </a>
              .
            </span>
          </div>
        </div>
      )}

      {/* Submit */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="group h-13 rounded-full bg-navy-900 px-8 py-4 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send My Inquiry
              <Send
                className="h-4.5 w-4.5 text-lavender-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </Button>
        <p className="max-w-xs text-xs leading-relaxed text-ink-400">
          Submitting shares your name, email, business details, and project description with
          Hanifah Studio — used only to reply to your inquiry.{" "}
          <LegalDialog kind="privacy" className="font-medium underline underline-offset-2 hover:text-navy-900">
            Privacy Policy
          </LegalDialog>
        </p>
      </div>
    </form>
  );
}
