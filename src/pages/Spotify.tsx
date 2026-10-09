import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import spotifyShowcase1 from "@/assets/spotify-showcase-1.jpg";

const Spotify = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="Spotify" currentIndex="03" />
      
      <main className="min-h-screen pt-40 pb-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1 
            className="heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Designing for 500 Million Listeners
          </motion.h1>
          
          <motion.p 
            className="body-text text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Shaping the future of audio streaming through intuitive interfaces and personalized experiences.
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
              src={spotifyShowcase1} 
              alt="Spotify interface redesign showing playlist management"
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
            During my four years at Spotify, I worked across{" "}
            <span className="text-emphasis">core listening experiences</span>,{" "}
            <span className="text-emphasis">discovery features</span>, and{" "}
            <span className="text-emphasis">creator tools</span>. I led the redesign of the library experience, 
            making it easier for users to organize and access their favorite music.
          </motion.p>
          
          <motion.p 
            className="body-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Key contributions included the new{" "}
            <span className="text-emphasis">Blend</span> social listening feature, 
            improvements to{" "}
            <span className="text-emphasis">Wrapped</span> personalization, and establishing 
            design patterns for the emerging podcast experience.
          </motion.p>
          
          <motion.a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            spotify.com
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Spotify;
