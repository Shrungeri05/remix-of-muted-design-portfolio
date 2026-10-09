export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudyData {
  slug: string;
  group: "applied" | "academic";
  /** Short name used in the home-page list and the navigation bar. */
  listName: string;
  listDate: string;
  listRole: string;
  navLabel: string;
  index: string;
  title: string;
  subtitle: string;
  /** Wrap emphasised phrases in [square brackets]. */
  description: string;
  link?: { label: string; href: string; external?: boolean };
  /** The first image is shown large under the title; the rest follow the description. */
  images: CaseStudyImage[];
}

const img = (file: string, alt: string): CaseStudyImage => ({ src: `/images/${file}`, alt });

export const caseStudies: CaseStudyData[] = [
  {
    slug: "pitch-the-plan",
    group: "applied",
    listName: "Pitch the Plan",
    listDate: "2026",
    listRole: "PIA Qld Finalist",
    navLabel: "Pitch the Plan",
    index: "02",
    title: "The River Runs Through It",
    subtitle:
      "Reimagining the Brisbane River as the city's primary transit spine. PIA Queensland Emerging Planners, Pitch the Plan 2026.",
    description:
      "Selected as [one of five finalists statewide] in PIA Queensland's Pitch the Plan 2026, I presented this proposal to an industry panel with co-presenter A/Prof Dorina Pojani. Only 2.3% of Brisbane's public transport trips use the river, yet South East Queensland will grow by 2.2 million people by 2046. The proposal makes the river a [transit spine] on three pillars: a high-frequency ferry spine, [ferry-oriented development] around every landing, and walkable last-mile links. It is staged to start with low-cost frequency uplift before 2032 and part-funded through [value capture].",
    link: { label: "Explore the interactive spectator journey", href: "/spectator-journey.html", external: true },
    images: [
      img("ptp-photo-stage.webp", "Shrungeri presenting The River Runs Through It at PIA Queensland's Pitch the Plan event"),
      img("ptp-slide-2.webp", "Slide: We're widening roads for a city the river could move"),
      img("ptp-slide-3.webp", "Slide: The Brisbane River as a transit spine, with the proposed route and landings"),
      img("ptp-slide-4.webp", "Slide: Every landing becomes a neighbourhood"),
      img("ptp-slide-6.webp", "Slide: Legacy, implementation and funding"),
      img("ptp-photo-presenting.webp", "Shrungeri and co-presenter A/Prof Dorina Pojani presenting the problem slide"),
    ],
  },
  {
    slug: "uq-maps",
    group: "applied",
    listName: "UQ Maps Co-Design",
    listDate: "2026 · Ongoing",
    listRole: "Data Collection & Synthesis Lead",
    navLabel: "UQ Maps",
    index: "03",
    title: "Co-Designing Inclusive Digital Navigation for UQ Maps",
    subtitle: "UQ Student-Staff Partnership project. Ongoing, Jul–Dec 2026.",
    description:
      "Working with two staff partners and a fellow student, I am the project's [Data Collection and Synthesis Lead]. We are identifying [accessibility and usability barriers] in the UQ Maps mobile app, with walkthroughs focused on people with physical disabilities. I designed the [user survey], the [task-based wayfinding walkthroughs] and the participant privacy notices, and I am synthesising findings into [journey maps] that will inform recommendations and a design brief for UQ.",
    images: [
      img("uq-photo-team.webp", "The UQ Maps project team at the 'Have your say on the future of UQ Maps' screen"),
      img("uq-1-method.webp", "Graphic: project method, with the parts Shrungeri leads marked"),
      img("uq-2-walkthroughs.webp", "Graphic: wayfinding walkthrough design, one shared task and five routes by access need"),
    ],
  },
  {
    slug: "armidale",
    group: "applied",
    listName: "Armidale Botanic Garden",
    listDate: "2026",
    listRole: "Visitor Experience Analyst",
    navLabel: "Armidale",
    index: "04",
    title: "Growing a World-Class Botanic Garden",
    subtitle:
      "Practera Consulting Project for Armidale Botanic Garden Inc., The University of Queensland. Jun–Jul 2026.",
    description:
      "In a [seven-member multidisciplinary consulting team], we delivered market research and strategic recommendations for Armidale Botanic Garden Inc.'s plan to transform the Bicentennial Arboretum into a world-class botanic garden. I wrote the [Customer Groups and Demand Insights] and the [Priority Visitor Groups and Activation Opportunities] sections, using tourism statistics and a thematic analysis of Google reviews to prioritise local families, garden and nature tourists, and education and lifelong learners.",
    images: [
      img("pr-1-groups.webp", "Graphic: three priority visitor groups and their recommended activations"),
      img("pr-2-insights.webp", "Graphic: what visitors expect, from a thematic analysis of Google reviews"),
      img("pr-3-activation.webp", "Graphic: five activation opportunities and expected benefits"),
    ],
  },
  {
    slug: "west-end",
    group: "academic",
    listName: "West End Urban Design",
    listDate: "2025",
    listRole: "Urban Design",
    navLabel: "West End",
    index: "05",
    title: "A Connected, Creative West End",
    subtitle:
      "Urban Design Studio (PLAN7122): Site Development in West End, The University of Queensland. Semester 2, 2025.",
    description:
      "An urban design proposal for Victoria Street and Ferry Road that turns underused street edges into welcoming public spaces celebrating West End's creative identity. Built around [activity, identity and form], it uses small-scale placemaking (pocket plazas, spillover space and modular street furniture) and a [safer, greener Victoria Street] with wider footpaths, deep planting and bike lanes. I produced the [design, renders and site plan].",
    images: [
      img("we-1-vision.webp", "Graphic: vision for a connected, creative West End corridor, with activity, identity and form"),
      img("we-2-strategies.webp", "Graphic: placemaking strategies shown on a render of the community building"),
      img("we-3-interventions.webp", "Graphic: four renders of placemaking interventions"),
      img("we-4-siteplan.webp", "Graphic: proposed Victoria Street site plan with key strategies"),
    ],
  },
  {
    slug: "eia-saint-elmo",
    group: "academic",
    listName: "Saint Elmo EIA",
    listDate: "2025",
    listRole: "Environmental Assessment",
    navLabel: "Saint Elmo EIA",
    index: "06",
    title: "Testing an EIS Against Best Practice",
    subtitle:
      "Environmental Impact Assessment (ENVM7206): Saint Elmo Vanadium Project. Semester 2, 2025.",
    description:
      "I critically evaluated the Environmental Impact Statement for [Australia's first proposed vanadium mine], near Julia Creek in North West Queensland. Benchmarked against [IAIA (2015) and ISO 14001] best practice, the EIS met its procedural requirements but lacked a formal adaptive management framework and a quality assurance system, so none of the 12 criteria were fully met. I recommended an [integrated framework] linking monitoring, data quality checks, thresholds, stakeholder review and public reporting in one cycle.",
    images: [
      img("eia-1-context.webp", "Graphic: Saint Elmo Vanadium Project context"),
      img("eia-2-scorecard.webp", "Graphic: compliance scorecard, 0 of 12 best-practice criteria fully met"),
      img("eia-3-framework.webp", "Graphic: recommended integrated adaptive management and QA/QC cycle"),
    ],
  },
  {
    slug: "gis-suitability",
    group: "academic",
    listName: "GIS Land Suitability",
    listDate: "2026",
    listRole: "Spatial Analysis",
    navLabel: "GIS Suitability",
    index: "07",
    title: "Balancing Conservation and Growth",
    subtitle:
      "GIS Land Suitability Study (GEOM7005): South D'Aguilar National Park. Semester 1, 2026. Group of three.",
    description:
      "I led the [environmental suitability analysis]: biodiversity value from remnant ecosystem data and proximity to D'Aguilar National Park, weighted equally and reclassified to a 1–5 scale in [ArcGIS Pro]. My teammates built the development suitability model, and together we produced a [conservation-first final allocation] across the 143 km² study area: 43% protection, 45% rural residential development and 12% transition.",
    images: [
      img("gis-2-env.webp", "Graphic: biodiversity and park proximity maps combining into the environmental suitability map"),
      img("gis-1-method.webp", "Graphic: two suitability models and their criteria weightings"),
      img("gis-3-allocation.webp", "Graphic: final land allocation map and area shares"),
    ],
  },
  {
    slug: "sunshine-coast-transport",
    group: "academic",
    listName: "Sunshine Coast Transport",
    listDate: "2025",
    listRole: "Transport Planning",
    navLabel: "Sunshine Coast",
    index: "08",
    title: "Making Room for Active Travel",
    subtitle: "Transport System Analysis (PLAN7116): Sunshine Coast. Semester 1, 2025. Group of six.",
    description:
      "Our group analysed the Sunshine Coast's transport system ahead of the 2032 Games, each member taking one lens; mine was [non-motorised modes]. Active travel is strong in Maroochydore but thins out in outer localities like Mooloolaba and Forest Glen, where walking and cycling are mostly recreational. I developed the [Encourage Active Mobility strategy] within our five-year plan to reduce car dependency, setting out actions for council, community and the private sector.",
    images: [
      img("tr-1-context.webp", "Graphic: Sunshine Coast car dependency statistics and the group's six research lenses"),
      img("tr-2-network.webp", "Graphic: active travel network, strong in the centre and thinning at the edges"),
      img("tr-3-strategy.webp", "Graphic: Encourage Active Mobility actions by council, community and private sector"),
    ],
  },
  {
    slug: "mumbai",
    group: "academic",
    listName: "Mumbai: Relocating Informality",
    listDate: "2026",
    listRole: "Global South Planning",
    navLabel: "Mumbai",
    index: "09",
    title: "Relocating Informality",
    subtitle:
      "Global South Cities (PLAN7612): Redevelopment and Urban Governance in Mumbai. Semester 1, 2026.",
    description:
      "About half of Mumbai's 20 million residents live in informal settlements on less than a tenth of its land. Drawing on Roy's idea of [informality as governance], I analysed the Slum Rehabilitation Authority and the [Dharavi Redevelopment Project], arguing that redevelopment often relocates informality to the city's edge rather than removing it. I proposed [tenure-first, community-led upgrading] as a fairer alternative, drawing on Thailand's Baan Mankong programme and the work of SPARC, Mahila Milan and the National Slum Dwellers Federation.",
    images: [
      img("mb-1-context.webp", "Graphic: half of Mumbai's population lives on under a tenth of its land"),
      img("mb-2-flow.webp", "Graphic: how redevelopment-led planning relocates informality"),
      img("mb-3-compare.webp", "Graphic: redevelopment-led versus tenure-first, community-led planning"),
    ],
  },
];
