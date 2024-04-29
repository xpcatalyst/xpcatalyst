import data from "../../public/data.json";

export default defineEventHandler((event) => {
  return {
    data,
  };
});
