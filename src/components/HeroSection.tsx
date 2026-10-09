import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 pt-32 pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl mx-auto"
      >
        {/* Large Display Headline */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] tracking-tight">
            <span className="block">SHRUNGERI</span>
            <span className="block mt-2 md:mt-4">SHROWTY</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          className="text-mono text-sm md:text-base tracking-widest text-foreground/70 uppercase mb-20"
          variants={itemVariants}
        >
          Urban &amp; Regional Planning
        </motion.p>

        {/* Featured Image */}
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <ImagePlaceholder label="Hero image: selected project visual" className="aspect-[4/3]" />
        </motion.div>

        {/* Description below image */}
        <motion.p 
          className="body-text max-w-xl mx-auto mt-16 text-center"
          variants={itemVariants}
        >
          Planning sustainable, connected and inclusive places.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
