import { json, Link, LoaderFunction, useLoaderData } from "remix";
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
          <Link to={lang.slug} key={lang.name}>
            <li>{lang.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
