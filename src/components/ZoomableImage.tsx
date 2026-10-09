import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

/**
 * Shows an image in full (never cropped). Clicking or tapping it opens a
 * full-screen view, with a link to the original file for pinch-zooming on phones.
 */
const ZoomableImage = ({ src, alt, className, imgClassName, eager }: ZoomableImageProps) => (
  <DialogPrimitive.Root>
    <DialogPrimitive.Trigger asChild>
      <button
        type="button"
        className={cn("group relative block w-full cursor-zoom-in text-left", className)}
        aria-label={`Enlarge image: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          className={cn("block w-full h-auto", imgClassName)}
        />
        <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white opacity-80 transition-opacity duration-200 group-hover:opacity-100 md:opacity-0">
          <Maximize2 className="h-4 w-4" />
        </span>
      </button>
    </DialogPrimitive.Trigger>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4 outline-none md:p-10">
        <DialogPrimitive.Title className="sr-only">{alt}</DialogPrimitive.Title>
        <DialogPrimitive.Close asChild>
          <button
            type="button"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogPrimitive.Close>
        <img src={src} alt={alt} className="max-h-[85vh] max-w-full object-contain" />
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-mono inline-flex items-center gap-1 text-xs text-white/70 underline underline-offset-4 hover:text-white"
        >
          Open full size
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);

export default ZoomableImage;
