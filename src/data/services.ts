import type { Service } from '../types/service';

const services: Service[] = [
  {
    id: 's1',
    slug: 'architecture-and-design',
    title: 'Architecture',
    isFlagship: false,
    shortDescription: 'Architecture is where your project begins. We translate site topography, orientation, natural lighting, and luxury spatial needs into high-caliber structural geometry.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    listingImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    icon: 'architecture',
    overview: {
      subtitle: 'Conceptual Studio',
      title: 'Designed around your vision.',
      description: 'Architecture is where your project begins. We translate site topography, orientation, natural lighting, and luxury spatial needs into high-caliber structural geometry.',
      capabilities: [
        'Architectural Planning',
        'Concept Development',
        'Floor Planning',
        'Elevation Design',
        '3D Visualization',
        'Design Coordination',
        'Technical Documentation'
      ]
    },
    scope: {
      title: 'Architectural Phases',
      subtitle: 'What we deliver',
      description: 'Our architectural process is rigorous and deeply collaborative.',
      stages: [
        {
          number: '01',
          title: 'Site Analysis & Feasibility',
          description: 'Evaluating zoning, topography, and environmental factors.',
          items: ['Topographical surveys', 'Zoning compliance', 'Sun path analysis']
        },
        {
          number: '02',
          title: 'Concept Design',
          description: 'Developing the initial massing and spatial flow.',
          items: ['Moodboards', 'Massing models', 'Initial floor plans']
        }
      ]
    }
  },
  {
    id: 's2',
    slug: 'turnkey-construction',
    title: 'Turnkey Construction',
    isFlagship: true,
    shortDescription: 'Turnkey brings every solitary facet of development together under Paanya Empire\'s direct command — engineering permits, foundation pours, HVAC integrations, interior craftsmanship, and certified occupancy.',
    heroImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80',
    listingImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80',
    icon: 'foundation',
    overview: {
      subtitle: 'What is Turnkey Construction?',
      title: 'YOU HAVE ONE VISION. WE MANAGE THE REST.',
      description: 'Turnkey construction means having one dedicated partner orchestrating every complex discipline of your property — eliminating the fragmentation, finger-pointing, and timeline slip of managing siloed contractors.',
      capabilities: [
        'Architectural planning',
        'Structural engineering',
        'Estimation & BOQ',
        'Municipal approvals',
        'Civil construction',
        'Electrical & Plumbing',
        'MEP coordination',
        'Flooring & Tiling',
        'Custom woodwork',
        'Doors & Windows',
        'Interior execution',
        'Luxury fixtures',
        'Rigorous quality audits',
        'Final key handover'
      ]
    },
    comparison: {
      subtitle: 'Traditional vs Turnkey',
      title: 'The Difference Between Chaos and Certainty',
      description: 'Fragmented coordination versus unified executive delivery.',
      fragmented: {
        title: 'Traditional Fragmented Model',
        description: 'Too many people. Too many decisions.',
        points: [
          'Constant finger-pointing when architectural drawings clash with site reality',
          'Unexpected cost overruns through unaccounted change orders',
          'You bear 100% of the logistical strain and daily disputes'
        ]
      },
      turnkey: {
        title: 'Paanya Empire Turnkey',
        description: 'One team. One coordinated process.',
        highlight: '100% Single-Source Accountability. From first 3D render to turning the front door key, your project lead oversees quality, timeline, and cost.'
      }
    },
    scope: {
      subtitle: 'End-to-End Management',
      title: 'Every Stage. Coordinated.',
      description: 'Nothing falls through the cracks when every discipline is united.',
      stages: [
        {
          number: '01',
          title: 'Design & Architecture',
          description: 'From concept to finalized blueprints, optimizing space and aesthetics.',
          items: ['3D Visualization', 'Structural Design', 'Vastu/Feng Shui']
        },
        {
          number: '02',
          title: 'Approvals & Permits',
          description: 'We handle all municipal liaising and legal documentation.',
          items: ['Building Permits', 'Environmental Clearance', 'Utility Connections']
        },
        {
          number: '03',
          title: 'Civil Construction',
          description: 'Rigorous structural execution with top-tier materials.',
          items: ['Excavation', 'Foundation', 'Superstructure']
        },
        {
          number: '04',
          title: 'MEP Systems',
          description: 'Seamless integration of Mechanical, Electrical, and Plumbing.',
          items: ['HVAC Design', 'Smart Home Wiring', 'Water Management']
        },
        {
          number: '05',
          title: 'Interiors & Finishes',
          description: 'Bespoke woodwork, luxury flooring, and premium fixtures.',
          items: ['Custom Cabinetry', 'Italian Marble', 'Designer Lighting']
        },
        {
          number: '06',
          title: 'Final Handover',
          description: 'A deep-cleaned, fully functional home ready for move-in.',
          items: ['Quality Audit', 'Appliance Testing', 'Key Handover']
        }
      ]
    },
    benefits: {
      title: 'Why Paanya Empire Turnkey',
      subtitle: 'The Executive Advantage',
      description: 'We bring institutional-grade execution to luxury residential construction.',
      items: [
        {
          icon: 'verified_user',
          title: 'Single Point of Contact',
          description: 'One dedicated project manager handles everything. No more chasing contractors.'
        },
        {
          icon: 'av_timer',
          title: 'Timeline Certainty',
          description: 'Integrated teams mean no delays between phases. We stick to the schedule.'
        },
        {
          icon: 'balance',
          title: 'Financial Transparency',
          description: 'Fixed contracts. No hidden fees. Complete visibility into material costs.'
        }
      ]
    },
    process: [
      {
        phase: 'Phase 1',
        title: 'Discovery & Consultation',
        duration: '1-2 Weeks',
        description: 'Understanding your vision, lifestyle requirements, and assessing the site constraints.'
      },
      {
        phase: 'Phase 2',
        title: 'Design & Engineering',
        duration: '4-8 Weeks',
        description: 'Developing architectural plans, 3D renders, and securing all necessary structural engineering sign-offs.'
      },
      {
        phase: 'Phase 3',
        title: 'Approvals & Procurement',
        duration: '4-6 Weeks',
        description: 'Navigating municipal bureaucracy while simultaneously securing premium materials to prevent delays.'
      },
      {
        phase: 'Phase 4',
        title: 'Construction & Execution',
        duration: '8-14 Months',
        description: 'The core build phase, managed with military precision and weekly progress reporting.'
      },
      {
        phase: 'Phase 5',
        title: 'Handover & Warranty',
        duration: 'Final Week',
        description: 'Rigorous 100-point inspection followed by the official handover of your keys and warranty documents.'
      }
    ]
  },
  {
    id: 's3',
    slug: 'construction-contracting',
    title: 'Construction & Contracting',
    isFlagship: false,
    shortDescription: 'For clients and developer entities with approved architectural designs seeking elite execution. Our on-site structural engineers enforce industrial-grade quality controls and rigorous material audits.',
    heroImage: 'https://images.unsplash.com/photo-1541888086925-0c13e4b33c5e?auto=format&fit=crop&q=80',
    listingImage: 'https://images.unsplash.com/photo-1541888086925-0c13e4b33c5e?auto=format&fit=crop&q=80',
    icon: 'construction',
    overview: {
      subtitle: 'Execution Excellence',
      title: 'Built with structural precision.',
      description: 'For clients and developer entities with approved architectural designs seeking elite execution. Our on-site structural engineers enforce industrial-grade quality controls and rigorous material audits.',
      capabilities: [
        'Site Mobilization',
        'Foundation & Substructure',
        'Superstructure Concrete',
        'Masonry & Blockwork',
        'Quality Assurance'
      ]
    },
    scope: {
      title: 'Construction Milestones',
      subtitle: 'Phased Delivery',
      description: 'We build to last generations.',
      stages: [
        {
          number: '01',
          title: 'Substructure',
          description: 'Deep foundations and structural retaining walls.',
          items: ['Excavation', 'Piling', 'Waterproofing']
        },
        {
          number: '02',
          title: 'Superstructure',
          description: 'The structural skeleton of the building.',
          items: ['Columns', 'Slabs', 'Roofing']
        }
      ]
    }
  }
];

export default services;
