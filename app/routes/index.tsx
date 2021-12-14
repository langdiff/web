import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  return json({});
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "LangDiff.com | Show the diff between languages!",
    description: "Show the diff between languages!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();
  let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam culpa
          obcaecati, eius, harum ea dolorum deleniti blanditiis debitis
          praesentium cupiditate facere distinctio ad natus asperiores velit,
          assumenda minima eaque modi?`;
  const renderLorem = (num: number) => {
    for (let index = 0; index < num; index++) {
      return <p>{lorem}</p>;
    }
  };

  return (
    <div className="">
      <main>
        <h1>Welcome to Remix!</h1>
        <p>We're stoked that you're here. 🥳</p>
        <p>
          Feel free to take a look around the code to see how Remix does things,
          it might be a bit different than what you’re used to. When you're
          ready to dive deeper, we've got plenty of resources to get you
          up-and-running quickly.
        </p>
        <p>
          Check out all the demos in this starter, and then just delete the{" "}
          <code>app/routes/demos</code> and <code>app/styles/demos</code>{" "}
          folders when you're ready to turn this into your next project.
        </p>
        {renderLorem(10)}
      </main>
    </div>
  );
}
