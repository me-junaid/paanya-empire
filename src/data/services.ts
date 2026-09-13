import type { Service } from '../types/service';

const services: Service[] = [
  {
    id: 's1',
    slug: 'construction',
    title: 'Turnkey Construction',
    isFlagship: true,
    shortDescription: 'Comprehensive turnkey civil construction, high-end residential estates, structural engineering, and commercial builds delivered with fixed-price accountability and military-grade precision.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    listingImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80',
    icon: 'construction',
    stats: [
      { label: 'Structural Assurance', value: '10-Year Warranty' },
      { label: 'Accountability', value: 'Single Source' },
      { label: 'Budget Adherence', value: '100% Fixed BOQ' },
      { label: 'Project Director', value: 'Dedicated 1:1' },
    ],
    overview: {
      subtitle: 'End-to-End Civil & Structural Excellence',
      title: 'YOU HAVE ONE VISION. WE BUILD THE REALITY.',
      description: 'Turnkey construction means having one dedicated partner orchestrating every complex discipline of your property — eliminating the fragmentation, contractor disputes, and timeline slippage of managing siloed vendors.',
      capabilities: [
        'Architectural Planning & Structural Sign-offs',
        'Deep Foundations & High-Grade Concrete Pours',
        'Precision Brickwork & Superstructure Framing',
        'Integrated MEP, HVAC & Smart Automation',
        'Luxury Interior Fit-Outs & Custom Millwork',
        'Multi-Tier Quality & Safety Audits',
        'Municipal Sanctions & Certified Occupancy Handover'
      ]
    },
    comparison: {
      subtitle: 'Traditional vs Turnkey',
      title: 'The Difference Between Chaos and Certainty',
      description: 'Fragmented coordination versus unified executive delivery.',
      fragmented: {
        title: 'Traditional Fragmented Model',
        description: 'Too many people. Too many conflicting interests.',
        points: [
          'Constant finger-pointing when architectural drawings clash with site reality',
          'Unexpected cost escalations through hidden change orders',
          'Client bears 100% of the logistical strain, procurement delays, and daily disputes'
        ]
      },
      turnkey: {
        title: 'Paanya Empire Turnkey',
        description: 'One team. One coordinated execution timeline.',
        highlight: '100% Single-Source Accountability. From initial soil testing to turning the front door key, your project lead guarantees quality, timeline, and budget.'
      }
    },
    scope: {
      subtitle: 'End-to-End Management',
      title: 'Every Stage. Coordinated.',
      description: 'Nothing falls through the cracks when design, procurement, and execution are united.',
      stages: [
        {
          number: '01',
          title: 'Planning, Permitting & BOQ',
          description: 'Structural engineering drawings, soil analytics, municipal sanction clearances, and detailed Bill of Quantities.',
          items: ['Topographical analysis', 'Structural design vetting', 'Municipal sanction filings', 'Locked-in milestone budget']
        },
        {
          number: '02',
          title: 'Substructure & Foundation',
          description: 'Excavation, anti-termite barrier treatment, deep piling, and reinforced concrete footings.',
          items: ['Earthwork excavation', 'Piling & grade beams', 'Waterproofing barriers', 'Plinth level inspections']
        },
        {
          number: '03',
          title: 'Superstructure & Shell',
          description: 'High-strength RCC columns, monolithic slabs, precision blockwork, and weatherized exterior building envelope.',
          items: ['RCC frame construction', 'AAC / clay block masonry', 'Lintels & roof casting', 'Thermal envelope insulation']
        },
        {
          number: '04',
          title: 'MEP & Interior Craftsmanship',
          description: 'Concealed conduits, plumbing pressure testing, custom woodwork, Italian marble flooring, and smart home automation.',
          items: ['Concealed electrical & plumbing', 'Flooring & wall cladding', 'Acoustic & ceiling design', 'Premium fixture integration']
        },
        {
          number: '05',
          title: 'Quality Audits & Key Handover',
          description: '150-point quality audit, deep cleaning, municipal occupancy documentation, and 10-year warranty delivery.',
          items: ['System stress testing', 'Touch-up & deep detailing', 'As-built documentation', '10-Year structural warranty']
        }
      ]
    },
    benefits: {
      subtitle: 'The Turnkey Advantage',
      title: 'Engineered for Complete Peace of Mind',
      description: 'We insulate our clients from the operational volatility of construction.',
      items: [
        {
          icon: 'verified_user',
          title: 'Single-Point Accountability',
          description: 'One contract, one project director, zero contractor finger-pointing.'
        },
        {
          icon: 'av_timer',
          title: 'Timeline Certainty',
          description: 'Integrated teams mean seamless transitions between phases, strictly adhering to milestone dates.'
        },
        {
          icon: 'account_balance',
          title: 'Financial Transparency',
          description: 'Fixed-milestone agreements with zero hidden costs and complete transparency in grade-A materials.'
        },
        {
          icon: 'security',
          title: '10-Year Structural Guarantee',
          description: 'Long-term assurance covering foundation stability, load-bearing frames, and building integrity.'
        }
      ]
    },
    process: [
      {
        phase: 'Phase 1',
        title: 'Discovery & Consultation',
        duration: '1-2 Weeks',
        description: 'Translating lifestyle requirements, site parameters, and architectural vision into an actionable project brief.'
      },
      {
        phase: 'Phase 2',
        title: 'Design, BOQ & Engineering',
        duration: '3-6 Weeks',
        description: 'Comprehensive structural drafting, 3D photorealistic renderings, and granular line-item cost finalization.'
      },
      {
        phase: 'Phase 3',
        title: 'Approvals & Mobilization',
        duration: '2-4 Weeks',
        description: 'Expediting municipal clearances, site fencing, batching plant coordination, and heavy machinery setup.'
      },
      {
        phase: 'Phase 4',
        title: 'Civil Build & MEP Integration',
        duration: '6-12 Months',
        description: 'Phased structural casting, masonry, plumbing, electrical, and surface finishing under full-time engineering supervision.'
      },
      {
        phase: 'Phase 5',
        title: 'Audit, Detailing & Handover',
        duration: 'Final 2 Weeks',
        description: 'Exhaustive snag list rectifications, sanitization, occupancy certificate handover, and formal key presentation.'
      }
    ]
  },
  {
    id: 's2',
    slug: 'real-estate',
    title: 'Real Estate & Development',
    isFlagship: false,
    shortDescription: 'Strategic land banking, verified plot acquisitions, bespoke luxury residential development, and commercial real estate investment advisory across Bengaluru and high-growth corridors.',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    listingImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    icon: 'real_estate_agent',
    stats: [
      { label: 'Title Search', value: '30-Year History' },
      { label: 'Corridors', value: 'Bengaluru & Prime' },
      { label: 'Asset Archetypes', value: 'Plots, Villas & Land' },
      { label: 'Synergy', value: 'Direct to Build' },
    ],
    overview: {
      subtitle: 'Strategic Property Advisory & Land Assets',
      title: 'INVESTING IN VALUE. DEVELOPING LEGACIES.',
      description: 'Whether acquiring prime land parcels for custom villa construction, evaluating commercial real estate yields, or navigating land title due diligence, Paanya Empire offers institutional-grade market acumen and verified properties.',
      capabilities: [
        'Prime Residential & Commercial Land Scouting',
        '30-Year Legal Title Search & Due Diligence',
        'Bespoke Luxury Villa Sales & Development',
        'Joint Development (JD) Structuring & Execution',
        'Zoning, FAR & Masterplan Feasibility Studies',
        'High-Yield Real Estate Investment Advisory'
      ]
    },
    scope: {
      subtitle: 'Transaction & Development Lifecycle',
      title: 'From Land Sourcing to Asset Handover',
      description: 'Our real estate division provides end-to-end investment security and transparent legal clarity.',
      stages: [
        {
          number: '01',
          title: 'Market Scouting & Asset Identification',
          description: 'Evaluating micro-market trends, road connectivity, infrastructure catalysts, and zoning parameters.',
          items: ['Land parcel identification', 'Connectivity & infrastructure checks', 'Zoning & Master Plan 2031 alignment']
        },
        {
          number: '02',
          title: 'Rigorous Legal Due Diligence',
          description: 'Comprehensive 30-year documentation scrutiny, revenue record audits, and encumbrance verification.',
          items: ['Title deed verification', 'RERA & BDA / BMRDA compliance', 'Pahani & mutation records search', 'Litigation check']
        },
        {
          number: '03',
          title: 'Transaction & Development Structuring',
          description: 'Structuring clear sale deeds, joint development agreements, and aligning with construction blueprints.',
          items: ['Contract drafting & negotiation', 'Escrow & transparent closing', 'Development potential roadmap']
        }
      ]
    },
    benefits: {
      subtitle: 'The Paanya Advantage',
      title: 'Institutional Rigor for Real Estate Assets',
      description: 'We eliminate legal ambiguity and maximize long-term asset appreciation.',
      items: [
        {
          icon: 'gavel',
          title: 'Clean Title Guarantee',
          description: 'Every property undergoes multi-lawyer vetting and comprehensive revenue record scrutiny.'
        },
        {
          icon: 'trending_up',
          title: 'High-Growth Corridors',
          description: 'Curated selection in strategic appreciation pockets across Bengaluru and emerging economic zones.'
        },
        {
          icon: 'handshake',
          title: 'End-to-End Synergy',
          description: 'Seamless handover from land acquisition directly into our turnkey construction division.'
        }
      ]
    },
    process: [
      {
        phase: 'Phase 1',
        title: 'Brief & Criteria Formulation',
        duration: 'Week 1',
        description: 'Clarifying investment targets, land size, geography preferences, and end-use residential or commercial goals.'
      },
      {
        phase: 'Phase 2',
        title: 'Shortlisting & Ground Validation',
        duration: 'Weeks 2-3',
        description: 'Physical site visits, boundary surveys, neighborhood demographic analysis, and environmental evaluation.'
      },
      {
        phase: 'Phase 3',
        title: 'Title Diligence & Legal Vetting',
        duration: 'Weeks 3-4',
        description: 'Exhaustive search across sub-registrar archives, municipal records, and encumbrance validation.'
      },
      {
        phase: 'Phase 4',
        title: 'Transaction & Closing',
        duration: 'Week 5',
        description: 'Transparent execution of agreement to sell, stamp duty coordination, and registration.'
      }
    ]
  },
  {
    id: 's3',
    slug: 'security-and-manpower',
    title: 'FortMan Security & Manpower',
    isFlagship: false,
    shortDescription: 'A Division of Paanya Empire Pvt Ltd. Established in 2018 (originally Good Life Associates, merged with Paanya Empire in 2024), FortMan delivers disciplined security guards, ex-army personnel, dynamic ERP monitoring, and facility manpower across Karnataka and Andhra Pradesh.',
    heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
    listingImage: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80',
    icon: 'shield_person',
    stats: [
      { label: 'Guards & Manpower Deployed', value: '1,000+' },
      { label: 'Satisfied Institutional Clients', value: '100+' },
      { label: 'Regional Operational Footprint', value: 'Karnataka & AP' },
      { label: 'Operational Pedigree', value: 'Since 2018' },
    ],
    overview: {
      subtitle: 'A Division of Paanya Empire Pvt Ltd',
      title: 'YOUR SAFETY IS OUR RESPONSIBILITY',
      description: 'FortMan Security Services was established in 2018 under the name Good Life Associates. In 2024, the company merged with Paanya Empire Pvt Ltd, strengthening operations and scaling security deployments across Andhra Pradesh and Karnataka. Today, FortMan is a premier provider of technology-backed protection and facility workforce solutions serving apartments, hospitals, educational institutions, industries, and real estate projects.',
      capabilities: [
        'Residential Apartments & Gated Community Security',
        'Commercial Buildings, Tech Parks & Retail Security',
        'Industrial Plants & Manufacturing Unit Protection',
        'Hospitals, Healthcare & Educational Institution Security',
        'Real Estate Construction Project Site Security',
        'Ex-Army Trained Personnel & Professional RAXA Academy Training',
        'Dynamic ERP Attendance Management & GPS-Based Tracking',
        'Real-Time Monitoring, Visitor & Guest Digital Management',
        'Pocket Body Cameras, Walkie-Talkies & Alcohol Test Kits',
        'Facility Management, Housekeeping & Office Assistants',
        'Skilled & Unskilled Technical Workforce Supply'
      ]
    },
    scope: {
      subtitle: 'Field Officer Monitoring Program',
      title: 'Supervised Discipline & Technology-Driven Protocols',
      description: 'At FortMan, we believe security guards must be physically fit, well-trained, disciplined, and proactive communicators. Dedicated Field Officers conduct regular field inspections and surprise audits to uphold the highest operational standards.',
      stages: [
        {
          number: '01',
          title: 'Field Officer Inspection Protocol',
          description: 'Continuous oversight program ensuring uniform grooming, on-site physical fitness, and protocol compliance.',
          items: [
            'Weekly on-site inspections & visits',
            'Surprise night audits & alert checks',
            'Uniform, grooming & discipline verification',
            'On-site refresher training & drill instruction',
            'Incident report review & client escalation handling'
          ]
        },
        {
          number: '02',
          title: 'Technology & ERP Attendance Ecosystem',
          description: 'Modern digital tracking replacing error-prone manual logbooks with cloud-managed accountability.',
          items: [
            'Dynamic ERP attendance management system',
            'GPS-based mobile attendance tracking',
            'Real-time digital visitor & guest logging',
            'Alcohol breathalyzer testing equipment',
            'Pocket body cameras & walkie-talkie communication'
          ]
        },
        {
          number: '03',
          title: 'Facility & Manpower Supply Capabilities',
          description: 'Full-spectrum staffing solutions catering to corporate offices, residential associations, and construction operations.',
          items: [
            'Certified security guards & head supervisors',
            'Professional housekeeping & sanitation staff',
            'Facility management & operations support',
            'Front-desk executives & office assistants',
            'Skilled, semi-skilled & unskilled project workforce'
          ]
        }
      ]
    },
    benefits: {
      subtitle: 'Our Commitment & Core Strengths',
      title: 'Why Top Organizations Choose FortMan',
      description: 'Protecting people, property, and peace of mind with vetted discipline, military-grade standards, and 24/7 support.',
      items: [
        {
          icon: 'military_tech',
          title: 'Ex-Army & RAXA Academy Trained',
          description: 'Personnel trained through professional academies like RAXA Academy, instilling military discipline, vigilance, and physical readiness.'
        },
        {
          icon: 'devices',
          title: 'Technology-Based Monitoring',
          description: 'Dynamic ERP attendance systems, GPS location tracking, and digital visitor registries guarantee 100% duty transparency.'
        },
        {
          icon: 'support_agent',
          title: '24x7 Operational Support & Field Visits',
          description: 'Dedicated 24/7 central support control, regular daytime field visits, and unannounced night inspections to prevent lapses.'
        },
        {
          icon: 'verified',
          title: '100% Statutory Compliance & Quick Deployment',
          description: 'Strict adherence to PF, ESI, police verification, and labor safety regulations with swift workforce mobilization.'
        }
      ]
    },
    plans: [
      {
        name: 'Pro Plan',
        badge: 'Maximum Vigilance',
        idealFor: 'Premium Apartments, Industries, Hospitals & Large Construction Projects',
        features: [
          'Security Guards Below 40 Years of Age',
          'Ex-Army Trained Personnel',
          'Walkie-Talkie Multi-Channel Communication',
          'Pocket Body Cameras for High-Risk Points',
          'On-Site Alcohol Breathalyzer Test Kit',
          'Dynamic ERP Attendance Tracking System',
          'Digital Visitor & Guest Monitoring',
          'Weekly Field Officer Visits & Night Inspections'
        ]
      },
      {
        name: 'Standard Plan',
        badge: 'Most Popular',
        idealFor: 'Schools, Corporate Offices, Apartments & Commercial Buildings',
        features: [
          'Security Guards Below 45 Years of Age',
          'On-Site Alcohol Breathalyzer Test Kit',
          'Dynamic ERP Attendance Tracking System',
          'Visitor & Guest Monitoring Register',
          'Regular Training & Field Officer Supervision',
          'Surprise Night Checks & Patrol Audits',
          '24/7 Operations Desk Access'
        ]
      },
      {
        name: 'Basic Plan',
        badge: 'Essential Defense',
        idealFor: 'Small Residential Apartments, Standalone Offices & Warehouses',
        features: [
          'Security Guards Below 45 Years of Age',
          'Dynamic ERP Attendance Tracking System',
          'Visitor & Guest Monitoring Register',
          'Regular Field Officer Scheduled Visits',
          'Uniformed, Vetted & Disciplined Staff',
          '24/7 Operations Desk Access'
        ]
      }
    ],
    process: [
      {
        phase: 'Phase 1',
        title: 'Site Security Survey & Sizing',
        duration: 'Days 1-2',
        description: 'Comprehensive assessment of perimeter walls, entry points, high-risk assets, and required guard count & shifts.'
      },
      {
        phase: 'Phase 2',
        title: 'Personnel Vetting & Protocol Briefing',
        duration: 'Days 3-5',
        description: 'Selecting candidate guards matching age and qualification criteria, background verification, and site-specific training.'
      },
      {
        phase: 'Phase 3',
        title: 'Deployment & ERP Setup',
        duration: 'Day 6',
        description: 'Formal roll-out with uniform inspection, logbook handover, walkie-talkie/ERP configuration, and supervisor briefing.'
      },
      {
        phase: 'Phase 4',
        title: 'Continuous Supervision & Night Audits',
        duration: 'Ongoing',
        description: 'Routine weekly Field Officer evaluations, surprise midnight checks, and ongoing emergency response drills.'
      }
    ]
  }
];

export default services;
