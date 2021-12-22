export type LanguageData = {
  name: string;
  slug: string;
};

export const languages: LanguageData[] = [
  {
    name: "C#",
    slug: "csharp",
  },
  {
    name: "JavaScript",
    slug: "javascript",
  },
];

export const getLanguageBySlug = (slug: string) => {
  return languages.find((x) => x.slug === slug);
};
