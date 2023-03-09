export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("de-DE", { timeZone: "GMT" });
};
