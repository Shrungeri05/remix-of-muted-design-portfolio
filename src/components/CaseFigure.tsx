import { motion } from "framer-motion";
import ZoomableImage from "@/components/ZoomableImage";
import type { CaseStudyImage } from "@/data/caseStudies";

const EASE = [0.22, 1, 0.36, 1] as const;

const Caption = ({ n, text }: { n: number; text: string }) => (
  <figcaption className="mt-4 flex gap-4 text-mono text-xs leading-relaxed text-foreground/65 max-w-5xl mx-auto">
    <span className="shrink-0 text-foreground/40">Fig. {String(n).padStart(2, "0")}</span>
    <span>{text}</span>
  </figcaption>
);

/** Fades a photo out at every edge so it melts into the page. */
const photoMask = {
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent), linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
  WebkitMaskComposite: "source-in",
  maskImage:
    "linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent), linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
  maskComposite: "intersect",
} as const;

/**
 * A case study image. Photos run the full width of the screen and fade into the
 * background; graphics sit on softly lifted cards that glide in as you scroll.
 */
const CaseFigure = ({ image, n, eager }: { image: CaseStudyImage; n: number; eager?: boolean }) => {
  if (image.kind === "photo") {
    return (
      <motion.figure
        className="w-screen ml-[calc(50%-50vw)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <div className="max-w-[1600px] mx-auto" style={photoMask}>
          <ZoomableImage
            src={image.src}
            alt={image.alt}
            eager={eager}
            imgClassName="w-full h-auto md:h-[78vh] object-cover"
          />
        </div>
        <div className="px-8">
          <Caption n={n} text={image.caption} />
        </div>
      </motion.figure>
    );
  }

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
        className="rounded-xl md:rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_40px_80px_-30px_rgba(18,26,36,0.75)] transition-transform duration-500 ease-out hover:-translate-y-1"
        imgClassName="object-contain"
      />
      <Caption n={n} text={image.caption} />
    </motion.figure>
  );
};

export default CaseFigure;
