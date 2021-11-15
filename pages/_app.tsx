//import "tailwindcss/tailwind.css";
import "../styles/globals.css"; // alternative way to import tailwind
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
