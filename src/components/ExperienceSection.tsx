import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { caseStudies, type CaseStudyData } from "@/data/caseStudies";

interface EngagementItem {
  name: string;
  dateRange: string;
  role: string;
  detail: string;
}

const engagement: EngagementItem[] = [
  {
    name: "Queensland Emerging Planners Network",
    dateRange: "2027",
    role: "Incoming Committee Member",
    detail:
      "I joined the Planning Institute of Australia as a student member and regularly attend PIA Queensland and Emerging Planners events to learn from practising planners. After being a 2026 Pitch the Plan finalist, I was selected for the Queensland Emerging Planners Network Committee, starting in 2027.",
  },
  {
    name: "PIA Queensland Mentoring Program",
    dateRange: "2026–2027",
    role: "Mentee",
    detail:
      "Since August 2026 I have been mentored by a senior planner, also a UQ Urban and Regional Planning graduate, through PIA Queensland's 12-month mentoring program. My mentor has listened closely to my interests and helped expand my professional network. Being mentored while also mentoring new UQ students has shown me the value of paying support forward within the profession.",
  },
  {
    name: "UQ Get Set Mentor",
    dateRange: "July 2026",
    role: "Mentor",
    detail:
      "In July 2026 I mentored five students starting at UQ, supporting their transition to university through online and in-person catch-ups, answering questions about study and campus life, and connecting them with UQ support services.",
  },
];

const academicOrder = ["west-end", "eia-saint-elmo", "gis-suitability", "sunshine-coast-transport", "mumbai"];

const applied = caseStudies.filter((c) => c.group === "applied");
const academic = academicOrder
  .map((slug) => caseStudies.find((c) => c.slug === slug))
  .filter((c): c is CaseStudyData => Boolean(c));

const SectionHeading = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.h3
    className={`section-header mb-12 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h3>
);

const RowText = ({ index, name, dateRange, role }: { index: number; name: string; dateRange: string; role: string }) => (
  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8 text-left">
    <div className="flex items-baseline gap-4">
      <span className="text-mono text-xs text-foreground/40">{String(index + 1).padStart(2, "0")}</span>
      <span className="heading-display text-xl md:text-2xl text-foreground">{name}</span>
    </div>
    <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-mono text-sm md:text-right md:justify-end pl-8 md:pl-0">
      <span className="text-foreground/50">{dateRange}</span>
      <span className="text-foreground/70">{role}</span>
    </div>
  </div>
);

const ProjectRowText = ({ study, index }: { study: CaseStudyData; index: number }) => (
  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8 text-left">
    <div className="flex items-baseline gap-4 min-w-0">
      <span className="text-mono text-xs text-foreground/40">{String(index + 1).padStart(2, "0")}</span>
      <div className="min-w-0">
        <span className="heading-display block text-xl md:text-2xl text-foreground">{study.listName}</span>
        <span className="text-mono hidden md:block text-xs text-foreground/50 mt-1.5">{study.listDate}</span>
      </div>
    </div>
    <div className="flex flex-col gap-1 text-mono pl-8 md:pl-0 md:text-right md:shrink-0">
      <span className="text-xs tracking-wide text-foreground/55">
        <span className="md:hidden">{study.listDate} · </span>
        {study.listContext}
      </span>
      <span className="text-sm text-foreground/80">{study.listRole}</span>
    </div>
  </div>
);

const ProjectRow = ({ study, index }: { study: CaseStudyData; index: number }) => (
  <Link to={`/${study.slug}`} aria-label={`${study.listName}: view case study`}>
    <motion.div
      className="experience-card group border-b border-foreground/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <ProjectRowText study={study} index={index} />
      <ArrowUpRight className="w-5 h-5 shrink-0 text-foreground/30 md:opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </motion.div>
  </Link>
);

const ExperienceSection = () => {
  return (
    <section id="work" className="max-w-3xl mx-auto px-8 py-24">
      <SectionHeading>Industry &amp; Applied Projects</SectionHeading>
      <div className="flex flex-col">
        {applied.map((study, index) => (
          <ProjectRow key={study.slug} study={study} index={index} />
        ))}
      </div>

      <SectionHeading className="mt-24">Academic Projects</SectionHeading>
      <div className="flex flex-col">
        {academic.map((study, index) => (
          <ProjectRow key={study.slug} study={study} index={index} />
        ))}
      </div>

      <SectionHeading className="mt-24">Mentoring &amp; Professional Engagement</SectionHeading>
      <AccordionPrimitive.Root type="multiple" className="flex flex-col">
        {engagement.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <AccordionPrimitive.Item value={item.name} className="border-b border-foreground/10">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="experience-card group w-full [&[data-state=open]_.engagement-icon]:rotate-45">
                  <RowText index={index} name={item.name} dateRange={item.dateRange} role={item.role} />
                  <Plus className="engagement-icon w-5 h-5 shrink-0 text-foreground/50 transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <p className="body-text px-4 pb-6 pt-1 md:pl-12 md:pr-14">{item.detail}</p>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          </motion.div>
        ))}
      </AccordionPrimitive.Root>
      <p className="text-mono text-xs text-foreground/50 mt-4 px-4">Select a row to read more.</p>
    </section>
  );
};

export default ExperienceSection;
