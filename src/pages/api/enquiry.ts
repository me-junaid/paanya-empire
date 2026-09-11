import type { APIRoute } from 'astro';
import { validateEnquiry, sanitizeInput } from '../../lib/validation';
import type { Enquiry, EnquiryResponse } from '../../types/enquiry';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const errorResponse: EnquiryResponse = {
        success: false,
        error: {
          message: 'Invalid content type. Expected application/json.',
          code: 'INVALID_CONTENT_TYPE',
        },
      };
      return new Response(JSON.stringify(errorResponse), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();

    const enquiryData: Partial<Enquiry> = {
      name: sanitizeInput(body.name || ''),
      phone: sanitizeInput(body.phone || ''),
      email: sanitizeInput(body.email || ''),
      projectLocation: sanitizeInput(body.projectLocation || ''),
      projectType: sanitizeInput(body.projectType || body.propertyType || ''),
      builtUpArea: sanitizeInput(body.builtUpArea || ''),
      serviceRequired: sanitizeInput(body.serviceRequired || ''),
      projectStage: sanitizeInput(body.projectStage || ''),
      budget: sanitizeInput(body.budget || ''),
      message: sanitizeInput(body.message || ''),
      createdAt: new Date().toISOString(),
    };

    const validation = validateEnquiry(enquiryData);

    if (!validation.isValid) {
      const errorResponse: EnquiryResponse = {
        success: false,
        error: {
          message: 'Validation failed. Please verify the required fields.',
          code: 'VALIDATION_ERROR',
          details: validation.errors,
        },
      };
      return new Response(JSON.stringify(errorResponse), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate unique inquiry reference code
    const referenceId = `PE-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    // In a production setup with NestJS/MongoDB, this would dispatch to the database or CRM service.
    // For now, securely acknowledge the received inquiry without leaking PII in server console.

    const successResponse: EnquiryResponse = {
      success: true,
      data: {
        message: 'Your enquiry has been successfully registered. An architectural director will connect with you within 24 business hours.',
        referenceId,
      },
    };

    return new Response(JSON.stringify(successResponse), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const errorResponse: EnquiryResponse = {
      success: false,
      error: {
        message: 'An unexpected error occurred while processing your request. Please try again or contact us directly.',
        code: 'INTERNAL_SERVER_ERROR',
      },
    };
    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
