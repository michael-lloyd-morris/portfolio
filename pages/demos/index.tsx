import Page from "@/components/Page";
import Link from "next/link";

export default function Home() {
  return (
    <Page title="Demos">
      <h1>Demos</h1>
      <section>
        <p>
          There are a large number of languages and skill sets in use for web
          application development both on the front and back end, and I have a
          working knowledge of a great many of them. This site is itself one
          such demonstration, and in this section we&apos;ll look at more
          particular ones.
        </p>
      </section>
      <ul>
        <li>
          <Link href="/demos/ag-grid">AgGrid Demonstration</Link>
        </li>
        <li>
          <Link href="/demos/login">NextAuth Login Demonstration</Link>
        </li>
        <li>
          <Link href="/demos/cucumber-next">Cucumber Testing with NextJS</Link>
        </li>
      </ul>
    </Page>
  );
}
