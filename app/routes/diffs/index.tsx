import { LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const lang1 = url.searchParams.get("lang1");
  const lang2 = url.searchParams.get("lang2");

  return {
    lang1: lang1,
    lang2: lang2,
  };
};
export default function Diffs() {
  const data = useLoaderData();

  return (
    <div>
      Find diffs {data.lang1} {data.lang2}
    </div>
  );
}
