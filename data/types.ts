export type Project = {
    id: number;
    date: string;
    title: string;
    description: string;
    stars: number;
    pinned: boolean;
    workflow: string;
    stack: string[];
};