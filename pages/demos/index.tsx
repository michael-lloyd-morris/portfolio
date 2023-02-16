import Page from "@/components/Page"
import Link from "next/link"

export default function Home() {
  return (
    <Page title="Demos">
      <h1>Demos</h1>
      <section>
      <p>There are a large number of languages and skillsets in use for web application development both on the front and back end, and I have a working knowledge of a great many of them. This site is itself one such demonstration, and in this section we&apos;ll look at more particular ones.</p>
      </section>
      <ul>
        <li><Link href="/demos/ag-grid">AgGrid Demonstration</Link></li>
        <li><Link href="/demos/css-ems">CSS Responsiveness with EMs</Link></li>
      </ul>
    </Page>
  )
}
