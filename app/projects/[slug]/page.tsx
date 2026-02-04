import { PROJECTS } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>

        {project.links?.length ? (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-zinc-700 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-300"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Highlights</h2>
        <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
