/* eslint-disable */
// The code examples in this page are giving the linter fits.
import Page from "@/components/Page"
import Link from "next/link"

export default function Home() {
  return (
    <Page title="Demos - Cucumber Testing in NextJS">
      <h1>Cucumber Testing in NextJS</h1>
      <section>
        <p>The online documentation of NextJS covers testing the framework with Jest, Cypress and Playwright, so I had to figure out how to get CucumberJS to play nice with it. This is what I&apos;ve found to work. You can run these tests on a local node machine by <a href="https://github.com/michael-lloyd-morris/portfolio">cloning the repository of this portfolio</a>.</p>
        <p>Since this is a portfolio, for the moment I just need to make sure all the pages render. A parse error in a shared component like the header nav can bring the whole site down, and each page also has a React component that can fail.  So our first feature is just get a page headcount</p>
        <pre><code>{`Feature: Pages

Scenario Outline: Pages Load
  When I navigate to the "<page>" 
  Then the page title should be "<title>"
`}
        </code></pre>
        <p>I created a features directory at the top level of the project and following Cucumber convention I put folders for the step definitions and support code in that directory.</p>
        <p>Next, I installed Cucumber and TS Node for Typescript support.</p>
        <p><code>npm install --save-dev @cucumber/cucumber ts-node</code></p>
        <p>And now for some typescript compiler directives - these changes are made to the tsconfig.json file at the root:</p>
        <ul>
          <li>target:  Change from "es5" to "ESNext"</li>
          <li>module:  Change from "esnext" to "CommonJS". Cucumber can&apos;t work with ESM modules unless the package is set to module in the package.json file, and NextJS won&apos;t work if this is done.</li>
          <li>strictPropertyInitialization: Add this property and set it to false. Cucumber needs uninitilized classes passed as arguments.</li>
        </ul>
        <p>Now in the package.json file I added cucumber-js as the test script.</p>
        <pre>{`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "cucumber-js"
}
`}
        </pre>
        <p>Next I added the cucumber.js config file at the site root</p>
        <pre>{`module.exports = {
  default: { 
    requireModule: ['ts-node/register'], 
    require: ['features/steps/**/*.ts'],
    publishQuiet: true,
    exit: true
  }
}`}
        </pre>
        <p>At this point Cucumber was running, but no steps had been written. From this point the process followed is not unlike any other Cucumber installation.  You can review the commit that includes the first completed group of tests <a href="https://github.com/michael-lloyd-morris/portfolio/commit/43359f645605c67e70bec314b8efa64cab866169">here</a>. Playwright is used as the browser driver, and Chai is used for the assertions.</p>
      </section>
    </Page>
  )
}