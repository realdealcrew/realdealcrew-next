import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "var(--color-accent)",
    color: "#000",
    border: "1px solid var(--color-accent)",
  },
  secondary: {
    background: "transparent",
    color: "var(--color-text-primary)",
    border: "1px solid var(--color-border)",
  },
  ghost: {
    background: "transparent",
    color: "var(--color-text-secondary)",
    border: "none",
  },
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-sm tracking-tight transition-opacity hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed";
  const classes = `${base} ${sizeStyles[size]} ${className}`;

  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={variantStyles[variant]}
      >
        {children}
      </a>
    ) : (
      <Link href={href} className={classes} style={variantStyles[variant]}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={variantStyles[variant]}
    >
      {children}
    </button>
  );
}
