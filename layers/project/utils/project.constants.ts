import { type SortOption } from "../types/project.types.js"

export const MESSAGE = {
    NO_PROJECTS: "No products found, please try again",
    SEARCH_PLACEHOLDER: "Search projects..."
};

export const SORT_OPTIONS: SortOption[] = [
    { value: 'date', label:"Date", order: "asc" },
    { value: 'date', label:"Date", order: "desc" },
    { value: 'stars', label:"Popularity", order: "asc" },
    { value: 'stars', label:"Popularity", order: "desc" },
    { value: 'name', label:"Name", order: "asc" },
    { value: 'name', label:"Name", order: "desc" },
]