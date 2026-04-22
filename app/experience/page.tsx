import Link from "next/link";
import { EXPERIENCES } from "@/lib/experience";

export default function Experience() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-semibold">Experience</h1>

      {EXPERIENCES.map((exp) => (
        <Link
          key={exp.slug}
          href={`/experience/${exp.slug}`}
          className="block rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-950"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h2 className="text-lg font-semibold">
              {exp.company} : {exp.role}
            </h2>
            <span className="text-sm text-zinc-500">
              {exp.date}
              {exp.date.includes("Present") && (
                <span className="ml-2 animate-pulse rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-500">
                  Current
                </span>
                )}
            </span>
          </div>

          {/* Stack */}
          <p className="mt-2 text-sm text-zinc-500">
            {exp.stack.join(", ")}
          </p>

          {/* Highlights */}
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            {exp.highlights.map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        </Link>
      ))}
    </section>
  );
}