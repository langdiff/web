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
      <div className="bg-gray-100 pt-8 lg:pt-20 pb-8">
        <main className="container mx-auto px-4 ">{children}</main>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
