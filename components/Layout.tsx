import { Link } from "remix";
import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <Nav />
      </header>
      {/* Main content */}
      <div className="pt-8 pb-8">
        <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 prose">
          {children}
        </main>
      </div>
      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}
