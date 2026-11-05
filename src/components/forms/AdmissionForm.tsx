"use client";

import Icon from "../Icon";
import Field from "./Field";
import FormStatus from "./FormStatus";
import SubmitButton from "./SubmitButton";
import { gradeOptions } from "@/lib/data";
import { useForm } from "@/lib/useForm";
import { validateAdmission } from "@/lib/validation";

const initial = {
  studentName: "",
  dob: "",
  gender: "",
  grade: "",
  previousSchool: "",
  parentName: "",
  relation: "Father",
  email: "",
  phone: "",
  address: "",
  notes: "",
  agree: "",
};

const today = new Date().toISOString().split("T")[0];

export default function AdmissionForm() {
  const { values, status, message, onSubmit, onChange, onBlur, errorFor, field } = useForm(
    initial,
    validateAdmission,
    "/api/admissions",
  );

  return (
    <div className="form-card" id="apply">
      <h3>Online Admission Form</h3>
      <p>Fields marked with * are required. Our admissions team will contact you within 2 working days.</p>

      <FormStatus status={status} message={message} />

      <form onSubmit={onSubmit} noValidate>
        <h4 className="form-section-title">
          <Icon name="cap" size={20} /> Student Information
        </h4>
        <div className="form-grid">
          <Field label="Student Full Name" name="studentName" required error={errorFor("studentName")}>
            <input type="text" placeholder="As on B-Form" {...field("studentName")} />
          </Field>
          <Field label="Date of Birth" name="dob" required error={errorFor("dob")}>
            <input type="date" max={today} {...field("dob")} />
          </Field>

          <fieldset className={`field fieldset${errorFor("gender") ? " field--error" : ""}`}>
            <legend>
              Gender
              <span className="req" aria-hidden="true">
                *
              </span>
            </legend>
            <div className="radio-group">
              {["Male", "Female"].map((g) => (
                <label key={g}>
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={values.gender === g}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {g}
                </label>
              ))}
            </div>
            {errorFor("gender") && (
              <span className="field__error" role="alert">
                {errorFor("gender")}
              </span>
            )}
          </fieldset>

          <Field label="Applying for Grade" name="grade" required error={errorFor("grade")}>
            <select {...field("grade")}>
              <option value="">Select grade</option>
              {gradeOptions.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </Field>
          <Field label="Previous School" name="previousSchool" full hint="Leave blank if this is the first school">
            <input type="text" placeholder="Name of previous school" {...field("previousSchool")} />
          </Field>
        </div>

        <h4 className="form-section-title">
          <Icon name="users" size={20} /> Parent / Guardian Information
        </h4>
        <div className="form-grid">
          <Field label="Parent / Guardian Name" name="parentName" required error={errorFor("parentName")}>
            <input type="text" autoComplete="name" {...field("parentName")} />
          </Field>
          <Field label="Relation" name="relation">
            <select {...field("relation")}>
              <option>Father</option>
              <option>Mother</option>
              <option>Guardian</option>
            </select>
          </Field>
          <Field label="Email Address" name="email" required error={errorFor("email")}>
            <input type="email" autoComplete="email" placeholder="you@example.com" {...field("email")} />
          </Field>
          <Field label="Phone Number" name="phone" required error={errorFor("phone")}>
            <input type="tel" autoComplete="tel" placeholder="0300 1234567" {...field("phone")} />
          </Field>
          <Field label="Home Address" name="address" required full error={errorFor("address")}>
            <input type="text" autoComplete="street-address" {...field("address")} />
          </Field>
          <Field label="Additional Notes" name="notes" full hint="Medical needs, transport requirement, etc. (optional)">
            <textarea rows={3} {...field("notes")} />
          </Field>
        </div>

        <div className={`field field--agree${errorFor("agree") ? " field--error" : ""}`}>
          <label className="checkbox">
            <input
              type="checkbox"
              name="agree"
              checked={values.agree === "yes"}
              onChange={onChange}
              onBlur={onBlur}
            />
            I confirm that the information provided is correct and I agree to the school&rsquo;s admission policy.
          </label>
          {errorFor("agree") && (
            <span className="field__error" role="alert">
              {errorFor("agree")}
            </span>
          )}
        </div>

        <div className="form-actions">
          <SubmitButton loading={status === "submitting"} label="Submit Application" />
        </div>
      </form>
    </div>
  );
}
