type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
      </div>
      {children}
    </section>
  );
}
