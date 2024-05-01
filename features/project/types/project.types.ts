export interface IProject {
  id: number;
  date: string;
  modified?: string;
  title: string;
  headline: string;
  stars: number;
  pinned: boolean;
  abstract?: string;
  language?: string;
  imageUrl?: string;
  license?: string;
  repoUrl?: string;
  demoUrl?: string;
  readme?: string;
  source?: ISource;
  workflow: TWorkflow;
  features?: IFeature[];
  stack?: ITech[];
  team?: IUser[];
}

interface ISource {
  author: string | IUser;
  url?: ILink;
}

type TWorkflow =
  | "draft"
  | "public"
  | "spec"
  | "prototype"
  | "challenge"
  | "mvp"
  | "beta"
  | "alpha"
  | "archives";

interface IFeature {
  name: string;
}

interface IUser {
  name: string;
}

interface ITech {
  category: TTechCategory;
  name: string;
}

type TTechCategory =
  | "Rendering"
  | "Hosting"
  | "Front-end"
  | "Back-end"
  | "Tooling"
  | "Design"
  | "Devops";

interface ILink {
  title: string;
  href: string;
}
