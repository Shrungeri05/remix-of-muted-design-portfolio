import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ExperienceItem {
  company: string;
  dateRange: string;
  role: string;
  link?: string;
}

const experiences: ExperienceItem[] = [
  { company: "Pitch the Plan", dateRange: "2026", role: "PIA Qld Finalist", link: "/pitch-the-plan" },
  { company: "UQ Maps Co-Design", dateRange: "2026", role: "Data Collection & Synthesis Lead", link: "/uq-maps" },
  { company: "Armidale Botanic Garden", dateRange: "2026", role: "Visitor Experience Analyst", link: "/armidale" },
  { company: "West End Urban Design", dateRange: "2025", role: "Urban Design Studio", link: "/west-end" },
  { company: "GIS Land Suitability", dateRange: "2026", role: "Spatial Analysis", link: "/gis-suitability" },
];

const recognition: ExperienceItem[] = [
  { company: "PIA Queensland Pitch the Plan", dateRange: "2026", role: "One of five statewide finalists" },
  { company: "PIA Qld Emerging Planners Network", dateRange: "2027", role: "Incoming Committee Member" },
  { company: "PIA Queensland Mentoring Program", dateRange: "2026-2027", role: "Mentee" },
  { company: "UQ Get Set Mentor", dateRange: "2026", role: "Mentor to five commencing students" },
];

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const content = (
    <motion.div
      className="experience-card group border-b border-foreground/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8">
        <div className="flex items-baseline gap-4">
          <span className="text-mono text-xs text-foreground/40">0{index + 1}</span>
          <span className="heading-display text-xl md:text-2xl text-foreground">{item.company}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-mono text-sm md:text-right md:justify-end">
          <span className="text-foreground/50">{item.dateRange}</span>
          <span className="text-foreground/70">{item.role}</span>
        </div>
      </div>
      {item.link && <ArrowUpRight className="w-5 h-5 shrink-0 text-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />}
    </motion.div>
  );

  if (item.link) {
    return <Link to={item.link}>{content}</Link>;
  }

  return content;
};

const ExperienceSection = () => {
  return (
    <section id="work" className="max-w-3xl mx-auto px-8 py-24">
      <motion.h3 
        className="section-header mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Selected Work
      </motion.h3>
      <div className="flex flex-col">
        {experiences.map((item, index) => (
          <ExperienceCard key={item.company} item={item} index={index} />
        ))}
      </div>
      
      <motion.h3 
        className="section-header mb-16 mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Recognition &amp; Engagement
      </motion.h3>
      <div className="flex flex-col">
        {recognition.map((item, index) => (
          <ExperienceCard key={item.company} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
