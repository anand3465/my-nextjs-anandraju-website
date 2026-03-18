import "./globals.css";

export const metadata = {
  title: "Anand Palukuri",
  description: "Full-Stack Developer • Systems & ML",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
        <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="/" className="font-semibold">
              Anand Palukuri
            </a>
            <div className="flex gap-6 text-sm">
              <a href="/projects">Projects</a>
              <a href="/experience">Experience</a>
              <a href="/about">About</a>
              <a href="/Anand_Raju_Palukuri_Resume.pdf" target="_blank">Resume</a>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {children}
        </main>

        <footer className="mt-24 border-t border-black/10 py-8 text-sm dark:border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p className="text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} Anand Palukuri
            </p>

            <div className="flex gap-6">
              <a
                href="mailto:anandraju.palukuri@gmail.com"
                className="font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                Email
              </a>

              <a
                href="https://github.com/anand3465"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/anand-palukuri-208992255/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
