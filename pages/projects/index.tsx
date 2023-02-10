import Page from "@/components/Page";
import Link from "next/link";

export default function Home() {
  return (
    <Page title="Projects">
      <h1>Projects</h1>
      <section>
        <p>The open source software model lies at the foundation of most of the web. I have contributed to a few of these projects over the years and have learned much for the effort.</p>
      </section>
      <ul>
        <li><Link href="/projects/drupal/">Runtime Assertions in Drupal</Link></li>
        <li><Link href="/projects/cucumber/">Cucumber JS</Link></li>
      </ul>
    </Page>
  )
}
