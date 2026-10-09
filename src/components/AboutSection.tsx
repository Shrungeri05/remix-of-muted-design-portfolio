import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="max-w-3xl mx-auto px-8 py-24">
      <motion.h3 
        className="section-header mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h3>
      <div className="flex flex-col gap-8">
        <motion.p 
          className="body-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I am a Master of Urban and Regional Planning candidate at The University of Queensland, graduating in November 2026, with a background in architecture.
        </motion.p>
        
        <motion.p 
          className="body-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My work combines{" "}
          <span className="text-emphasis">strategic and statutory planning</span>,{" "}
          <span className="text-emphasis">environmental impact assessment</span>,{" "}
          <span className="text-emphasis">GIS and spatial analysis</span> and{" "}
          <span className="text-emphasis">urban design</span>.
        </motion.p>
        
        <motion.p 
          className="body-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I enjoy turning evidence and community needs into clear, practical planning recommendations.
        </motion.p>
        
        <motion.p 
          className="heading-display text-xl italic text-foreground/80 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Curious, careful and people-first.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
