import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "text-base leading-normal transition-all font-normal",
  {
    variants: {
      variant: {
        h1: "text-[80px] xxlMax:text-6xl xlMax:text-5xl leading-[80px] xxlMax:leading-[60px] xlMax:leading-[48px] xsMax:text-10 xsMax:leading-[44px] tracking-[0.6px]",
        h2: "text-6xl	xxlMax:text-[40px] leading-[64px] xxlMax:leading-[40px]",
        h3: "text-2xl",
        h4: "text-lg lgMax:text-base mdMax:text-sm leading-[22px]",
        h5: "text-base lgMax:text-sm leading-6",
        p: "text-sm mdMax:text-xs leading-5 font-normal	",
        span: "inline",
        div: "block",
      },
      color: {
        default: "text-primary-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        description: "text-description",
      },
      size: {
        xs: "text-xs",
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg mdMax:text-base",
        xl: "text-xl mdMax:text-lg",
        "2xl": "text-2xl mdMax:text-xl",
        "3xl": "text-3xl mdMax:text-2xl",
        "4xl": "text-4xl mdMax:text-3xl",
        "5xl": "text-5xl mdMax:text-4xl",
      },
      textAlign: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
      lineHeight: {
        default: "leading-normal",
        relaxed: "leading-relaxed",
        tight: "leading-tight",
      },
      fontFamily: {
        doppio: "font-doppio",
        dmSans: "font-dmSans",
      },
      fontWeight: {
        thin: "font-thin",
        extralight: "font-extralight",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
        black: "font-black",
      },
    },
    defaultVariants: {
      variant: "p",
      color: "default",
      fontWeight: "normal",
    },
  }
);

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  fontFamily?: "doppio" | "dmSans";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant,
      color,
      size,
      textAlign,
      lineHeight,
      fontFamily,
      fontWeight,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Component = variant || "p";

    return (
      <Component
        className={cn(
          typographyVariants({
            variant,
            color,
            size,
            textAlign,
            lineHeight,
            fontFamily,
            fontWeight,
            className,
          })
        )}
        ref={ref as any}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
