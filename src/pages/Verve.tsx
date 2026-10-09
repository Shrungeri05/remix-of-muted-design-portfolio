import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import verveShowcase1 from "@/assets/verve-showcase-1.jpg";
import verveShowcase2 from "@/assets/verve-showcase-2.jpg";
import verveShowcase3 from "@/assets/verve-showcase-3.jpg";

const caseStudyImages = [
  {
    src: verveShowcase1,
    alt: "Verve product interface showing task management workflow",
  },
  {
    src: verveShowcase2,
    alt: "Sales proposal slide with vibrant gradient",
  },
  {
    src: verveShowcase3,
    alt: "Analytics dashboard with data visualization",
  },
];

const Verve = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="Verve" currentIndex="02" />
      
      <main className="min-h-screen pt-40 pb-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <motion.h1 
            className="heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Reimagining Creative Collaboration
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="body-text text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Verve is the new standard for how creative teams can ideate, prototype, and ship design work together.
          </motion.p>
        </div>
        
        {/* First Image - Full Width */}
        <motion.div
          className="max-w-5xl mx-auto w-full mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="aspect-video overflow-hidden">
            <img 
              src={caseStudyImages[0].src} 
              alt={caseStudyImages[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Role Description */}
        <div className="max-w-2xl mx-auto mb-24">
          <motion.p 
            className="body-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            As part of Verve's founding design team, I helped craft a{" "}
            <span className="text-emphasis">next-generation collaborative design platform</span>{" "}
            from the ground up. I led early{" "}
            <span className="text-emphasis">product design</span>,{" "}
            <span className="text-emphasis">experience design</span>,{" "}
            <span className="text-emphasis">design systems</span>, and{" "}
            <span className="text-emphasis">visual identity</span>, shaping a tool now trusted by teams worldwide.
          </motion.p>
          
          {/* External Link */}
          <motion.a
            href="https://verve.design"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            verve.design
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
        
        {/* More Images */}
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {caseStudyImages.slice(1).map((image, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Verve;
