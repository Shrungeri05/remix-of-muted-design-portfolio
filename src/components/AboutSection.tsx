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
          Over a decade of experience crafting digital products, brands and experiences that are used by millions of people every day.
        </motion.p>
        
        <motion.p 
          className="body-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Embracing growth, I continually combine extensive experience in{" "}
          <span className="text-emphasis">Product</span>,{" "}
          <span className="text-emphasis">Motion</span>,{" "}
          <span className="text-emphasis">Sound</span> and{" "}
          <span className="text-emphasis">Brand</span> Design.
        </motion.p>
        
        <motion.p 
          className="body-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I am dedicated to shaping a better future through Design. My approach always puts people first — from clients to users.
        </motion.p>
        
        <motion.p 
          className="heading-display text-xl italic text-foreground/80 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Curious and optimistic.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
