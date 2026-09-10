import type { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    slug: 'the-obsidian-villa',
    title: 'The Obsidian Villa',
    subtitle: 'Cantilevered Coastal Modernist Landmark',
    location: 'Coastal Bluffs, Cliffside',
    category: 'Luxury Villas',
    categorySlug: 'luxury-villas',
    status: 'Completed & Handed Over',
    isFeatured: true,
    year: 2024,
    area: '7,800 SQ FT',
    executionScope: 'Full Turnkey EPC',
    timelineDuration: '14 Months Total',
    guarantee: 'Covered under PAANYA 10-Year Structural Defect Guarantee & 24-Month Comprehensive Fit-out Assurance.',
    thumbnail: 'https://images.unsplash.com/photo-1613490908677-8df7d013f9f3?auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    summary: 'An architectural residence designed around contemporary living, cantilevered geometric volumes, bespoke structural glazing, and refined monolithic stone craftsmanship.',
    description: 'A contemporary cliffside residence balancing cantilevered geometric concrete volumes, floor-to-ceiling structural glazing, and bespoke monolithic craftsmanship, coordinated from deep foundation to final turnkey interior handover.',
    tags: ['Architecture', 'Construction', 'Interiors', 'Smart Grid'],
    
    architecturalBrief: {
      tagline: 'Architectural Brief & Orientation',
      headline: 'Engineered for the Edge: Precision Cantilever Over Coastal Horizons',
      paragraphs: [
        'Positioned across a treacherous 40-degree maritime bluff, The Obsidian Villa was conceived as an organic extension of the coastal geology. Rather than cutting deeply into the stone mantle, our multidisciplinary team engineered an asymmetric cantilever system anchored into subterranean bedrock with 28 post-tensioned micropiles.',
        'The structural design prioritizes continuous visual dialog with the sea. Triple-glazed panoramic facades open seamlessly via recessed motor tracks, allowing ocean breezes to temper the residence naturally while maintaining a rigorous acoustic and thermal seal when sealed against offshore squalls.'
      ],
      highlights: [
        { label: 'Foundation', value: '28 Micropiles', detail: 'Anchored into granite' },
        { label: 'Thermal', value: 'U-Value 0.82', detail: 'Triple structural glass' },
        { label: 'Cantilever', value: '6.2 Meters', detail: 'Unsupported overhang' }
      ]
    },

    caseNarrative: [
      {
        phaseNumber: 'PHASE 01',
        title: 'The Client Brief',
        icon: 'assignment',
        description: 'The client sought an uncompromising modern family retreat that captured 270-degree ocean views while safeguarding intimate spaces from adjacent hillside visibility. It had to accommodate art installations, a temperature-controlled cellar, and extreme seismic readiness.'
      },
      {
        phaseNumber: 'PHASE 02',
        title: 'The Turnkey Approach',
        icon: 'hub',
        description: 'Rather than separating designers from field foremen, PAANYA mobilized a unified EPC squad. Architects, structural engineers, and millwork craftsmen reviewed BIM models simultaneously, eliminating costly change orders and preserving millimeter-level tolerances.'
      },
      {
        phaseNumber: 'PHASE 03',
        title: 'The Design Direction',
        icon: 'palette',
        description: 'Brutalist concrete purity softened with tactile coastal materials: charred cedar rainscreens, custom honed travertine floors, and dark obsidian aluminum frames that draw the eye directly into the horizon without visual clutter.'
      },
      {
        phaseNumber: 'PHASE 04',
        title: 'The Final Living Space',
        icon: 'task_alt',
        description: 'Handed over on time and on budget. A timeless architectural monument where interior luxury and rugged coastal topography coexist in serene, quiet equilibrium with smart automation coordinating climate, shades, and energy management.'
      }
    ],

    designPhilosophy: {
      tagline: 'Core Architectural Philosophy',
      headline: 'DESIGNED AROUND THE WAY PEOPLE LIVE.',
      description: 'True luxury is not ornament; it is the effortless choreography of light, acoustics, and tactile mass. Every volume in the Obsidian Villa responds to solar trajectories and natural living habits.',
      pillars: [
        {
          number: '01',
          title: 'FORM — Geometric Cantilevers',
          description: 'Horizontal slabs hover over the terrain, generating shaded outdoor terraces and reducing solar heat gain naturally.'
        },
        {
          number: '02',
          title: 'FUNCTION — Thermal Zoning',
          description: 'Independent VRF climate loops and subterranean heat exchangers stabilize interior humidity and temperature effortlessly.'
        },
        {
          number: '03',
          title: 'DETAIL — Monolithic Precision',
          description: 'Shadow-gap joinery, flush-mounted floor registers, and raw split-stone hearths designed without visible fastening hardware.'
        }
      ],
      featureImage: {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
        alt: 'Double-height ultra-luxury living room featuring a massive split stone fireplace monolithic column and panoramic windows',
        label: 'Internal Atmosphere',
        caption: 'Double-Height Monolithic Stone Hearth & Open Living Volume'
      }
    },

    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
        alt: 'Cantilevered Twilight Ocean Pavilion',
        caption: 'Cantilevered Twilight Ocean Pavilion',
        categoryLabel: 'Exterior Elevation',
        span: 'large'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
        alt: 'Double-Height Hearth & Minimalist Lounge',
        caption: 'Double-Height Hearth & Minimalist Lounge',
        categoryLabel: 'Great Room',
        span: 'split'
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
        alt: 'Structural Glass Balustrade & Infinity Basin',
        caption: 'Structural Glass Balustrade & Infinity Basin',
        categoryLabel: 'Perimeter',
        span: 'half'
      },
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&q=80',
        alt: 'Site Calibration & Post-Tension Slab Rigging',
        caption: 'Site Calibration & Post-Tension Slab Rigging',
        categoryLabel: 'Execution Engineering',
        span: 'half'
      }
    ],

    scopeOfWork: [
      { number: '01', title: 'Architecture & Parametric BIM', description: 'Full 3D modeling, spatial daylight simulations, and thermodynamic optimization.' },
      { number: '02', title: 'Geotechnical Engineering', description: 'Cliff-stability analysis, rock core sampling, and micropile anchoring matrix.' },
      { number: '03', title: 'Municipal Approvals', description: 'Environmental clearances, coastal protection board permits, and structural sign-offs.' },
      { number: '04', title: 'Civil Construction', description: 'High-grade reinforced concrete, custom formwork, and post-tensioned spans.' },
      { number: '05', title: 'MEP & Smart Grid', description: 'Concealed HVAC ducting, KNX home automation, solar inverter storage integration.' },
      { number: '06', title: 'Interior Millwork', description: 'Bookmatched walnut veneer, Italian stone fabrication, and frameless door systems.' },
      { number: '07', title: 'Thermal Diagnostics', description: 'Infrared envelope air-leakage scans, acoustic isolation certifications.' },
      { number: '08', title: 'Zero-Defect Handover', description: 'Complete digital manuals, punch-list certification, and key ceremonial delivery.' }
    ],

    milestones: [
      { stage: 'STAGE 01', title: 'Vision & Brief', subtitle: 'Spatial goals & budget' },
      { stage: 'STAGE 02', title: 'Geotech Rig', subtitle: 'Soil & bedrock core' },
      { stage: 'STAGE 03', title: 'Architecture', subtitle: '3D parametric plan' },
      { stage: 'STAGE 04', title: 'Permits', subtitle: 'Civic coastal rights' },
      { stage: 'STAGE 05', title: 'Structural', subtitle: 'Steel & post-tension' },
      { stage: 'STAGE 06', title: 'Civil Build', subtitle: 'Concrete shell casting' },
      { stage: 'STAGE 07', title: 'MEP & Joinery', subtitle: 'Smart wiring & marble' },
      { stage: 'STAGE 08', title: 'QA Audits', subtitle: 'Thermal & ultrasound' },
      { stage: 'STAGE 09', title: 'Handover', subtitle: 'Turnkey occupancy', highlight: true }
    ],

    civilEngineering: {
      tagline: 'Behind the Finished Facade',
      headline: 'Structural Subtlety Built from Heavy Civil Might',
      description: 'The delicate lightness of the finished residence is an optical trick supported by massive geotechnical infrastructure. To achieve the 6.2-meter floating living terrace, we poured 380 cubic meters of high-density C45/55 structural concrete tied into deep tension anchors.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&q=80',
      imageAlt: 'Site managers reviewing blueprints on concrete deck',
      badges: ['BUILD', 'REFINE', 'COMPLETE'],
      checkpoints: [
        'Laser-aligned structural steel curtain-wall tracks calibrated to ±1.5mm tolerance.',
        'Sub-grade moisture protection barrier with continuous positive-side drainage channels.',
        'Marine-grade anodized aluminum fasteners resisting extreme salt-fog corrosion.'
      ]
    },

    beforeAfter: {
      tagline: 'Spatial Transformation',
      headline: 'FROM RAW HILLSIDE TO FINISHED LANDMARK',
      description: 'Observe the dramatic metamorphosis from an inaccessible rugged slope into an architectural sanctuary.',
      before: {
        image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80',
        alt: 'Excavation site on steep cliffside',
        tag: 'Phase 0: Ground Zero',
        title: 'Untamed Topography',
        description: '40-degree incline, dense marine scrub, zero direct utility access.'
      },
      after: {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
        alt: 'Completed Obsidian Villa at twilight',
        tag: 'Phase 9: Completed Handover',
        title: 'The Obsidian Villa',
        description: '7,800 sq ft delivered turnkey with private access road and integrated infinity pool.'
      }
    },

    materials: {
      tagline: 'Curated Materiality',
      headline: 'THE DETAILS MATTER.',
      description: 'Every surface was specified to age gracefully in a harsh coastal marine microclimate.',
      items: [
        {
          icon: 'diamond',
          title: 'Split Granite',
          description: 'Hand-dressed local granite masonry on exterior structural columns.'
        },
        {
          icon: 'window',
          title: 'Thermally Broken Alum',
          description: 'Electrostatic matte charcoal finish resisting coastal salt pitting.'
        },
        {
          icon: 'forest',
          title: 'Red Cedar Slats',
          description: 'Kiln-dried western red cedar treated with bio-based protective oils.'
        },
        {
          icon: 'countertops',
          title: 'Arabescato Stone',
          description: 'Bookmatched honed slabs for kitchen islands and fireplace surrounds.'
        },
        {
          icon: 'straighten',
          title: 'Concealed Reglet',
          description: '12mm recessed shadow gaps replacing conventional skirting boards.'
        }
      ]
    },

    technicalChallenges: {
      tagline: 'Technical Case Study',
      headline: 'PROJECT INSIGHTS: ENGINEERING SOLVED',
      items: [
        {
          type: 'challenge',
          icon: 'warning',
          title: 'The Critical Challenge',
          description: 'Severe 40-degree gradient susceptible to seasonal groundwater seepage and high offshore wind uplift pressure exceeding 2.4 kPa during gale storms.'
        },
        {
          type: 'response',
          icon: 'engineering',
          title: 'Our Engineering Response',
          description: 'Engineered an interlocking rock-anchor micropile lattice with epoxy-coated steel reinforcement and secondary hydraulic perimeter bypass drainage channels.'
        },
        {
          type: 'outcome',
          icon: 'check_circle',
          title: 'The Verified Outcome',
          description: 'Zero structural settlement recorded post-earthquake test simulations, flawless facade stability under 140 km/h wind tunnel pressure testing.'
        }
      ]
    },

    qaMandate: {
      tagline: 'Uncompromising Rigor',
      headline: 'QUALITY IS BUILT INTO THE PROCESS.',
      description: 'Our six-point QA mandate executed before any certificate of completion is granted.',
      items: [
        {
          icon: 'science',
          title: 'Concrete Ultrasound Scans',
          description: 'Non-destructive test of every load-bearing column curing density.'
        },
        {
          icon: 'assignment_turned_in',
          title: 'Stage-wise Civic Sign-offs',
          description: 'Full municipal inspector verification before concrete casting begins.'
        },
        {
          icon: 'speed',
          title: 'Acoustic & Pressure Tests',
          description: 'Piping networks subjected to 1.5x working pressure for 48 hours.'
        },
        {
          icon: 'thermostat',
          title: 'FLIR Thermal Imaging',
          description: 'Infrared heat-loss inspection verifying air tightness across all glass seams.'
        },
        {
          icon: 'fact_check',
          title: 'Snag-Free Zero-Punch',
          description: 'Internal 340-point checklist before presentation to the client.'
        },
        {
          icon: 'verified_user',
          title: '10-Year Structural Cover',
          description: 'Comprehensive institutional warranty backed by PAANYA EMPIRE.'
        }
      ]
    }
  },
  {
    id: 'project-2',
    slug: 'aura-horizon-duplex',
    title: 'Aura Horizon Duplex',
    subtitle: 'Multi-Generational Custom Residence',
    location: 'Metro Ridges',
    category: 'Duplex Homes',
    categorySlug: 'duplex',
    status: 'Ongoing · Residential',
    isFeatured: true,
    year: 2024,
    area: '4,200 SQ FT',
    executionScope: 'Architecture + Construction',
    timelineDuration: '10 Months In Progress',
    guarantee: 'Full PAANYA Turnkey Structural & Fit-out Warranty',
    thumbnail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
    summary: 'Multi-generational custom layout featuring split-level private terraces, sound-insulated concrete floor assemblies, and seamless indoor-outdoor transition corridors.',
    description: 'A contemporary two-tier duplex residence with layered warm cedar wood siding, stone veneer facades, black-framed floor-to-ceiling glass windows, and split-level private gardens.',
    tags: ['Duplex', 'Architecture', 'Civil Construction', 'Acoustic Insulation']
  },
  {
    id: 'project-3',
    slug: 'the-glass-pavilion',
    title: 'The Glass Pavilion',
    subtitle: 'Monumental Double-Height Living Space',
    location: 'Hillside Meadows',
    category: 'Luxury Villas',
    categorySlug: 'luxury-villas',
    status: 'Completed · Interiors',
    isFeatured: true,
    year: 2023,
    area: '5,400 SQ FT',
    executionScope: 'Interiors + Finishing',
    timelineDuration: '8 Months Total',
    guarantee: 'PAANYA 24-Month Comprehensive Fit-out Assurance',
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    summary: 'Full interior architectural styling, custom monolithic masonry fireplace design, imported Italian slab flooring, and smart climate-responsive architectural shading.',
    description: 'Double-height luxury living room featuring an enormous rough-hewn natural stone fireplace hearth, minimalist black steel structural columns, and panoramic glass walls opening onto manicured estate gardens.',
    tags: ['Luxury Interior', 'Bespoke Stone', 'Frameless Glass', 'Smart Shading']
  },
  {
    id: 'project-4',
    slug: 'civic-apex-tower',
    title: 'Civic Apex Tower',
    subtitle: 'Commercial Structural & MEP Development',
    location: 'Central Business Core',
    category: 'Commercial',
    categorySlug: 'commercial',
    status: 'Ongoing · Phase 04',
    isFeatured: false,
    year: 2025,
    area: '120,000 SQ FT',
    executionScope: 'Structural + MEP Contracting',
    timelineDuration: '24 Months Total',
    guarantee: 'Institutional Commercial Structural Warranty',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    summary: 'Comprehensive multi-level structural engineering, curtain-wall exterior envelope fabrication, and high-efficiency MEP infrastructure integration.',
    description: 'High-rise modern commercial glass building with structural steel framework, curtain wall facade, and high-efficiency green building MEP certifications.',
    tags: ['Commercial', 'Structural Steel', 'MEP Infrastructure', 'LEED Gold Standard']
  },
  {
    id: 'project-5',
    slug: 'serene-crest-residence',
    title: 'Serene Crest Residence',
    subtitle: 'Private Sanctuary in Harmony with Nature',
    location: 'Pine Ridge Valley',
    category: 'Independent Homes',
    categorySlug: 'independent',
    status: 'Completed & Handed Over',
    isFeatured: false,
    year: 2023,
    area: '3,850 SQ FT',
    executionScope: 'Full Turnkey EPC',
    timelineDuration: '11 Months Total',
    guarantee: 'PAANYA 10-Year Structural Defect Guarantee',
    thumbnail: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80',
    summary: 'A standalone architectural home balancing privacy and light, incorporating passive cooling techniques, rainwater harvesting, and custom timber joinery.',
    description: 'Custom independent home featuring modern linear geometry, cantilevered shade canopies, open-concept family spaces, and sustainable solar power generation.',
    tags: ['Independent Home', 'Passive Solar', 'Custom Joinery', 'Turnkey EPC']
  },
  {
    id: 'project-6',
    slug: 'the-heritage-cloister',
    title: 'The Heritage Cloister',
    subtitle: 'Historic Manor Restoration & Modernization',
    location: 'Old Cantonment Area',
    category: 'Renovation',
    categorySlug: 'renovation',
    status: 'Completed & Handed Over',
    isFeatured: false,
    year: 2024,
    area: '6,200 SQ FT',
    executionScope: 'Adaptive Reuse & Modernization',
    timelineDuration: '9 Months Total',
    guarantee: 'PAANYA Heritage Restoration Structural Warranty',
    thumbnail: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    summary: 'Structural underpinning, delicate lime mortar restoration, and complete modern MEP retrofitting of a classic colonial estate with contemporary minimalist interiors.',
    description: 'Full structural strengthening of load-bearing masonry walls combined with hidden smart climate systems, restored teak wood ceilings, and seamless glass extensions.',
    tags: ['Renovation', 'Historic Restoration', 'Structural Underpinning', 'Retrofitting']
  }
];
