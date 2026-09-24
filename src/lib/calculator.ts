import type { CalculatorInputs, CostEstimate, CostCategory, MaterialQuantity } from '../types/calculator';
import {
  CONSTRUCTION_PACKAGES,
  FLOOR_CONFIGS,
  ADDON_RATES,
  BREAKDOWN_RATIOS,
  MATERIAL_FACTORS,
} from '../data/calculator';

// ---------------------------------------------------------------------------
// Formats a rupee amount into a compact display string.
// < 1 Lakh  → "₹XX,XXX"
// 1–99.99 L → "₹XX.XX L"
// ≥ 1 Cr    → "₹X.XX Cr"
// ---------------------------------------------------------------------------
export function formatCurrency(amount: number): string {
  if (amount < 100000) {
    return `₹${amount.toLocaleString('en-IN')}`;
  } else if (amount < 10000000) {
    return `₹${(amount / 100000).toFixed(2)} L`;
  } else {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }
}

// ---------------------------------------------------------------------------
// Main calculation engine — pure function, no side effects
// ---------------------------------------------------------------------------
export function calculateEstimate(inputs: CalculatorInputs): CostEstimate {
  const {
    perFloorArea,
    floorConfig,
    packageTier,
    basement,
    basementArea,
    compoundWall,
    compoundWallLength,
    sumpTank,
    premiumFacade,
  } = inputs;

  // 1. Resolve package & floor details
  const pkg = CONSTRUCTION_PACKAGES.find((p) => p.id === packageTier)!;
  const floorDetail = FLOOR_CONFIGS[floorConfig] ?? FLOOR_CONFIGS['G+1'];

  // 2. Compute Total Effective Built-Up Area
  const totalBuiltUpArea = Math.round(perFloorArea * floorDetail.multiplier);

  // 3. Base construction cost (Total Built-Up Area × Package Rate)
  const baseCostMin = Math.round(totalBuiltUpArea * pkg.baseRateMin);
  const baseCostMax = Math.round(totalBuiltUpArea * pkg.baseRateMax);

  // 4. Structural add-ons
  let addonsCost = 0;
  if (basement && basementArea > 0) {
    addonsCost += basementArea * ADDON_RATES.basement;
  }
  if (compoundWall && compoundWallLength > 0) {
    addonsCost += compoundWallLength * ADDON_RATES.compoundWall;
  }
  if (sumpTank) {
    addonsCost += ADDON_RATES.sumpTank;
  }
  if (premiumFacade) {
    // Elevation area ≈ 30% of total built-up area
    const elevationArea = totalBuiltUpArea * 0.30;
    addonsCost += elevationArea * ADDON_RATES.premiumFacade;
  }
  addonsCost = Math.round(addonsCost);

  // 5. Total min / max
  const totalMin = baseCostMin + addonsCost;
  const totalMax = baseCostMax + addonsCost;
  const totalMid = Math.round((totalMin + totalMax) / 2);

  // 6. Cost breakdown categories (applied to midpoint total)
  const breakdown: CostCategory[] = [
    {
      label: 'Civil Structure & Masonry',
      percentage: Math.round(BREAKDOWN_RATIOS.civil * 100),
      amount: Math.round(totalMid * BREAKDOWN_RATIOS.civil),
      icon: 'foundation',
    },
    {
      label: 'Finishes & Flooring',
      percentage: Math.round(BREAKDOWN_RATIOS.finishes * 100),
      amount: Math.round(totalMid * BREAKDOWN_RATIOS.finishes),
      icon: 'format_paint',
    },
    {
      label: 'MEP — Plumbing & Electrical',
      percentage: Math.round(BREAKDOWN_RATIOS.mep * 100),
      amount: Math.round(totalMid * BREAKDOWN_RATIOS.mep),
      icon: 'electrical_services',
    },
    {
      label: 'Doors, Windows & Painting',
      percentage: Math.round(BREAKDOWN_RATIOS.doors * 100),
      amount: Math.round(totalMid * BREAKDOWN_RATIOS.doors),
      icon: 'door_front',
    },
  ];

  // 7. Material quantity estimation based on total built-up area
  const steelKg = Math.round(totalBuiltUpArea * MATERIAL_FACTORS.steelKgPerSqft);
  const steelMt = (steelKg / 1000).toFixed(1);
  const cementBags = Math.round(totalBuiltUpArea * MATERIAL_FACTORS.cementBagsPerSqft);
  const sandCft = Math.round(totalBuiltUpArea * MATERIAL_FACTORS.sandCftPerSqft);
  const bricks = Math.round(totalBuiltUpArea * MATERIAL_FACTORS.bricksPerSqft);

  const materials: MaterialQuantity[] = [
    {
      label: 'Steel (TMT Rebar)',
      value: steelMt,
      unit: 'Metric Tonnes',
      icon: 'hardware',
    },
    {
      label: 'Cement',
      value: cementBags.toLocaleString('en-IN'),
      unit: '50 kg Bags',
      icon: 'inventory_2',
    },
    {
      label: 'Sand & Aggregates',
      value: sandCft.toLocaleString('en-IN'),
      unit: 'Cubic Feet',
      icon: 'grain',
    },
    {
      label: 'Bricks / AAC Blocks',
      value: bricks.toLocaleString('en-IN'),
      unit: 'Units',
      icon: 'view_module',
    },
  ];

  return {
    perFloorArea,
    totalBuiltUpArea,
    floorDescription: floorDetail.description,
    baseCostMin,
    baseCostMax,
    addonsCost,
    totalMin,
    totalMax,
    breakdown,
    materials,
    packageName: pkg.name,
  };
}

// ---------------------------------------------------------------------------
// Returns all available packages (for rendering cards / selectors)
// ---------------------------------------------------------------------------
export function getConstructionPackages() {
  return CONSTRUCTION_PACKAGES;
}

// ---------------------------------------------------------------------------
// Returns default inputs for first render
// ---------------------------------------------------------------------------
export function getDefaultInputs(): CalculatorInputs {
  return {
    perFloorArea: 1500,
    floorConfig: 'G+1',
    packageTier: 'luxury',
    basement: false,
    basementArea: 400,
    compoundWall: false,
    compoundWallLength: 100,
    sumpTank: false,
    premiumFacade: false,
  };
}
