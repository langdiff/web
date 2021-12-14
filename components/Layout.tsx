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
      <div className="bg-gray-100 pt-8 pb-8">
        <main className="container max-w-7xl px-4 mx-auto prose">
          {children}
        </main>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
