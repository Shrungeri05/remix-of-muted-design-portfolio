export interface CaseStudyData {
  slug: string;
  navLabel: string;
  index: string;
  title: string;
  subtitle: string;
  /** Wrap emphasised phrases in [square brackets]. */
  description: string;
  link?: { label: string; href: string };
  images: string[];
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: "pitch-the-plan",
    navLabel: "Pitch the Plan",
    index: "02",
    title: "The River Runs Through It",
    subtitle:
      "A ferry-oriented development strategy for Brisbane, set in the context of the 2032 Olympic and Paralympic Games.",
    description:
      "Selected as [one of five finalists statewide] in the PIA Queensland Emerging Planners Pitch the Plan competition (2026). I developed and presented a [planning proposal] to an [industry panel], supported by an [interactive project webpage].",
    link: { label: "View project webpage", href: "#" },
    images: ["Proposal overview map", "Ferry network and development nodes", "Pitch presentation"],
  },
  {
    slug: "uq-maps",
    navLabel: "UQ Maps",
    index: "03",
    title: "Co-Designing Inclusive Digital Navigation",
    subtitle:
      "A UQ Student-Staff Partnership project improving the accessibility of the UQ Maps platform. Jul - Dec 2026.",
    description:
      "As [Data Collection and Synthesis Lead], I partner with two university staff members and a fellow student to identify [accessibility and usability barriers] in the UQ Maps mobile platform. I co-developed the project plan and lead [survey design], [task-based wayfinding walkthroughs] across campus and the synthesis of findings into [journey maps], informing evidence-based recommendations and a design brief.",
    images: ["Wayfinding walkthrough", "Journey map", "Key findings"],
  },
  {
    slug: "armidale",
    navLabel: "Armidale",
    index: "04",
    title: "Growing a World-Class Botanic Garden",
    subtitle:
      "Practera industry consulting project for Armidale Botanic Garden Inc., The University of Queensland. Jun - Jul 2026.",
    description:
      "In a [seven-member multidisciplinary consulting team], we delivered market research and strategic recommendations for the client's plan to transform the Armidale Bicentennial Arboretum into a world-class botanic garden. I wrote the report's [Customer Groups and Demand Insights] section, using tourism statistics and a [thematic analysis of Google reviews] to prioritise three target customer groups. The final report recommended [activation opportunities] including seasonal events, partnerships, visitor facilities and digital presence.",
    images: ["Site context", "Customer groups summary", "Recommendations"],
  },
  {
    slug: "west-end",
    navLabel: "West End",
    index: "05",
    title: "West End Site Development",
    subtitle: "Urban Design Studio (PLAN7122), The University of Queensland. Semester 2, 2025.",
    description:
      "An integrated [master planning proposal] responding to growth pressures, infrastructure needs and sustainability objectives in West End, Brisbane. The proposal combines [land use], [transport integration] and [public realm design].",
    images: ["Site analysis", "Master plan", "Public realm visualisation"],
  },
  {
    slug: "gis-suitability",
    navLabel: "GIS Suitability",
    index: "06",
    title: "Balancing Conservation and Growth",
    subtitle:
      "GIS land suitability study, South D'Aguilar National Park (GEOM7005). Semester 1, 2026.",
    description:
      "Using [weighted overlay analysis] in [ArcGIS Pro], I produced suitability maps across a [143 km² peri-urban study area] to evaluate competing land uses and balance biodiversity conservation against development pressures.",
    images: ["Study area", "Suitability criteria and weightings", "Final suitability map"],
  },
];
