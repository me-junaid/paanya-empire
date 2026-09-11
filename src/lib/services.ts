import services from '../data/services';
import type { Service } from '../types/service';

/**
 * Retrieves all available services.
 * @returns An array of all services.
 */
export async function getServices(): Promise<Service[]> {
  // In the future, this will be an API call to a NestJS backend
  return services;
}

/**
 * Retrieves a single service by its slug.
 * @param slug - The URL-friendly identifier for the service
 * @returns The matching service, or undefined if not found.
 */
export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const allServices = await getServices();
  return allServices.find((s) => s.slug === slug);
}

/**
 * Retrieves only the flagship services (e.g., Turnkey Construction).
 * @returns An array of flagship services.
 */
export async function getFlagshipServices(): Promise<Service[]> {
  const allServices = await getServices();
  return allServices.filter((s) => s.isFlagship);
}
