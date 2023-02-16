import Page from "@/components/Page"
import Link from "next/link"

export default function Home() {
  return (
    <Page>
      <h1>Hello World</h1>
      <section>
        <p>My adventures in computer programming began Christmas 1983 when my parents bought me a <a href="https://en.wikipedia.org/wiki/VIC-20">Commodore VIC-20</a>. I started programming professionally in 2004 and have been contributed to multiple open source projects. I am proficient in the major frontend web technologies and this website is designed as a demonstration of this knowledge. It is built on <a href="https://nextjs.org/">Next.js</a> using <a href="https://www.typescriptlang.org/">Typescript</a> and hosted by <a href="https://vercel.com">Vercel</a>. The source code of this page is in <a href="https://github.com/michael-lloyd-morris/portfolio">this repository</a>. My resume is <Link href="/resume.pdf">here</Link>.</p>
        <p>I am currently looking for work on a remote basis. I cannot relocate because I am caring for my elderly parents.</p>
      </section>
      <section>
        <h2>Primary Technologies</h2>
        <p>While I&apos;m familiar with a wide variety of languages, frameworks, platforms and applications (including many no longer in use), these are the ones I enjoy using the most in order of preference:</p>
        <h3>JavaScript</h3>
        <ul className="tech">
          <li className="logo nodejs"><strong>NodeJS</strong> allows JavaScript to be executed on the server-side. This allows code to be shared between the client and server where this makes sense.</li>      
          <li className="logo typescript"><strong>Typescript</strong> addresses nearly everything there is to dislike about JavaScript, stabilizing the language with type checking and adding structures to coordinate code such as interfaces. After using it for a few years it&apos;s hard to go back to vanilla, but fortunately bit by bit Javascript is picking up features of Typescript and making them core.</li>
          <li><strong>TS-Node</strong> is a shim that allows Typescript to be run on NodeJS in JIT fashion.</li>
          <li className="logo npm"><strong>NPM</strong> is my favorite package manager. Beyond the checkout process, I&apos;m familiar with the publishing process to company specific repositories.</li>
          <li><strong>Semantic Release</strong> is a CI plugin that coordinates semantic versioning numbers with the git repository of a project and used when a project is published as a node repository internally or to the greater JavaScript ecosystem.</li>
          <li className="logo cucumber"><strong>Cucumber</strong> is the leading test automation tool for implementing the Behavior Driven Design (BDD) approach to coding. I have professional experiene with the PHP, Java and JavaScript implementations. The automated tests for this page are written with Cucumber.</li>
          <li className="logo nextjs"><strong>NextJS</strong> is my most recent framework, having chosen it to back this portfolio. It&apos;s been a delightful experience so far and I definitely want to do more work with it soon.</li>
          <li className="logo react"><strong>React</strong> is one of the leading JavaScript frameworks and of the current ones it&apos;s the one I&apos;ve spent the most time with in recent years, either directly or converting websites into using it.</li>
          <li><strong>React Spectrum</strong> is a component library for React published by Adobe which provides strong internationalization and accessibility compliance out of the box.</li>
          <li className="logo webpack"><strong>Webpack</strong> is one of the more popular bundling libraries out there, though its position is threatened by frameworks which can bundle and do more beyond that like Next.js, and by import-maps which are implemented by Single-Spa for all browsers and will be a native standard once Apple stops dragging their feet (Safari is the last browswer not to support them).</li>
          <li className="logo single-spa"><strong>Single Spa</strong> is a meta framework that allows an application to be divided into discrete chunks. This can be used to manage a migration, or on a very large site it can be used to provide multiple paths to production so that each page or other section of a large web app can be assigned to a different programmer or even team. React, Vue, Angular, whatever can be used with it within the individual sections.</li>
          <li><strong>SystemJS</strong> implements the import maps proposal in software and will continue to see use for the next few years until the standard has widespread native support in browsers (Apple/webkit is the last holdout).</li>
          <li className="logo ag-grid"><strong>AgGrid</strong> is the premier grid library on the web, capable of dealing with truly massive datasets. I&apos;ve used it to build a report builder complete with color context forumlae fields similar to Excel. Ag-Grid can group columns and rows on the fly and build charts based on selected data within the charts and summaries.</li>
          <li><strong>Chart JS</strong> is a graphing library I have experience with and is one of the more widespread.</li>
          <li><strong>jQuery</strong> is a library I used for many years but it&apos;s since been eclipsed by React, Vue, Angular and others.</li>
          <li><strong>PrototypeJS</strong> was the first widespread JavaScript framework that fell out of use because of an architectural flaw - it modifies the object prototypes of JavaScript, something that should only be done with polyfills. Many of its features have since been ported into native JavaScript.</li>
          <li><strong>Husky</strong> is a node tool to apply git hooks to a project. This project uses it to ensure `npm run lint` and `npm test` are run before a git commit is done to keep the code clean and executable at all times.</li>
          <li><strong>ESLint</strong> is the linting tool of choice for me and the one I turn to unless the framework already has one (NextJS has its own linter).</li>
        </ul>
        <h3>PHP</h3>
        <ul className="tech">
          <li className="logo drupal">Drupal is one of the leading content management systems in existence. I&apos;ve not had occassion to work with it as much as I&apos;d like, but I have delved deeply into its inner workings and have a major contributor credit on the project.</li>
          <li className="logo composer"><strong>Composer</strong> is the package manager of choice in the PHP world, rapidly overtaking and displacing PECL as composer libraries can be installed per website instead of server-wide as is the case with and limitation of PECL. I do know how to use PECL, but it&apos;s been a very long while.</li>
          <li><strong>Symfony</strong> is the framework Drupal has been on since 8, and is also the spine of Laravel.</li>
        </ul>
      </section>
      <section>
        <h2>Support Technology</h2>
        <p>The following pieces of technology are used in support of the above.</p>
        <h3>Client-side Rendering</h3>
        <ul className="tech">
          <li className="logo html"><strong>HTML</strong> is a living standard of the web, meaning version numbers are no longer used - 5 was the last one. I&apos;m very familiar with the core of it and the semantic tags. I&apos;ve worked with canvas, video and audio tags as well. If I&apos;m in doubt a feature can be used I take a trip over to <a href="caniuse.com">caniuse.com</a> and search for the feature.</li>
          <li className="logo css"><strong>CSS</strong> is also living standard. I first worked with it when it was introduced back in 1996 with Internet Explorer 3. CSS-3 is the current minimum level most applications on the web require, but the @support media query now allows for newer features to easily fall back to older alternatives.</li>
          <li className="logo sass"><strong>Sass</strong> is a precompiler for CSS making it much less painful to work with. I&apos;m also familiar with its only major alternative - LESS.</li>
        </ul>
        <h3>Continuous Integration</h3>
        <ul className="tech">
          <li className="logo git">Pretty much a given skill for programmers of any stripe, not knowing git is fairly rare. I prefer to use git from the command line since it will always be present in that form, and having taken the time to learn it to that degree I find GUI based git managers like sourcetree just get in the way for me.</li>
          <li className="logo gitlab">I have more experience doing Continuous Integration deployments from gitlab than any other platform. I am playing with GitHub and Vercel&apos;s platform now, and have worked with Jenkins, CircleCI, and TravisCI in the past.</li>
        </ul>
        <h3>SQL</h3> 
        <ul className="tech">
          <li className="logo mysql">MySQL, and its spinoff MariaDB were critical to my early programming days. It&apos;s been a few years since I&apos;ve done any heavy database lifting directly, but the concepts of relational databases, normalization and query optimization are still rattling around in my head.</li>
          <li><strong>Postgres</strong> isn&apos;t too different from MySQL, and I have a year&apos;s experience with it.</li>
        </ul>
        <h3>Other Tools</h3>
          <ul className="tech">
            <li className="logo visualstudio">I&apos;ve used a lot of code editors over the years. I can use vi if needed, though it&apos;s rare not to at least have vim available. Visual Studio is my favorite of a wide field, and I&apos;ve learned to leverage maybe a quarter of what it can do that is relevant to what I do. It&apos;s just that powerful, and not a day goes by that I don&apos;t pick up another trick or two with it.</li>
            <li><strong>Photoshop</strong> is a tool I play with more than use seriously, but I&apos; comfortable enough with it to build graphic assets when needed, or make minor adjustments to them.</li>
        </ul>
      </section>
    </Page>
  )
}
