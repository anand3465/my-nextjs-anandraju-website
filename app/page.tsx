import Image from "next/image";

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-3xl border border-white/10">
        <Image
          src="/headshot.jpg"
          alt="Anand Palukuri"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text — RIGHT */}
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          Hi, I’m Anand 👋
        </h1>

        <p className="max-w-2xl leading-7 text-zinc-400">
          I’m Anand Palukuri, a systems-minded software engineer who enjoys building
          software that behaves predictably in the real world. I’ve spent much of my
          time working on systems where correctness matters more than convenience—
          coordinating state across components, handling repeated or partial failures,
          and designing workflows that continue to work under real usage.
        </p>

        <p className="max-w-2xl leading-7 text-zinc-400">
          I’m especially drawn to problems that require thinking through long-term
          architecture trade-offs, debugging subtle issues, and tightening up
          performance until the system feels solid.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <strong>G-Share</strong> — community grocery-sharing platform  
          </li>
          <li>
            <strong>Chess Search Engine</strong> — SQL + C# data-driven engine
          </li>
          <li>
            <strong>Android Malware Detection</strong> — ML pipeline
          </li>
        </ul>

        <a
          href="/projects"
          className="mt-6 inline-block rounded-xl bg-zinc-900 px-5 py-3 text-white dark:bg-white dark:text-black"
        >
          View all projects →
        </a>
      </div>
    </section>
  );
}