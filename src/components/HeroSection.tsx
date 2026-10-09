import { motion } from "framer-motion";

/** Soft dark halo so light text stays readable over the photo. */
const textHalo = { textShadow: "0 1px 2px rgba(24, 32, 42, 0.55), 0 0 18px rgba(24, 32, 42, 0.45)" };

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
    <section className="relative min-h-screen flex flex-col justify-center items-center px-8 pt-32 pb-24 overflow-hidden">
      {/* Backdrop: Brisbane skyline, toned to the site colour and fading into the page */}
      <motion.div
        className="absolute inset-0"
        aria-hidden
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, #000 55%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, #000 55%, transparent 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/images/hero-brisbane.webp"
          alt=""
          className="w-full h-full object-cover object-[50%_40%]"
          style={{ filter: "saturate(0.7)" }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-background mix-blend-color opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, hsl(var(--background) / 0.7) 0%, hsl(var(--background) / 0.55) 35%, hsl(var(--background) / 0.75) 60%, hsl(var(--background) / 0.85) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative text-center max-w-5xl mx-auto"
      >
        {/* Large Display Headline */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h1
            className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] tracking-tight"
            style={textHalo}
          >
            <span className="block">SHRUNGERI</span>
            <span className="block mt-2 md:mt-4">SHROWTY</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div className="mb-16" variants={itemVariants} style={textHalo}>
          <p className="text-mono text-sm md:text-base font-semibold tracking-widest text-foreground uppercase">
            Master of Urban &amp; Regional Planning
          </p>
          <p className="text-mono text-xs md:text-sm font-medium tracking-widest uppercase mt-3 text-[#E7DCC6]">
            The University of Queensland
          </p>
        </motion.div>

        {/* Statement */}
        <motion.p
          className="body-text max-w-xl mx-auto text-center text-foreground"
          variants={itemVariants}
          style={textHalo}
        >
          Planning sustainable, connected and inclusive places.
        </motion.p>
      </motion.div>

    </section>
  );
};

export default HeroSection;
