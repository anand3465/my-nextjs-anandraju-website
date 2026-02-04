export default function Home() {
  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-4xl font-semibold">
          Hi, I’m Anand 👋
        </h1>
        <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          I build scalable backends, interactive applications, and data-driven systems.
          I’m especially interested in systems, ML pipelines, and product-ready engineering.
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