import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { CaseStudyData } from "@/data/caseStudies";

const renderDescription = (text: string) =>
  text.split(/(\[[^\]]+\])/).map((part, i) =>
    part.startsWith("[") ? (
      <span key={i} className="text-emphasis">{part.slice(1, -1)}</span>
    ) : (
      part
    ),
  );

const CaseStudy = ({ study }: { study: CaseStudyData }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={study.navLabel} currentIndex={study.index} />

      <main className="min-h-screen pt-40 pb-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {study.title}
          </motion.h1>
          <motion.p
            className="body-text text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {study.subtitle}
          </motion.p>
        </div>

        <motion.div
          className="max-w-5xl mx-auto w-full mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ImagePlaceholder label={study.images[0]} className="aspect-video" />
        </motion.div>

        <div className="max-w-2xl mx-auto mb-24">
          <motion.p
            className="body-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {renderDescription(study.description)}
          </motion.p>

          <motion.a
            href={study.link?.href ?? "/#work"}
            className="external-link"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {study.link ? (
              <>
                {study.link.label}
                <ArrowUpRight className="w-4 h-4" />
              </>
            ) : (
              "Back to work"
            )}
          </motion.a>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {study.images.slice(1).map((label, index) => (
            <motion.div
              key={label}
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ImagePlaceholder label={label} className="aspect-video" />
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
