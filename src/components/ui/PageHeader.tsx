interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="mb-16">
      <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
        {eyebrow}
      </p>

      <h1 className="mt-3 text-6xl font-black">
        {title}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
        {description}
      </p>
    </section>
  );
}

export default PageHeader;