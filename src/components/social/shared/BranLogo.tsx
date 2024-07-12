import { cn } from "../../../lib/utils";

export default function BrandLogo({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn("relative size-12 overflow-hidden rounded-full", className)}
    >
      <img className="h-12 w-full object-cover" src={src} alt={alt} />
    </div>
  );
}
