import { Link } from "remix";
import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="remix-app__header">
        <Nav />
      </header>
      {/* Main content */}
      <div className="bg-gray-50 pt-12 lg:pt-20 pb-20">
        <main className="container mx-auto px-4">{children}</main>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
