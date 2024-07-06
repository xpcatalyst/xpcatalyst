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

type Workflow = 'draft' | 'public' | 'spec' | 'prototype' | 'challenge' | 'mvp' | 'beta' | 'alpha' | 'archives'

export type ProjectSummary = Omit<Project, 'date' | 'pinned'>;