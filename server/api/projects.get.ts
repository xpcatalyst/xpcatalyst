import projects from "@/data/projects.data.json";

export default defineEventHandler(() => {
  return { data: projects };
});
