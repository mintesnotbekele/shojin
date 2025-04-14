
// components/ui/Typography.tsx
import clsx from "clsx";

type TypographyProps = {
  children: React.ReactNode;
  variant: "heading" | "subheading" | "hero";
  className?: string;
};

export default function Typography({ children, variant, className }: TypographyProps) {
  return (
    <h2
      className={clsx(
        "tracking-wide text-light",
        variant === "heading" && "text-xl md:text-2xl",
        variant === "subheading" && "text-base md:text-lg italic",
        variant === "hero" && "text-4xl md:text-6xl font-bold",
        className
      )}
    >
      {children}
    </h2>
  );
}