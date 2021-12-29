import { LoaderFunction, useLoaderData } from "remix";

type LanguageOption = {
  name: string;
  value: string;
};
type DiffsType = {
  lang1: string;
  lang2: string;
  availableLanguages: LanguageOption[];
};
export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const lang1 = url.searchParams.get("lang1");
  const lang2 = url.searchParams.get("lang2");

  const availableLanguages = [
    {
      name: "C#",
      value: "csharp",
    },
    {
      name: "JavaScript",
      value: "javascript",
    },
  ];
  return {
    lang1: lang1,
    lang2: lang2,
    availableLanguages,
  };
};
export default function Diffs() {
  const data = useLoaderData<DiffsType>();

  return (
    <div>
      <h1>Find diffs</h1>
      {/* Currently Selected: {data.lang1} {data.lang2} */}
      <form method="get" action="/diffs">
        <div className="flex flex-wrap -mx-8">
          <div className="w-full md:w-1/2 py-4 px-8 mb-4 md:mb-0">
            <label htmlFor="lang1" className="block font-bold">
              Language 1
            </label>
            <select name="lang1" id="lang1">
              {data.availableLanguages.map((lang) => (
                <option value={lang.value}>{lang.name}</option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2 py-4 px-8 mb-4 md:mb-0">
            <label htmlFor="lang2" className="block font-bold">
              Language 2
            </label>
            <select name="lang2">
              {data.availableLanguages.map((lang) => (
                <option value={lang.value}>{lang.name}</option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
