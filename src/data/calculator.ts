import type { ConstructionPackage, FloorConfig, FloorConfigDetail } from '../types/calculator';

// ---------------------------------------------------------------------------
// Floor configuration mapping & area multiplier
// ---------------------------------------------------------------------------
export const FLOOR_CONFIGS: Record<FloorConfig, FloorConfigDetail> = {
  'G': {
    code: 'G',
    label: 'Ground (G)',
    totalFloors: 1,
    multiplier: 1.0,
    description: '1 Floor (Ground only)',
  },
  'G+1': {
    code: 'G+1',
    label: 'G + 1',
    totalFloors: 2,
    multiplier: 2.0,
    description: '2 Floors (Ground + 1st Floor)',
  },
  'G+2': {
    code: 'G+2',
    label: 'G + 2',
    totalFloors: 3,
    multiplier: 3.0,
    description: '3 Floors (Ground + 1st + 2nd)',
  },
  'G+3': {
    code: 'G+3',
    label: 'G + 3',
    totalFloors: 4,
    multiplier: 4.0,
    description: '4 Floors (Ground + 1st + 2nd + 3rd)',
  },
  'Stilt+1': {
    code: 'Stilt+1',
    label: 'Stilt + 1',
    totalFloors: 2,
    multiplier: 1.6,
    description: 'Stilt Parking + 1 Residential Floor',
  },
  'Stilt+2': {
    code: 'Stilt+2',
    label: 'Stilt + 2',
    totalFloors: 3,
    multiplier: 2.6,
    description: 'Stilt Parking + 2 Residential Floors',
  },
  'Stilt+3': {
    code: 'Stilt+3',
    label: 'Stilt + 3',
    totalFloors: 4,
    multiplier: 3.65,
    description: 'Stilt Parking + 3 Residential Floors',
  },
};

// ---------------------------------------------------------------------------
// Construction package tiers with benchmark rates (INR per sq.ft, 2025-26)
// Rates based on Bangalore / Hyderabad / Tier-1 South India benchmarks.
// ---------------------------------------------------------------------------
export const CONSTRUCTION_PACKAGES: ConstructionPackage[] = [
  {
    id: 'classic',
    name: 'Classic Premium',
    tagline: 'Certified-grade build with proven brand materials',
    baseRateMin: 1850,
    baseRateMax: 2150,
    color: 'secondary',
    accentClass: 'border-secondary ring-secondary/20',
    materialSpecs: [
      { category: 'Structure', spec: 'Fe 550 TMT Rebar', brand: 'Tata Tiscon / JSW Neo' },
      { category: 'Concrete', spec: 'M20 Grade RMC (Ready Mix)' },
      { category: 'Cement', spec: 'Grade 53 OPC / PPC', brand: 'Ultratech / ACC' },
      { category: 'Masonry', spec: 'Red Clay Bricks / AAC Blocks' },
      { category: 'Flooring', spec: '2×2 ft Vitrified Tiles' },
      { category: 'Main Door', spec: 'Teak / Engineered Wood Frame' },
      { category: 'Plumbing', spec: 'Jaquar Essco / Parryware' },
      { category: 'Electrical', spec: 'Finolex FR Cables, Standard CB' },
      { category: 'Windows', spec: 'Aluminium UPVC Sliding' },
      { category: 'Paint', spec: 'Asian Paints Apcolite / Tractor' },
    ],
  },
  {
    id: 'luxury',
    name: 'Luxury',
    badge: 'Most Popular',
    tagline: 'Premium residential grade — elevated finishes, designer fittings',
    baseRateMin: 2250,
    baseRateMax: 2750,
    color: 'primary',
    accentClass: 'border-primary ring-primary/20',
    materialSpecs: [
      { category: 'Structure', spec: 'Fe 550D High-Ductility TMT', brand: 'Tata Tiscon SD / SAIL' },
      { category: 'Concrete', spec: 'M25 Grade RMC with SCC option' },
      { category: 'Cement', spec: 'Grade 53 OPC + Waterproofing Admix', brand: 'Ultratech' },
      { category: 'Masonry', spec: 'AAC Blocks (Thermal Insulating)' },
      { category: 'Flooring', spec: 'Italian Marble / 4×2 ft GVT Slabs' },
      { category: 'Main Door', spec: 'Burma Teak Solid + Designer Hardware' },
      { category: 'Plumbing', spec: 'Grohe / Kohler / Cera Premium Line' },
      { category: 'Electrical', spec: 'Havells Wires, Legrand Modular Switches' },
      { category: 'Windows', spec: 'Powder-Coated Aluminium Double Glass' },
      { category: 'Paint', spec: 'Asian Paints Royale / Berger Silk' },
    ],
  },
  {
    id: 'ultra',
    name: 'Ultra Luxury',
    badge: 'Bespoke',
    tagline: 'Architectural statement — imported materials, smart automation',
    baseRateMin: 2850,
    baseRateMax: 3600,
    color: 'tertiary',
    accentClass: 'border-tertiary ring-tertiary/20',
    materialSpecs: [
      { category: 'Structure', spec: 'High-Grade RCC Frame w/ Structural Consultant Sign-off' },
      { category: 'Concrete', spec: 'M30 Grade + Self-Compacting Mix' },
      { category: 'Facade', spec: 'Double-Height Glazing / Stone Cladding / GRC Panels' },
      { category: 'Flooring', spec: 'Imported Italian Marble / Spanish Porcelain Slabs' },
      { category: 'Main Door', spec: 'Custom Pivot Entry + Biometric Lock' },
      { category: 'Plumbing', spec: 'Toto / Hansgrohe / Duravit (fully concealed)' },
      { category: 'Electrical', spec: 'Smart Home Automation Piping, Legrand Arteor' },
      { category: 'Windows', spec: 'uPVC Double-Glazed / Aluminum Curtain Wall' },
      { category: 'Insulation', spec: 'Acoustic & Thermal Wall / Roof Insulation' },
      { category: 'Paint', spec: 'Asian Paints Royale Luxury Emulsion / Textured' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Structural add-on rates (INR)
// ---------------------------------------------------------------------------
export const ADDON_RATES = {
  basement: 950,         // ₹/sq.ft (excavation + RCC waterproofing)
  compoundWall: 850,     // ₹/running ft (230mm brick + plaster + coping)
  sumpTank: 75000,       // ₹ fixed (10,000 L underground RCC sump)
  premiumFacade: 180,    // ₹/sq.ft of elevation area (~30% of total BUA as proxy)
};

// ---------------------------------------------------------------------------
// Cost breakdown ratios (approximate industry percentages)
// ---------------------------------------------------------------------------
export const BREAKDOWN_RATIOS = {
  civil: 0.50,         // Civil structure & masonry (RCC, brickwork, roofing)
  finishes: 0.21,      // Flooring, tiles, painting, woodwork
  mep: 0.15,           // MEP — plumbing, electrical, HVAC rough-in
  doors: 0.14,         // Doors, windows, hardware, external paint
};

// ---------------------------------------------------------------------------
// Material quantity estimation factors
// (empirical industry constants per sq.ft of total built-up area)
// ---------------------------------------------------------------------------
export const MATERIAL_FACTORS = {
  steelKgPerSqft: 4.0,       // kg of steel per sq.ft (residential RCC framing)
  cementBagsPerSqft: 0.40,   // 50kg bags per sq.ft
  sandCftPerSqft: 1.8,       // cubic feet of sand per sq.ft
  bricksPerSqft: 8,          // AAC/clay bricks per sq.ft (wall area proxy)
};
