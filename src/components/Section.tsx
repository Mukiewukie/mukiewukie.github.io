type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id}>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}
