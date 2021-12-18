import { json, LoaderFunction, useLoaderData } from "remix";
import { LanguageData, languages } from "./languages";

export const loader: LoaderFunction = () => {
  return json(languages);
};

export default function Languages() {
  const data = useLoaderData<LanguageData[]>();

  return (
    <>
      <h1>Languages</h1>
      <ul>
        {data.map((lang) => (
          <li>{lang.name}</li>
        ))}
      </ul>
    </>
  );
}
