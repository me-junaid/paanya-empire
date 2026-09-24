/** Construction package tier identifier */
export type PackageTier = 'classic' | 'luxury' | 'ultra';

/** Configuration type for a property */
export type FloorConfig = 'G' | 'G+1' | 'G+2' | 'G+3' | 'Stilt+1' | 'Stilt+2' | 'Stilt+3';

/** Floor configuration details */
export interface FloorConfigDetail {
  code: FloorConfig;
  label: string;
  totalFloors: number;
  multiplier: number; // Effective area multiplier
  description: string;
}

/** Material specification entry within a package */
export interface MaterialSpec {
  category: string;
  spec: string;
  brand?: string;
}

/** A construction package tier definition */
export interface ConstructionPackage {
  id: PackageTier;
  name: string;
  badge?: string;
  tagline: string;
  baseRateMin: number; // ₹ per sq.ft
  baseRateMax: number; // ₹ per sq.ft
  color: string;       // Tailwind color token suffix for styling
  accentClass: string; // border/ring class for selected state
  materialSpecs: MaterialSpec[];
}

/** Structural add-on type */
export interface StructuralAddon {
  id: string;
  label: string;
  icon: string;
  description: string;
  unitLabel: string; // e.g., "per sq.ft" | "per running ft"
  ratePerUnit: number; // ₹ per unit
  defaultQty: number;
  maxQty: number;
}

/** User inputs collected from the calculator form */
export interface CalculatorInputs {
  perFloorArea: number;      // sq.ft per floor / ground footprint
  floorConfig: FloorConfig;
  packageTier: PackageTier;
  basement: boolean;
  basementArea: number;      // sq.ft
  compoundWall: boolean;
  compoundWallLength: number;// running feet
  sumpTank: boolean;
  premiumFacade: boolean;
}

/** Breakdown category of the final estimate */
export interface CostCategory {
  label: string;
  percentage: number;
  amount: number;
  icon: string;
}

/** Material quantity quick estimator result */
export interface MaterialQuantity {
  label: string;
  value: string;
  unit: string;
  icon: string;
}

/** Final cost estimate result */
export interface CostEstimate {
  perFloorArea: number;
  totalBuiltUpArea: number;
  floorDescription: string;
  baseCostMin: number;
  baseCostMax: number;
  addonsCost: number;
  totalMin: number;
  totalMax: number;
  breakdown: CostCategory[];
  materials: MaterialQuantity[];
  packageName: string;
}
