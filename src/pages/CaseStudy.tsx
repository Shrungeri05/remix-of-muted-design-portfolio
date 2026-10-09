import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ZoomableImage from "@/components/ZoomableImage";
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
  const [lead, ...rest] = study.images;

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={study.navLabel} currentIndex="01" />

      <main className="min-h-screen pt-40 pb-16 px-8">
        <div className="max-w-3xl mx-auto text-center">
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

        {lead && (
          <motion.div
            className="max-w-5xl mx-auto w-full mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ZoomableImage src={lead.src} alt={lead.alt} eager imgClassName="max-h-[80vh] object-contain mx-auto" />
          </motion.div>
        )}

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

          {study.link && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <a
                href={study.link.href}
                target={study.link.external ? "_blank" : undefined}
                rel={study.link.external ? "noopener noreferrer" : undefined}
                className="external-link"
              >
                {study.link.label}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </div>

        <div className="flex flex-col gap-10 max-w-5xl mx-auto">
          {rest.map((image, index) => (
            <motion.div
              key={image.src}
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <ZoomableImage src={image.src} alt={image.alt} imgClassName="max-h-[80vh] object-contain mx-auto" />
            </motion.div>
          ))}
        </div>

        <p className="text-mono text-xs text-foreground/50 text-center mt-10">
          Tap or click any image to enlarge it.
        </p>

        <div className="flex justify-center mt-20">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-full border border-foreground/30 px-7 py-3 text-mono text-sm text-foreground hover:bg-foreground/10 hover:border-foreground/60 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to work
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
