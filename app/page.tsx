import Image from "next/image";

const projects = [
  {
    title: "G-Share",
    description: "Community grocery-sharing platform with full-stack workflows.",
  },
  {
    title: "Chess Search Engine",
    description: "SQL + C# search-driven engine for exploring chess game data.",
  },
  {
    title: "Android Malware Detection",
    description: "Machine learning pipeline for malicious app classification.",
  },
];

export default function Home() {
  return (
    <section className="space-y-24">
      {/* Hero */}
      <section className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
        <div className="relative mx-auto">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-zinc-300/40 via-zinc-200/20 to-transparent blur-3xl dark:from-zinc-700/30 dark:via-zinc-600/10 animate-pulse" />
          <div className="animate-float relative h-56 w-56 overflow-hidden rounded-[2rem] border border-black/10 shadow-2xl dark:border-white/10">
            <Image
              src="/headshot.jpg"
              alt="Anand Palukuri"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6 animate-fade-up">
          <p className="inline-flex rounded-full border border-black/10 bg-white px-4 py-1 text-sm text-zinc-600 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
            Full-Stack Developer • Systems • ML
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I’m <span className="gradient-text">Anand</span> 👋
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            I’m a systems-minded software engineer who enjoys building software
            that behaves predictably in the real world. I care about correctness,
            reliability, and designing workflows that continue to work under real usage.
          </p>

          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            I’m especially drawn to long-term architecture trade-offs, debugging
            subtle issues, and improving performance until the system feels solid.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/projects"
              className="group inline-flex items-center rounded-2xl bg-zinc-900 px-6 py-3 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-black"
            >
              View All Projects
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/Anand_Raju_Palukuri_Resume.pdf"
              target="_blank"
              className="inline-flex items-center rounded-2xl border border-black/10 bg-white px-6 py-3 text-zinc-800 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="animate-fade-up [animation-delay:150ms]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Featured Projects</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              A few things I’ve built across systems, ML, and full-stack development.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-zinc-900/70"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-6 text-sm font-medium text-zinc-500 transition duration-300 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white">
                Explore more →
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}