// app/page.tsx (or wherever your page.tsx lives)
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
};

const PROFILE = {
  name: "Anand Raju Palukuri",
  role: "Full-Stack Developer • ML/Systems",
  blurb:
    "I build reliable, data-driven products—full-stack apps, ML pipelines, and systems that hold up under real-world constraints.",
  location: "Salt Lake City, UT",
  email: "anandraju.palukuri@email.com",
  github: "https://github.com/anand3465",
  linkedin: "https://www.linkedin.com/in/anand-palukuri-208992255",
  resume: "/Anand_Raju_Palukuri_Resume.pdf", 
};

const PROJECTS = [
  {
    title: "G-Share — Community Grocery-Sharing Platform",
    description:
      "A full-stack platform for group carts, shared orders, location-based matching, and delivery tracking.",
    stack: ["Django", "MySQL", "Tailwind", "AWS S3", "Google Maps", "Gemini", "D3.js"],
    highlights: [
      "Led development of group ordering flows (group carts + shared orders) with transactional backend workflows.",
      "Built scalable Django APIs with optimized MySQL queries, caching, and modular view structure.",
      "Integrated Gemini workflows for AI-assisted ordering + receipt parsing with human-in-the-loop verification.",
      "Added real-time delivery tracking using Google Maps and WebSockets with a responsive Tailwind UI.",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/anand-palukuri-208992255/" },
      { label: "Repo", href: "https://github.com/YOUR_GITHUB_HANDLE/g-share" }, // optional
    ],
  },
  {
    title: "Android Malware Detection — ML Pipeline",
    description:
      "A machine learning pipeline that classifies Android apps using dynamic system-call features.",
    stack: ["Python", "NumPy", "scikit-learn", "SVM", "Logistic Regression", "Random Forest"],
    highlights: [
      "Built a 360-feature pipeline and evaluated multiple classifiers on multiple datasets.",
      "Designed a weighted-voting ensemble reaching 91.98% test accuracy with reproducible evaluation.",
      "Focused on robustness and interpretability when combining models.",
    ],
    links: [{ label: "Repo", href: "https://github.com/YOUR_GITHUB_HANDLE/android-malware-ml" }],
  },
  {
    title: "Contract Generation System",
    description:
      "A contract-generation app that parses DOCX, supports live editing, and exports to PDF/Word.",
    stack: ["C#", ".NET MAUI", "DOCX parsing", "React", "WCAG"],
    highlights: [
      "Designed and deployed a user-centered contract workflow: parse → template → edit → export.",
      "Built WCAG-compliant React UIs for contract management and multi-party editing workflows.",
      "Researched and integrated 32+ APIs for document automation and improved production reliability.",
      "Used iterative testing + sprint reviews to reduce QA cycles by ~30%.",
    ],
    links: [{ label: "Case Study", href: "https://YOUR_SITE.com/contracts" }],
  },
  {
    title: "Startup Visualization Dashboard",
    description:
      "Interactive dashboard exploring CS salaries vs. startup funding with accessible visual design.",
    stack: ["JavaScript", "D3.js", "HTML/CSS", "Python/Jupyter"],
    highlights: [
      "Built responsive D3 charts with drilldowns and hover-based exploration.",
      "Cleaned/normalized public data sources for consistent analysis.",
      "Designed with accessibility in mind (semantic nav + colorblind-safe choices).",
    ],
    links: [{ label: "Demo", href: "https://YOUR_SITE.com/dashboard" }],
  },
  {
    title: "Learning Management System",
    description:
      "Database-backed LMS with role-based access control and data integrity constraints.",
    stack: ["MySQL", "C#", "LINQ", "Schema Design"],
    highlights: [
      "Designed ER model and normalized schema with constraints + referential integrity.",
      "Implemented 25+ LINQ queries to power backend data access and flows.",
      "Enforced secure role-based workflows across multiple user roles.",
    ],
    links: [{ label: "Repo", href: "https://github.com/YOUR_GITHUB_HANDLE/lms" }],
  },
  {
    title: "Android Fitness RPG (Hackathon)",
    description:
      "Fitness game driven by real-world step tracking and GPS, linking movement to player progression.",
    stack: ["Kotlin", "SQLite", "Sensor APIs", "Android Studio"],
    highlights: [
      "Built step + GPS-driven gameplay loops with persisted progression and state.",
      "Improved step-count reliability with correction logic (reported ~75% accuracy improvement).",
      "Designed achievement/reward systems to motivate consistent movement.",
    ],
    links: [{ label: "Repo", href: "https://github.com/YOUR_GITHUB_HANDLE/fitness-rpg" }],
  },
  {
    title: "Chess Search Engine",
    description:
      "Desktop search engine for exploring chess games, openings, and outcomes across large datasets.",
    stack: ["C#", "SQL", "MySQL", "LINQ", ".NET"],
    highlights: [
      "Designed relational schema to store thousands of chess games and opening variations.",
      "Built a C# GUI for browsing games and visualizing query results.",
      "Implemented efficient LINQ queries for filtering by openings and strategies.",
      "Optimized query paths for performance on large datasets.",
    ],
    links: [{ label: "Repo", href: "https://github.com/YOUR_GITHUB_HANDLE/fitness-rpg" }]
  },
  {
    title: "Korean Teaching Application",
    description:
      "Interactive language-learning app that teaches Korean characters through drawing and game-based reinforcement.",
    stack: ["C++", "Qt", "Box2D", "MVC"],
    highlights: [
      "Built handwriting-based character input for learning Korean script.",
      "Designed a physics-driven mini-game to reinforce vocabulary learning.",
      "Used Box2D for real-time feedback and motion-based gameplay.",
      "Structured the app using MVC for maintainability.",
    ],
    links: [{ label: "Repo", href: "https://github.com/YOUR_GITHUB_HANDLE/fitness-rpg" }]
  },
  {
    title: "Agar.io Multiplayer Clone",
    description:
      "Multiplayer recreation of Agar.io with online play and core mechanics built from scratch.",
    stack: ["C#", ".NET MAUI", "ASP.NET MVC"],
    highlights: [
      "Implemented core gameplay mechanics including growth and collisions.",
      "Built server-side logic to support online multiplayer gameplay.",
      "Designed responsive UI and smooth visual effects.",
      "Applied OOP principles to manage game state and entities.",
    ],
    links: [{ label: "Repo", href: "https://github.com/YOUR_GITHUB_HANDLE/fitness-rpg" }]
  },
  {
    title: "Step-Tracking Mobile RPG",
    description:
      "Android RPG that converts real-world walking into experience points and character progression.",
    stack: ["Kotlin", "Android SDK", "Mobile Sensors"],
    highlights: [
      "Integrated step-counting sensors to drive in-game progression.",
      "Designed leveling and combat mechanics tied to real-world activity.",
      "Implemented persistent game state and progression tracking.",
      "Balanced gameplay loops to encourage consistent movement.",
    ],
    links: [{ label: "Repo", href: "https://github.com/YOUR_GITHUB_HANDLE/fitness-rpg" }]
  },
  {
    title: "Anime Tower Defense Game",
    description:
      "Java-based tower defense game featuring animated characters with unique abilities.",
    stack: ["Java", "GUI", "Animation", "OOP"],
    highlights: [
      "Implemented tower placement, targeting, and range-based combat.",
      "Designed unique character abilities and animations.",
      "Built enemy wave logic and difficulty progression.",
      "Structured systems using object-oriented design.",
    ],
    links: [{ label: "Repo", href: "https://github.com/YOUR_GITHUB_HANDLE/fitness-rpg" }]
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-zinc-700 shadow-sm dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-300">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
        {eyebrow.toUpperCase()}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-zinc-200/60 blur-3xl dark:bg-zinc-900/60" />
      </div>

      <header className="mx-auto w-full max-w-5xl px-6 pt-10">
        <nav className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-zinc-50 font-semibold dark:border-white/10 dark:bg-zinc-900">
              {PROFILE.name.slice(0, 1).toUpperCase()}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{PROFILE.name}</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                {PROFILE.role}
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-5 text-sm sm:flex">
            <a className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50" href="#projects">
              Projects
            </a>
            <a className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50" href="#about">
              About
            </a>
            <a className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50" href="#contact">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
              href={PROFILE.resume}
            >
              Resume
            </a>
            <a
              className="rounded-xl bg-zinc-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              href={`mailto:${PROFILE.email}`}
            >
              Email
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-10">
        {/* Hero */}
        <section className="mt-8 grid gap-8 md:grid-cols-5 md:items-center">
          <div className="md:col-span-3">
            <p className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for internships / new grad / contracts
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              I ship practical software —
              <span className="text-zinc-500 dark:text-zinc-400">
                {" "}
                systems, full-stack apps, and ML tooling.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {PROFILE.blurb}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>{PROFILE.location}</Pill>
              <Pill>Backend • APIs • DB</Pill>
              <Pill>ML • Data Pipelines</Pill>
              <Pill>Cloud • AWS</Pill>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                href="#projects"
              >
                View projects
              </a>
              <a
                className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-black/10 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900">
                  <Image
                    src="/headshot.jpg"
                    alt="Headshot"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{PROFILE.name}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {PROFILE.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/40">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    CURRENT FOCUS
                  </p>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                    Building scalable backends + polishing product UX.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/40">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    TOOLBOX
                  </p>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                    Django, Next.js, MySQL, AWS, Python, C/C#
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20">
          <SectionTitle
            eyebrow="Projects"
            title="Things I’ve built"
            subtitle="A few highlights. Each project focuses on real constraints: correctness, performance, and usability."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-950"
              >
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-20">
          <SectionTitle
            eyebrow="About"
            title="How I work"
            subtitle="I like building systems that are easy to reason about: clear interfaces, sane data models, and predictable failure modes."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Engineering mindset",
                body: "I design around constraints early: data integrity, latency, observability, and operational costs.",
              },
              {
                title: "Product-minded",
                body: "I care about UX details—fast feedback loops, readable UI states, and smooth “happy path” flows.",
              },
              {
                title: "Systems + ML",
                body: "I enjoy bridging ML and production: pipelines, evaluation, and practical deployment trade-offs.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950"
              >
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-20">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s talk"
            subtitle="Email is best. If you include a role + what you’re building, I’ll respond faster."
          />

          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              href={`mailto:${PROFILE.email}`}
            >
              {PROFILE.email}
            </a>
            <a
              className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <footer className="mt-10 border-t border-black/10 pt-6 text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js.
          </footer>
        </section>
      </main>
    </div>
  );
}
