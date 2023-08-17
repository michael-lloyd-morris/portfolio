import { ReactNode } from "react";
import MainNav from "@/components/MainNav";
interface Props {
  children?: ReactNode;
  title?: string;
}

export default function Page({ children }: Props) {
  return (
    <>
      <MainNav />
      <div className="main-wrap">
        <main>{children}</main>
        <footer className="main">
          <p>&copy; {new Date().getFullYear()} Michael Lloyd Morris</p>
          <p>Hosted by Vercel.</p>
        </footer>
      </div>
    </>
  );
}
