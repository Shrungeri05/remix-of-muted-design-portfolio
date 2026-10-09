import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  dateRange: string;
  institution: string;
}

const education: EducationItem[] = [
  {
    degree: "Master of Fine Arts",
    dateRange: "2010-2012",
    institution: "Rhode Island School of Design",
  },
  {
    degree: "Interaction Design",
    dateRange: "2011-2012",
    institution: "Copenhagen Institute of Interaction Design",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="max-w-3xl mx-auto px-8 py-24">
      <motion.h3 
        className="section-header mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h3>
      <div className="flex flex-col gap-12">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8"
          >
            <div className="flex items-baseline gap-4 flex-1">
              <span className="text-mono text-xs text-foreground/40">0{index + 1}</span>
              <div>
                <h4 className="heading-display text-xl text-foreground mb-1">{item.degree}</h4>
                <p className="text-mono text-sm text-foreground/60">{item.institution}</p>
              </div>
            </div>
            <span className="text-mono text-sm text-foreground/50 md:text-right">{item.dateRange}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
