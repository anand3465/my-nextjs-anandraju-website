import { EXPERIENCES } from "@/lib/experience";
import { notFound } from "next/navigation";

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const exp = EXPERIENCES.find((e) => e.slug === slug);
  if (!exp) return notFound();

  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">
          {exp.company} : {exp.role}
        </h1>
        <p className="text-zinc-500 mt-1">{exp.date}</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {exp.details}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Impact</h2>
        <ul className="mt-3 space-y-2">
          {exp.highlights.map((h) => (
            <li key={h}>• {h}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <p className="mt-2">{exp.stack.join(", ")}</p>
      </section>
    </article>
  );
}