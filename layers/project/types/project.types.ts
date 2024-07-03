export type Project = {
    id: number;
    date: string;
    name: string;
    description: string;
    stars: number;
    pinned: boolean;
    workflow: string;
    stack: string[];
};

export type ProjectSummary = Omit<Project, 'date' | 'pinned'>;