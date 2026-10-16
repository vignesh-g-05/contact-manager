import type { Contact } from "../types";

export const STAGES = ["Lead", "Prospect", "Qualified", "Customer"] as const;

export const defaultContacts: Contact[] = [
  {
    id: "c1",
    name: "Priya Raman",
    email: "priya@northwind.io",
    company: "Northwind Systems",
    role: "VP of Operations",
    owner: "Arjun",
    labels: ["Enterprise", "High Intent"],
    stage: "Lead",
    notes:
      "Met at the Chennai SaaS Summit. Interested in streamlining internal workflows. Schedule a product demo for next week.",
  },
  {
    id: "c2",
    name: "Daniel Okafor",
    email: "daniel@lumenhealth.com",
    company: "Lumen Health",
    role: "Chief Technology Officer",
    owner: "Meera",
    labels: ["Healthcare", "Security Review"],
    stage: "Prospect",
    notes:
      "Requested security documentation and details on data handling. Share the security overview and arrange a technical follow-up.",
  },
  {
    id: "c3",
    name: "Sofia Alvarez",
    email: "sofia@brightpath.io",
    company: "BrightPath",
    role: "Head of Sales",
    owner: "Arjun",
    labels: ["Mid-Market", "Referral"],
    stage: "Qualified",
    notes:
      "Confirmed budget and decision-making timeline. Legal review is pending. Follow up with the procurement team on the agreement.",
  },
  {
    id: "c4",
    name: "Kenji Watanabe",
    email: "kenji@harborlabs.jp",
    company: "Harbor Labs",
    role: "Product Lead",
    owner: "Meera",
    labels: ["APAC", "Product-Led"],
    stage: "Prospect",
    notes:
      "Evaluating the platform for an upcoming product launch. Share relevant integration documentation and confirm technical requirements.",
  },
  {
    id: "c5",
    name: "Aisha Khan",
    company: "Fieldwork",
    role: "Founder & CEO",
    owner: "Arjun",
    labels: ["Startup", "Inbound"],
    stage: "Lead",
    notes:
      "Inbound enquiry from the pricing page. Email address is not available yet. Verify contact details before initiating outreach.",
  },
  {
    id: "c6",
    name: "Marcus Lindqvist",
    email: "marcus@nordicflow.se",
    company: "NordicFlow",
    owner: "Sam",
    labels: ["Enterprise", "Competitive Evaluation"],
    stage: "Qualified",
    notes:
      "Comparing the platform with two alternatives. Prepare a feature comparison and confirm the criteria for the final evaluation.",
  },
  {
    id: "c7",
    name: "Lakshmi Narayanan",
    email: "lakshmi@kaveri.in",
    role: "Procurement Manager",
    owner: "Meera",
    labels: ["India", "Procurement"],
    stage: "Lead",
    notes: "",
  },
  {
    id: "c8",
    name: "Emma Fischer",
    email: "emma@paperplane.de",
    company: "Paperplane",
    role: "Chief Operating Officer",
    owner: "Sam",
    labels: ["Startup", "Trial"],
    stage: "Prospect",
    notes:
      "Started a product trial last week. Check adoption progress and gather initial feedback before recommending next steps.",
  },
  {
    id: "c9",
    name: "Tomás Herrera",
    email: "tomas@solcity.mx",
    company: "SolCity",
    role: "Director of IT",
    owner: "Sam",
    labels: ["LATAM", "Outbound"],
    stage: "Lead",
    notes:
      "Responded to an initial outreach email. Follow up to understand current infrastructure and determine whether the solution is a fit.",
  },
  {
    id: "c10",
    name: "Grace Mutua",
    email: "grace@savannahgroup.co.ke",
    company: "Savannah Group",
    role: "Chief Financial Officer",
    owner: "Arjun",
    labels: ["Enterprise", "Pricing"],
    stage: "Customer",
    notes:
      "Existing customer exploring a multi-year agreement. Prepare renewal pricing options and schedule a commercial review.",
  },
];

export const COLUMNS = [
  "Name",
  "Email",
  "Company",
  "Role",
  "Owner",
  "Labels",
  "Stage",
  "Notes",
];
