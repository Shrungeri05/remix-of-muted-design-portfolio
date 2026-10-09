import { cn } from "@/lib/utils";

const ImagePlaceholder = ({ label, className }: { label: string; className?: string }) => (
  <div
    role="img"
    aria-label={label}
    className={cn(
      "w-full flex items-center justify-center bg-foreground/[0.04] border border-foreground/10 p-6",
      className,
    )}
  >
    <span className="text-mono text-[10px] md:text-xs uppercase tracking-widest text-foreground/40 text-center">
      {label}
    </span>
  </div>
);

export default ImagePlaceholder;
