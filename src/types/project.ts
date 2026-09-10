export interface ProjectMetricHighlight {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectNarrativePhase {
  phaseNumber: string;
  title: string;
  icon: string;
  description: string;
}

export interface ProjectPhilosophyPillar {
  number: string;
  title: string;
  description: string;
}

export interface ProjectGalleryItem {
  url: string;
  alt: string;
  caption: string;
  categoryLabel: string;
  span?: 'large' | 'split' | 'half';
}

export interface ProjectScopeItem {
  number: string;
  title: string;
  description: string;
}

export interface ProjectMilestone {
  stage: string;
  title: string;
  subtitle: string;
  highlight?: boolean;
}

export interface ProjectMaterial {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectChallengeItem {
  type: 'challenge' | 'response' | 'outcome';
  icon: string;
  badgeClass?: string;
  title: string;
  description: string;
}

export interface ProjectQASignoff {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  location: string;
  category: string;
  categorySlug: 'luxury-villas' | 'independent' | 'duplex' | 'apartments' | 'commercial' | 'renovation' | string;
  status: string;
  isFeatured?: boolean;
  year: number;
  area: string;
  executionScope: string;
  timelineDuration: string;
  guarantee?: string;
  thumbnail: string;
  heroImage: string;
  summary: string;
  description: string;
  tags: string[];

  // Detailed Case Study Fields
  architecturalBrief?: {
    tagline: string;
    headline: string;
    paragraphs: string[];
    highlights: ProjectMetricHighlight[];
  };

  caseNarrative?: ProjectNarrativePhase[];

  designPhilosophy?: {
    tagline: string;
    headline: string;
    description: string;
    pillars: ProjectPhilosophyPillar[];
    featureImage?: {
      url: string;
      alt: string;
      label: string;
      caption: string;
    };
  };

  gallery?: ProjectGalleryItem[];

  scopeOfWork?: ProjectScopeItem[];

  milestones?: ProjectMilestone[];

  civilEngineering?: {
    tagline: string;
    headline: string;
    description: string;
    image: string;
    imageAlt: string;
    badges: string[];
    checkpoints: string[];
  };

  beforeAfter?: {
    tagline: string;
    headline: string;
    description: string;
    before: {
      image: string;
      alt: string;
      tag: string;
      title: string;
      description: string;
    };
    after: {
      image: string;
      alt: string;
      tag: string;
      title: string;
      description: string;
    };
  };

  materials?: {
    tagline: string;
    headline: string;
    description: string;
    items: ProjectMaterial[];
  };

  technicalChallenges?: {
    tagline: string;
    headline: string;
    items: ProjectChallengeItem[];
  };

  qaMandate?: {
    tagline: string;
    headline: string;
    description: string;
    items: ProjectQASignoff[];
  };
}
