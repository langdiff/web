import { LoaderFunction, useLoaderData } from "remix";
import { getLanguageBySlug, LanguageData } from "./languages";

export const loader: LoaderFunction = async ({ params }) => {
  const language = getLanguageBySlug(params.slug!);

  return language;
};

export default function LanguageSlug() {
  const language = useLoaderData<LanguageData>();
  return (
    <div>
      <h1>{language.name}</h1>
    </div>
  );
}
