interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export default function Section({
  children,
  className = "",
  id,
  style,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`} style={style}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}
