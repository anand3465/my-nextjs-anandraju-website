import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          A selection of systems, web apps, ML tooling, and game projects I’ve built.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-950"
          >
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.slice(0, 5).map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
