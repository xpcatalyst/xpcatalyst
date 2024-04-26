interface Project {
  id: number;
  date: Date;
  modified?: Date;
  title: string;
  headline: string;
  stars: number;
  pinned: boolean;
  abstract?: string;
  language?: string;
  imageUrl?: string;
  licence?: string;
  repoUrl?: string;
  demoUrl?: string;
  readme?: string;
  source?: Source;
  workflow: Workflow;
  features?: Feature[];
  stack?: Tech[];
  team?: User[];
}

interface Source {
  author: string | User;
  url?: Link;
}

type Workflow =
  | "draft"
  | "public"
  | "spec"
  | "prototype"
  | "challenge"
  | "mvp"
  | "beta"
  | "alpha"
  | "archives";

interface Feature {
  name: string;
}

interface User {
  name: string;
}

interface Tech {
  category: TechCategory;
  name: string;
}

type TechCategory =
  | "Rendering"
  | "Hosting"
  | "Front-end"
  | "Back-end"
  | "Tooling"
  | "Design"
  | "Devops"
  | "Tooling";

interface Link {
  title: string;
  href: string;
}
