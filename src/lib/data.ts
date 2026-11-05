// Central content for the site. Pages and components read from here,
// so text changes never require touching layout code.

import type { IconName } from "@/components/Icon";

export const site = {
  name: "XYZ School",
  tagline: "Inspiring Minds, Building Futures",
  url: "https://xyz-school.vercel.app",
  description:
    "XYZ School offers quality education from Early Years to Senior Secondary with modern facilities, experienced faculty and a caring environment.",
  phone: "+92 300 1234567",
  email: "info@xyzschool.edu.pk",
  address: "123 Education Avenue, Gulberg III, Lahore, Pakistan",
  hours: "Mon – Fri: 7:30 AM – 3:30 PM",
  founded: 1998,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact Us" },
];

export type Program = {
  slug: string;
  title: string;
  grades: string;
  ages: string;
  image: string;
  summary: string;
  highlights: string[];
};

export const programs: Program[] = [
  {
    slug: "early-years",
    title: "Early Years",
    grades: "Playgroup – KG",
    ages: "Ages 3 – 5",
    image: "/images/early-years.jpg",
    summary:
      "A play-based curriculum that builds curiosity, language and social skills in a warm, safe setting.",
    highlights: ["Phonics & early literacy", "Montessori activities", "Motor-skill development", "Small class sizes"],
  },
  {
    slug: "primary",
    title: "Primary School",
    grades: "Grade 1 – 5",
    ages: "Ages 6 – 10",
    image: "/images/primary.jpg",
    summary:
      "Strong foundations in English, Urdu, Mathematics and Science, with project-based learning every term.",
    highlights: ["Reading programme", "Hands-on science", "Computer basics", "Character education"],
  },
  {
    slug: "middle",
    title: "Middle School",
    grades: "Grade 6 – 8",
    ages: "Ages 11 – 13",
    image: "/images/middle.jpg",
    summary:
      "Students deepen subject knowledge and develop independent study, critical thinking and teamwork.",
    highlights: ["Subject specialists", "STEM clubs", "Debate & public speaking", "Leadership roles"],
  },
  {
    slug: "senior",
    title: "Senior Secondary",
    grades: "Grade 9 – 12",
    ages: "Ages 14 – 17",
    image: "/images/senior.jpg",
    summary:
      "Matric, FSc and O/A Level streams with career counselling and university-placement guidance.",
    highlights: ["Science & Commerce streams", "Board exam preparation", "Career counselling", "University guidance"],
  },
];

export type Facility = { icon: IconName; title: string; text: string; image?: string };

export const facilities: Facility[] = [
  { icon: "flask", title: "Science Labs", text: "Fully equipped Physics, Chemistry and Biology labs for practical learning.", image: "/images/science-lab.jpg" },
  { icon: "book", title: "Library", text: "Over 15,000 books, journals and a quiet digital reading zone.", image: "/images/library.jpg" },
  { icon: "monitor", title: "Computer Lab", text: "Modern computers with high-speed internet and coding classes.", image: "/images/computer-lab.jpg" },
  { icon: "trophy", title: "Sports Complex", text: "Cricket ground, basketball and badminton courts with trained coaches.", image: "/images/sports.jpg" },
  { icon: "palette", title: "Art & Music", text: "Dedicated studios for painting, crafts, music and drama.", image: "/images/art.jpg" },
  { icon: "users", title: "Smart Classrooms", text: "Spacious, well-lit classrooms with multimedia projectors and air conditioning.", image: "/images/campus.jpg" },
  { icon: "bus", title: "Safe Transport", text: "GPS-tracked buses covering all major areas of the city." },
  { icon: "shield", title: "Secure Campus", text: "CCTV monitoring, trained guards and controlled entry points." },
  { icon: "heart", title: "Medical Room", text: "A qualified nurse on duty and regular student health check-ups." },
];

export const stats = [
  { value: 1500, suffix: "+", label: "Students Enrolled" },
  { value: 120, suffix: "+", label: "Qualified Teachers" },
  { value: 98, suffix: "%", label: "Board Exam Pass Rate" },
  { value: 25, suffix: "+", label: "Years of Excellence" },
];

