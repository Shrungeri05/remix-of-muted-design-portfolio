import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import figmaShowcase1 from "@/assets/figma-showcase-1.jpg";

const Figma = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="Figma" currentIndex="04" />
      
      <main className="min-h-screen pt-40 pb-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1 
            className="heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building Tools for Designers
          </motion.h1>
          
          <motion.p 
            className="body-text text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Helping shape the collaborative design platform that revolutionized how teams work together.
          </motion.p>
        </div>
        
        <motion.div
          className="max-w-5xl mx-auto w-full mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="aspect-video overflow-hidden">
            <img 
              src={figmaShowcase1} 
              alt="Figma collaborative design interface with multiple cursors"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto mb-24">
          <motion.p 
            className="body-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            At Figma, I was part of the team that brought{" "}
            <span className="text-emphasis">real-time collaboration</span> to the forefront of design tools. 
            I contributed to the{" "}
            <span className="text-emphasis">component system</span>,{" "}
            <span className="text-emphasis">auto-layout</span> features, and the early 
            prototyping interactions that made Figma feel magical.
          </motion.p>
          
          <motion.p 
            className="body-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Beyond product work, I helped establish{" "}
            <span className="text-emphasis">design systems practices</span> internally and 
            contributed to the early versions of{" "}
            <span className="text-emphasis">Figma Community</span>, enabling designers 
            to share and remix each other's work.
          </motion.p>
          
          <motion.a
            href="https://figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            figma.com
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Figma;
