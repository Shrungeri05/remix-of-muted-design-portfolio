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
  {
    company: "Verve",
    dateRange: "2024-Present",
    role: "Design Director",
    link: "/verve",
  },
  {
    company: "Spotify",
    dateRange: "2020-2024",
    role: "Staff Designer",
    link: "/spotify",
  },
  {
    company: "Figma",
    dateRange: "2016-2020",
    role: "Senior Designer",
    link: "/figma",
  },
  {
    company: "Notion",
    dateRange: "2012-2016",
    role: "Senior Designer",
    link: "/notion",
  },
];

const personalProjects: ExperienceItem[] = [
  {
    company: "Explorations + Motion",
    dateRange: "",
    role: "Personal Project",
    link: "/explorations",
  },
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
        <div className="flex items-center gap-6 text-mono text-sm">
          <span className="text-foreground/50">{item.dateRange}</span>
          <span className="text-foreground/70">{item.role}</span>
        </div>
      </div>
      <ArrowUpRight className="w-5 h-5 text-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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
        Experience
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
        Personal Projects
      </motion.h3>
      <div className="flex flex-col">
        {personalProjects.map((item, index) => (
          <ExperienceCard key={item.company} item={item} index={index + experiences.length} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
