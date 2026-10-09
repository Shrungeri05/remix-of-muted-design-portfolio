import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import notionShowcase1 from "@/assets/notion-showcase-1.jpg";

const Notion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="Notion" currentIndex="05" />
      
      <main className="min-h-screen pt-40 pb-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1 
            className="heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Where Ideas Take Shape
          </motion.h1>
          
          <motion.p 
            className="body-text text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Crafting the all-in-one workspace that became how teams think, write, and plan together.
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
              src={notionShowcase1} 
              alt="Notion workspace with database views and kanban boards"
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
            As one of the early designers at Notion, I helped define the{" "}
            <span className="text-emphasis">block-based editing experience</span> that 
            became the foundation of the product. I worked on{" "}
            <span className="text-emphasis">database views</span>,{" "}
            <span className="text-emphasis">templates</span>, and the initial 
            visual language that still defines Notion today.
          </motion.p>
          
          <motion.p 
            className="body-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My focus was on making complex information architecture feel{" "}
            <span className="text-emphasis">simple and intuitive</span>. I led the design 
            of the sidebar navigation, page hierarchy, and the{" "}
            <span className="text-emphasis">slash command menu</span> that makes 
            Notion so efficient to use.
          </motion.p>
          
          <motion.a
            href="https://notion.so"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            notion.so
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Notion;
