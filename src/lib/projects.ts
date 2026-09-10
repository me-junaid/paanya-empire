import { projectsData } from '../data/projects';
import type { Project } from '../types/project';

/**
 * Get all projects, optionally filtered by category slug.
 */
export async function getProjects(categorySlug?: string): Promise<Project[]> {
  if (!categorySlug || categorySlug === 'all') {
    return projectsData;
  }
  return projectsData.filter(
    (project) => project.categorySlug.toLowerCase() === categorySlug.toLowerCase()
  );
}

/**
 * Get a single project by its unique slug.
 */
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projectsData.find((project) => project.slug === slug);
}

/**
 * Get featured projects for homepage and spotlight sections.
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  return projectsData.filter((project) => project.isFeatured);
}

/**
 * Get related projects excluding the current project.
 */
export async function getRelatedProjects(
  currentSlug: string,
  categorySlug?: string,
  limit: number = 3
): Promise<Project[]> {
  const filtered = projectsData.filter((project) => project.slug !== currentSlug);
  
  if (categorySlug) {
    const sameCategory = filtered.filter(
      (project) => project.categorySlug.toLowerCase() === categorySlug.toLowerCase()
    );
    if (sameCategory.length >= limit) {
      return sameCategory.slice(0, limit);
    }
    const remaining = filtered.filter(
      (project) => project.categorySlug.toLowerCase() !== categorySlug.toLowerCase()
    );
    return [...sameCategory, ...remaining].slice(0, limit);
  }

  return filtered.slice(0, limit);
}

/**
 * Get distinct project categories with slugs.
 */
export async function getProjectCategories(): Promise<{ label: string; slug: string }[]> {
  return [
    { label: 'All', slug: 'all' },
    { label: 'Luxury Villas', slug: 'luxury-villas' },
    { label: 'Independent Homes', slug: 'independent' },
    { label: 'Duplex Homes', slug: 'duplex' },
    { label: 'Apartments', slug: 'apartments' },
    { label: 'Commercial', slug: 'commercial' },
    { label: 'Renovation', slug: 'renovation' }
  ];
}
