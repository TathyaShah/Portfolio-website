interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-4xl font-bold text-center mb-12">
      <span className="text-primary">{children}</span>
    </h2>
  );
}