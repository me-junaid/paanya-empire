export interface ServiceCapability {
  title: string;
}

export interface ServiceComparisonModel {
  title: string;
  description: string;
  points: string[];
}

export interface ServiceComparisonTurnkey {
  title: string;
  description: string;
  highlight: string;
}

export interface ServiceComparison {
  title: string;
  subtitle: string;
  description: string;
  fragmented: ServiceComparisonModel;
  turnkey: ServiceComparisonTurnkey;
}

export interface ServiceScopeStage {
  number: string;
  title: string;
  description: string;
  items: string[];
}

export interface ServiceScope {
  title: string;
  subtitle: string;
  description: string;
  stages: ServiceScopeStage[];
}

export interface ServiceBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceBenefits {
  title: string;
  subtitle: string;
  description: string;
  items: ServiceBenefit[];
}

export interface ServiceProcessPhase {
  phase: string;
  title: string;
  duration?: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  isFlagship: boolean;
  shortDescription: string;
  heroImage: string;
  listingImage: string;
  icon: string;
  overview: {
    subtitle: string;
    title: string;
    description: string;
    capabilities: string[];
  };
  comparison?: ServiceComparison;
  scope: ServiceScope;
  benefits?: ServiceBenefits;
  process?: ServiceProcessPhase[];
}
