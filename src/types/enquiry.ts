export interface Enquiry {
  name: string;
  phone: string;
  email: string;
  projectLocation: string;
  projectType: string;
  builtUpArea?: string;
  serviceRequired?: string;
  projectStage?: string;
  budget?: string;
  message?: string;
  createdAt?: string;
}

export interface EnquiryResponse {
  success: boolean;
  data?: {
    message: string;
    referenceId: string;
  };
  error?: {
    message: string;
    code: string;
    details?: Record<string, string>;
  };
}

export const BUDGET_OPTIONS = [
  'Under ₹25 Lakhs',
  '₹25–50 Lakhs',
  '₹50 Lakhs–1 Crore',
  '₹1–2 Crore',
  'Above ₹2 Crore',
] as const;

export const PROPERTY_TYPES = [
  'Luxury Villa',
  'Independent Home',
  'Duplex Residence',
  'Penthouse / Apartment',
  'Commercial Space',
  'Renovation / Remodeling',
  'Other',
] as const;

export const SERVICE_OPTIONS = [
  'Turnkey Construction (Design to Key Handover)',
  'Architectural & Engineering Only',
  'Civil Structural Contracting',
  'Interior Architecture & Bespoke Millwork',
  'Comprehensive Project Management',
  'Heritage or Structural Renovation',
  'Not Sure Yet (Need Advisory)',
] as const;

export const PROJECT_STAGES = [
  'Just Exploring',
  'Planning',
  'Design Ready',
  'Ready to Build',
  'In Progress',
  'Renovation',
] as const;
