export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "g-share",
    title: "G-Share — Community Grocery-Sharing Platform",
    featured: true,
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
      { label: "Repo", href: "https://github.com/YOUR_GITHUB_HANDLE/g-share" },
    ],
  },
  {
    slug: "android-malware-detection",
    title: "Android Malware Detection — ML Pipeline",
    featured: true,
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
    slug: "contract-generation-system",
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
    slug: "startup-visualization-dashboard",
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
    slug: "learning-management-system",
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
    slug: "android-fitness-rpg",
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
    slug: "chess-search-engine",
    title: "Chess Search Engine",
    featured: true,
    description:
      "Desktop search engine for exploring chess games, openings, and outcomes across large datasets.",
    stack: ["C#", "SQL", "MySQL", "LINQ", ".NET"],
    highlights: [
      "Designed relational schema to store thousands of chess games and opening variations.",
      "Built a C# GUI for browsing games and visualizing results.",
      "Implemented efficient LINQ queries for filtering by openings and strategies.",
      "Optimized query paths for performance on large datasets.",
    ],
    links: [], // add repo/demo when you have it
  },
  {
    slug: "korean-teaching-app",
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
    links: [],
  },
  {
    slug: "agar-io-clone",
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
    links: [],
  },
  {
    slug: "step-tracking-mobile-rpg",
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
    links: [],
  },
  {
    slug: "anime-tower-defense",
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
    links: [],
  },
];