import type { ReactNode } from "react";

type Props = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  full?: boolean;
  hint?: string;
  children: ReactNode;
};

/** Label + control + error message wrapper used by every form field. */
export default function Field({ label, name, error, required, full, hint, children }: Props) {
  return (
    <div className={`field${full ? " field--full" : ""}${error ? " field--error" : ""}`}>
      <label htmlFor={name}>
        {label}
        {required && (
          <span className="req" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error ? (
        <span className="field__error" id={`${name}-error`} role="alert">
          {error}
        </span>
      ) : (
        hint && <span className="field__hint">{hint}</span>
      )}
    </div>
  );
}
