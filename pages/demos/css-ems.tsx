import Page from "@/components/Page"
import Link from "next/link"

export default function Home() {
  return (
    <Page title="Demos - CSS Responsiveness with EMS">
      <h1>Demos</h1>
      <section>
      <p>This site uses custom CSS rather than a major framework. This is to give a clearer demonstration of my skills with CSS. I am using SASS as a preprocessor</p>
      <p>The site is laid out entirely with the em and rem units. By doing this the entire page can be resized based on the viewport with. This is done using the html tag&apos;s font-size</p>
      <pre>
{`html {
  font-size: 1vw;
}`}
      </pre>
      <p>This results in a 1rem = 10px when the viewport is 1000px wide. Now, no one wants to strain their eyes on 10px text so the body is immediately adjusted back to insure the base font-size is a comfortable 16px.</p>
      <pre>
{`body {
  font-size: 1.6em;
}
`}
      </pre>
      <p>As the page width descends beneath 1000px the vw is redeclared every 100px, making sure that the font size never drops beneath 16px. The final measurements can be reviewed <a href="https://github.com/michael-lloyd-morris/portfolio/blob/main/styles/core.scss">here</a>.</p>
      <p>This approach admittedly leads to some very large text on a large UHD monitor like the one I own, but my eyesight isn&apos;t what it used to be and I like being able to make the text larger merely by making the window for the app larger.</p>
      </section>
    </Page>
  )
}