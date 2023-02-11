import Page from "@/components/Page"
import Image from "next/image"

export default function Home() {
  return (
    <Page title="Projects - Cucumber">
      <h1>Cucumber JS</h1>
      <section>
      <Image src={"/img/logos/cucumber.svg"} className="topicLogo" alt="Cucumber Logo"/>
        <p>As web applications have grown in size and complexity the task of thoroughly testing them has grown more difficult. For this task I turn to the various dialects of Cucumber using the Behavior Driven Development approach to software. While I have used Cucumber on PHP and Java, it is only on JavaScript that have contributed back. So far my commits have been to improve documentation - but I am currently working on two issue tickets involving the behavior of the test code. When those issues are commited into the core I&apos;ll provide more details here.</p>
      </section>
    </Page>
  )
}
