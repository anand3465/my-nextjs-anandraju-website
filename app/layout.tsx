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
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
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

        <main className="mx-auto max-w-5xl px-6 py-16">
          {children}
        </main>

        <footer className="border-t border-black/10 py-8 text-center text-sm text-zinc-500 dark:border-white/10">
          © {new Date().getFullYear()} Anand Palukuri
        </footer>
      </body>
    </html>
  );
}
