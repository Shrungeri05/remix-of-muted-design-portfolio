import { motion } from "framer-motion";
import ZoomableImage from "@/components/ZoomableImage";
import type { CaseStudyImage } from "@/data/caseStudies";

const EASE = [0.22, 1, 0.36, 1] as const;

const Caption = ({ n, text, centred }: { n: number; text: string; centred?: boolean }) => (
  <figcaption
    className={`mt-4 flex gap-4 text-mono text-xs leading-relaxed text-foreground/65 max-w-5xl mx-auto ${centred ? "justify-center text-center" : ""}`}
  >
    <span className="shrink-0 text-foreground/40">Fig. {String(n).padStart(2, "0")}</span>
    <span>{text}</span>
  </figcaption>
);

const CARD =
  "rounded-xl md:rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_40px_80px_-30px_rgba(18,26,36,0.75)] transition-transform duration-500 ease-out hover:-translate-y-1";

/**
 * A case study image on a softly lifted, rounded card that glides in as you scroll.
 * Graphics fill the column width; photos keep their own proportions and are never cropped.
 */
const CaseFigure = ({ image, n, eager }: { image: CaseStudyImage; n: number; eager?: boolean }) => {
  const isPhoto = image.kind === "photo";
  return (
    <motion.figure
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <ZoomableImage
        src={image.src}
        alt={image.alt}
        eager={eager}
        className={isPhoto ? `${CARD} w-fit max-w-full mx-auto` : CARD}
        imgClassName={isPhoto ? "w-auto max-w-full max-h-[80vh]" : "object-contain"}
      />
      <Caption n={n} text={image.caption} centred={isPhoto} />
    </motion.figure>
  );
};

export default CaseFigure;
