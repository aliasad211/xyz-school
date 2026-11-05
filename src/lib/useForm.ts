"use client";

import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import type { FormErrors, FormValues } from "./validation";

type Status = "idle" | "submitting" | "success" | "error";
type FieldEl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * Small form-state hook used by the contact and admission forms.
 * - Errors appear for a field after it is touched (blurred) or on submit.
 * - Once shown, errors update live as the user types.
 * - On a valid submit it POSTs JSON to `endpoint`; the server re-validates.
 */
export function useForm(initial: FormValues, validate: (v: FormValues) => FormErrors, endpoint: string) {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onChange = (e: ChangeEvent<FieldEl>) => {
    const { name, type, value } = e.target;
    const v = type === "checkbox" ? ((e.target as HTMLInputElement).checked ? "yes" : "") : value;
    const next = { ...values, [name]: v };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
    if (status !== "idle" && status !== "submitting") setStatus("idle");
  };

  const onBlur = (e: FocusEvent<FieldEl>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched(Object.fromEntries(Object.keys(initial).map((k) => [k, true])));

    const firstInvalid = Object.keys(initial).find((k) => found[k]);
    if (firstInvalid) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      setStatus("error");
      setMessage("Please correct the highlighted fields.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.message || "Something went wrong.");
      }
      setStatus("success");
      setMessage(data.message);
      setValues(initial);
      setTouched({});
      setErrors({});
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Network error. Please try again.");
    }
  };

  /** Error to display for a field (only after it has been touched). */
  const errorFor = (name: string) => (touched[name] ? errors[name] : undefined);

  /** Props to spread onto an input/select/textarea. */
  const field = (name: string) => ({
    id: name,
    name,
    value: values[name] ?? "",
    onChange,
    onBlur,
    "aria-invalid": Boolean(errorFor(name)),
    "aria-describedby": errorFor(name) ? `${name}-error` : undefined,
  });

  return { values, status, message, onChange, onBlur, onSubmit, errorFor, field };
}
