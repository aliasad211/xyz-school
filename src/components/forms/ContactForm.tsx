"use client";

import Field from "./Field";
import FormStatus from "./FormStatus";
import SubmitButton from "./SubmitButton";
import { useForm } from "@/lib/useForm";
import { validateContact } from "@/lib/validation";

const initial = { name: "", email: "", phone: "", subject: "", message: "" };

const subjects = ["General Enquiry", "Admissions", "Fee & Payments", "Transport", "Careers", "Feedback"];

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const { status, message, onSubmit, errorFor, field, values } = useForm(initial, validateContact, "/api/contact");

  return (
    <div className="form-card">
      <h3>Send Us a Message</h3>
      <p>We usually reply within one working day.</p>

      <FormStatus status={status} message={message} />

      <form onSubmit={onSubmit} noValidate>
        <div className="form-grid">
          <Field label="Full Name" name="name" required error={errorFor("name")}>
            <input type="text" autoComplete="name" placeholder="e.g. Ali Raza" {...field("name")} />
          </Field>
          <Field label="Email Address" name="email" required error={errorFor("email")}>
            <input type="email" autoComplete="email" placeholder="you@example.com" {...field("email")} />
          </Field>
          <Field label="Phone Number" name="phone" error={errorFor("phone")} hint="Optional">
            <input type="tel" autoComplete="tel" placeholder="0300 1234567" {...field("phone")} />
          </Field>
          <Field label="Subject" name="subject" required error={errorFor("subject")}>
            <select {...field("subject")}>
              <option value="">Select a subject</option>
              {subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
          <Field
            label="Message"
            name="message"
            required
            full
            error={errorFor("message")}
            hint={`${values.message.length}/1000 characters`}
          >
            <textarea
              rows={compact ? 4 : 6}
              maxLength={1000}
              placeholder="How can we help you?"
              {...field("message")}
            />
          </Field>
        </div>
        <div className="form-actions">
          <SubmitButton loading={status === "submitting"} label="Send Message" />
        </div>
      </form>
    </div>
  );
}
