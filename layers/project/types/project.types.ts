export type Project = {
    id: number;
    date: string;
    name: string;
    description: string;
    stars: number;
    pinned: boolean;
    workflow: Workflow;
    stack: string[];
};

// export enum Workflow {
//     Draft = 'draft',
//     Public = 'public',
//     Spec = 'spec',
//     Prototype = 'prototype',
//     Challenge = 'challenge',
//     MVP = 'mvp',
//     Beta = 'beta',
//     Alpha = 'alpha',
//     Archives = 'archives',
// }

export type Workflow = 'draft' | 'public' | 'spec' | 'prototype' | 'challenge' | 'mvp' | 'beta' | 'alpha' | 'archives'

export type ProjectSummary = Omit<Project, 'date' | 'pinned'>;

export type Option = {
    label: string,
    value: string,
    nb: number
  }
  
export type SortOption = {
    label: "Date" | "Popularity" | "Name",
    value: "date" | "stars" | "name",
    order: "asc" | "desc"
}