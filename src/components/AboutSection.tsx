import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const AboutSection = () => {
  return (
    <section id="about" className="max-w-3xl mx-auto px-8 py-24">
      <motion.h3 className="section-header mb-16" {...fadeUp(0)}>
        About
      </motion.h3>
      <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10 md:items-center">
        <motion.div className="w-full max-w-sm mx-auto md:max-w-none" {...fadeUp(0.1)}>
          <img
            src="/images/photo-portrait-ptp.webp"
            alt="Shrungeri Shrowty at PIA Queensland's Pitch the Plan 2026"
            className="block w-full aspect-[4/5] object-cover object-top"
            loading="lazy"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.p className="body-text" {...fadeUp(0.15)}>
            I am a Master of Urban and Regional Planning candidate at The University of Queensland, graduating in November 2026, with a background in architecture.
          </motion.p>

          <motion.p className="body-text" {...fadeUp(0.2)}>
            My work combines{" "}
            <span className="text-emphasis">strategic and statutory planning</span>,{" "}
            <span className="text-emphasis">environmental impact assessment</span>,{" "}
            <span className="text-emphasis">GIS and spatial analysis</span> and{" "}
            <span className="text-emphasis">urban design</span>.
          </motion.p>

          <motion.p className="body-text" {...fadeUp(0.25)}>
            I enjoy turning evidence and community needs into clear, practical planning recommendations.
          </motion.p>

          <motion.p className="heading-display text-xl italic text-foreground/80 mt-4" {...fadeUp(0.3)}>
            Curious, careful and people-first.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
