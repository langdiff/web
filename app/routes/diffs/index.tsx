import { Form, LoaderFunction, useLoaderData, useSubmit } from "remix";

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
  console.log(JSON.stringify(data));
  const submit = useSubmit();

  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    submit(event.currentTarget, { replace: true });
  }

  return (
    <div>
      <h1>Find diffs</h1>
      Currently Selected: {data.lang1} {data.lang2}
      <Form method="get" action="/diffs" onChange={handleChange}>
        <div className="flex flex-wrap -mx-8">
          <div className="w-full md:w-1/2 py-4 px-8 mb-4 md:mb-0">
            <label htmlFor="lang1" className="block font-bold">
              Language 1
            </label>
            <select name="lang1" id="lang1">
              <option value="" disabled selected>
                Select a language...
              </option>
              {data.availableLanguages.map((lang) => (
                <option
                  value={lang.value}
                  selected={lang.value === data.lang1}
                  key={lang.value}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2 py-4 px-8 mb-4 md:mb-0">
            <label htmlFor="lang2" className="block font-bold">
              Language 2
            </label>
            <select name="lang2">
              <option value="" disabled selected>
                Select a language...
              </option>
              {data.availableLanguages.map((lang) => (
                <option
                  value={lang.value}
                  selected={lang.value === data.lang2}
                  key={lang.value}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Form>
      <code>results for lang 1 and lang 2 will show up here..</code>
    </div>
  );
}