export const achievements = [
  { icon: "trophy" as IconName, title: "Top Board Results", text: "12 students in the Lahore Board top-20 position list in 2025." },
  { icon: "star" as IconName, title: "National Science Olympiad", text: "Gold medal winners at the National Science Olympiad 2024." },
  { icon: "award" as IconName, title: "Best School Award", text: "Recognised as Best Private School in Punjab, 2023." },
];

export const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Parent of Grade 4 student",
    quote:
      "The teachers genuinely care about every child. My daughter's confidence and reading have improved remarkably in just one year.",
  },
  {
    name: "Muhammad Imran",
    role: "Parent of Grade 9 student",
    quote:
      "Excellent academics with a strong focus on discipline and values. The career counselling sessions helped my son choose his stream.",
  },
  {
    name: "Sara Ahmed",
    role: "Parent of KG student",
    quote:
      "A safe, joyful environment for little ones. Regular updates from teachers keep us involved in our child's learning.",
  },
];

export const values = [
  { icon: "target" as IconName, title: "Our Mission", text: "To provide a balanced, high-quality education that nurtures intellect, character and creativity in every student." },
  { icon: "eye" as IconName, title: "Our Vision", text: "To be a leading institution that prepares confident, compassionate and responsible global citizens." },
  { icon: "heart" as IconName, title: "Our Values", text: "Integrity, respect, excellence and service guide everything we do — inside and outside the classroom." },
];

export const leadership = [
  { name: "Dr. Farah Siddiqui", role: "Principal", initials: "FS" },
  { name: "Mr. Ahmed Raza", role: "Vice Principal", initials: "AR" },
  { name: "Ms. Nadia Hussain", role: "Head of Academics", initials: "NH" },
  { name: "Mr. Usman Tariq", role: "Head of Student Affairs", initials: "UT" },
];

export const milestones = [
  { year: "1998", text: "XYZ School founded with 80 students and 10 teachers." },
  { year: "2005", text: "New campus with science and computer labs opened." },
  { year: "2012", text: "Senior Secondary wing and O/A Level stream launched." },
  { year: "2018", text: "Sports complex and digital library inaugurated." },
  { year: "2023", text: "Awarded Best Private School in Punjab." },
];

export const admissionSteps = [
  { title: "Submit Application", text: "Fill in the online admission form below with student and parent details." },
  { title: "Entrance Assessment", text: "Age-appropriate assessment in English, Mathematics and Urdu (Grade 1 onwards)." },
  { title: "Parent Interview", text: "A short meeting with the admissions team to understand your child's needs." },
  { title: "Confirm Admission", text: "Receive the offer letter, submit documents and pay the admission fee." },
];

export const requiredDocuments = [
  "Copy of B-Form / Birth Certificate",
  "Copy of parents' CNIC",
  "4 recent passport-size photographs",
  "Previous school leaving certificate",
  "Last academic report card",
];

export const feeStructure = [
  { level: "Early Years", admission: "Rs. 15,000", monthly: "Rs. 8,500" },
  { level: "Primary (1 – 5)", admission: "Rs. 20,000", monthly: "Rs. 10,500" },
  { level: "Middle (6 – 8)", admission: "Rs. 25,000", monthly: "Rs. 12,500" },
  { level: "Senior (9 – 12)", admission: "Rs. 30,000", monthly: "Rs. 15,000" },
];

export const gradeOptions = [
  "Playgroup", "Nursery", "KG",
  "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5",
  "Grade 6", "Grade 7", "Grade 8",
  "Grade 9", "Grade 10", "Grade 11", "Grade 12",
];

export const faqs = [
  { q: "When do admissions open?", a: "Admissions for the new academic session open in January. Mid-year admissions are subject to seat availability." },
  { q: "Is there an entrance test?", a: "Yes, for Grade 1 onwards. Early Years admissions are based on a short informal interaction." },
  { q: "Do you offer sibling discounts?", a: "Yes, a 10% tuition discount is offered for the second child and 15% for the third." },
  { q: "Is transport available?", a: "Yes, school buses cover most areas of Lahore. Transport fee depends on the route." },
];
