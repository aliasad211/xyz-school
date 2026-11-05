// Validation rules shared by the browser forms and the API routes,
// so the same checks run on both client and server.

export type FormValues = Record<string, string>;
export type FormErrors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Pakistani mobile (03XXXXXXXXX / +923XXXXXXXXX) or a general 10–15 digit number.
const PHONE_RE = /^(\+?\d{1,3}[\s-]?)?\d{3}[\s-]?\d{7,8}$/;
const NAME_RE = /^[A-Za-z\s.'-]+$/;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function checkName(v: string, label: string): string | undefined {
  if (!v) return `${label} is required.`;
  if (v.length < 3) return `${label} must be at least 3 characters.`;
  if (!NAME_RE.test(v)) return `${label} can only contain letters and spaces.`;
}

function checkEmail(v: string): string | undefined {
  if (!v) return "Email is required.";
  if (!EMAIL_RE.test(v)) return "Please enter a valid email address.";
}

function checkPhone(v: string): string | undefined {
  if (!v) return "Phone number is required.";
  if (!PHONE_RE.test(v)) return "Please enter a valid phone number, e.g. 0300 1234567.";
}

export function validateContact(input: FormValues): FormErrors {
  const errors: FormErrors = {};
  const name = checkName(str(input.name), "Name");
  const email = checkEmail(str(input.email));
  const subject = str(input.subject);
  const message = str(input.message);

  if (name) errors.name = name;
  if (email) errors.email = email;
  if (str(input.phone) && !PHONE_RE.test(str(input.phone))) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!subject) errors.subject = "Please select a subject.";
  if (!message) errors.message = "Message is required.";
  else if (message.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (message.length > 1000) errors.message = "Message must be under 1000 characters.";
  return errors;
}

/** Age in whole years on a given date. */
export function ageOn(dob: Date, on = new Date()): number {
  let age = on.getFullYear() - dob.getFullYear();
  const m = on.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && on.getDate() < dob.getDate())) age--;
  return age;
}

export function validateAdmission(input: FormValues): FormErrors {
  const errors: FormErrors = {};

  const studentName = checkName(str(input.studentName), "Student name");
  if (studentName) errors.studentName = studentName;

  const dob = str(input.dob);
  if (!dob) errors.dob = "Date of birth is required.";
  else {
    const date = new Date(dob);
    if (Number.isNaN(date.getTime())) errors.dob = "Please enter a valid date.";
    else {
      const age = ageOn(date);
      if (age < 3 || age > 18) errors.dob = "Student must be between 3 and 18 years old.";
    }
  }

  if (!str(input.gender)) errors.gender = "Please select gender.";
  if (!str(input.grade)) errors.grade = "Please select the grade applying for.";

  const parentName = checkName(str(input.parentName), "Parent / guardian name");
  if (parentName) errors.parentName = parentName;

  const email = checkEmail(str(input.email));
  if (email) errors.email = email;

  const phone = checkPhone(str(input.phone));
  if (phone) errors.phone = phone;

  const address = str(input.address);
  if (!address) errors.address = "Address is required.";
  else if (address.length < 10) errors.address = "Please enter a complete address.";

  if (input.agree !== "yes") errors.agree = "You must confirm the information is correct.";
  return errors;
}
