import type { Enquiry } from '../types/enquiry';

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Supports standard Indian (+91), international numbers, and local mobile numbers (minimum 7 digits)
const PHONE_REGEX = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]{7,15}$/;

export function validateEnquiry(data: Partial<Enquiry>): ValidationResult {
  const errors: Record<string, string> = {};

  // Name
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.name = 'Please provide your full name.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Full name must be at least 2 characters.';
  } else if (data.name.length > 100) {
    errors.name = 'Name cannot exceed 100 characters.';
  }

  // Phone
  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length === 0) {
    errors.phone = 'Please provide a contact phone number.';
  } else {
    const cleanedPhone = data.phone.trim().replace(/\s+/g, '');
    if (!PHONE_REGEX.test(cleanedPhone)) {
      errors.phone = 'Please provide a valid phone number with country/area code.';
    }
  }

  // Email
  if (!data.email || typeof data.email !== 'string' || data.email.trim().length === 0) {
    errors.email = 'Please provide your email address.';
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  // Project Location
  if (!data.projectLocation || typeof data.projectLocation !== 'string' || data.projectLocation.trim().length === 0) {
    errors.projectLocation = 'Please specify the project location or plot area.';
  }

  // Project Type
  if (!data.projectType || typeof data.projectType !== 'string' || data.projectType.trim().length === 0) {
    errors.projectType = 'Please select a project or property type.';
  }

  // Message length check if provided
  if (data.message && data.message.length > 2000) {
    errors.message = 'Notes cannot exceed 2000 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, ''); // Basic sanitization for tags
}
