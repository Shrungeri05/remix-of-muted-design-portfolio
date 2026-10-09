import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import explorationsShowcase1 from "@/assets/explorations-showcase-1.jpg";

const Explorations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="Explorations" currentIndex="06" />
      
      <main className="min-h-screen pt-40 pb-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1 
            className="heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explorations & Motion
          </motion.h1>
          
          <motion.p 
            className="body-text text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Personal experiments in motion design, generative art, and creative coding.
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
              src={explorationsShowcase1} 
              alt="Abstract motion graphics with flowing geometric shapes"
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
            Outside of my product work, I explore the intersection of{" "}
            <span className="text-emphasis">design and technology</span> through 
            personal projects. These experiments range from{" "}
            <span className="text-emphasis">generative art systems</span> to{" "}
            <span className="text-emphasis">interactive installations</span> and 
            motion design explorations.
          </motion.p>
          
          <motion.p 
            className="body-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I use tools like{" "}
            <span className="text-emphasis">Processing</span>,{" "}
            <span className="text-emphasis">p5.js</span>, and{" "}
            <span className="text-emphasis">After Effects</span> to create work that 
            explores rhythm, color theory, and organic movement. These projects 
            often inform my product design thinking in unexpected ways.
          </motion.p>
          
          <motion.p 
            className="body-text italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "The best interfaces feel alive—like they're breathing with you."
          </motion.p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explorations;
