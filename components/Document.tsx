import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "remix";

type DocumentProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Document({ children, title }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        {title ? <title>{title}</title> : null}
        <Links />
      </head>
      <body className="antialiased min-h-screen bg-current">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
