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
        <h2>Favorite Tech</h2>
        <p>While I&apos;m familiar with a wide variety of languages, frameworks, platforms and applications (including many no longer in use), these are the ones I enjoy using the most and which I feel are the most marketable. In alphabetical order:</p>
        <ul className="tech">
          <li className="ag-grid">AgGrid is the premier grid library on the web, capable of dealing with truly massive datasets. I&apos;ve used it to build a report builder complete with color context forumlae fields similar to Excel. Ag-Grid can group columns and rows on the fly and build charts based on selected data within the charts and summaries.</li>
          <li className="composer">Inspired by NPM, Composer is the package manager of choice in the PHP world, rapidly overtaking and displacing PECL as composer libraries can be installed per website instead of server-wide as is the case with and limitation of PECL. I do know how to use PECL, but it&apos;s been a very long while.</li>
          <li className="css">CSS is a living standard of the web. I first worked with it when it was introduced back in 1996 with Internet Explorer 3. CSS-3 is the current minimum level most applications on the web require, but the @support media query now allows for newer features to easily fall back to older alternatives.</li>
          <li className="cucumber">Cucumber is the leading test automation tool for implementing the Behavior Driven Design (BDD) approach to coding. I have professional experiene with the PHP, Java and JavaScript implementations.</li>
          <li className="drupal">Drupal is one of the leading content management systems in existence. I&apos;ve not had occassion to work with it as much as I&apos;d like, but I have delved deeply into its inner workings and have a major contributor credit on the project.</li>
          <li className="git">Pretty much a given skill for programmers of any stripe, not knowing git is fairly rare. I prefer to use git from the command line since it will always be present in that form, and having taken the time to learn it to that degree I find GUI based git managers like sourcetree just get in the way for me.</li>
          <li className="gitlab">I have more experience doing Continuous Integration deployments from gitlab than any other platform. I am playing with GitHub and Vercel&apos;s platform now, and have worked with Jenkins, CircleCI, and TravisCI in the past.</li>
          <li className="html">Not XHTML. I&apos;m actually keenly aware of the differences between the two and the fact that most people who think they are using XHTML are actually using HTML without realizing it. Like CSS, HTML is a living standard that is constantly moving and with the passing of IE from most company&apos;s support radars it promises to quicken in pace.</li>
          <li className="javascript">JavaScript has come a long way from Netscape Navigator 2, which is the first time I played with it. It&apos;s a very odd language with a familiar veneer, but I&apos;ve come to enjoy most of its eccentricities (or tame them with Typescript). I still remember the protoype.js framework and jQuery, both of which built the bridge from those early beginnings to what we have today.</li>
          <li className="mysql">MySQL, and its spinoff MariaDB were critical to my early programming days. It&apos;s been a few years since I&apos;ve done any heavy database lifting directly, but the concepts of relational databases, normalization and query optimization are still rattling around in my head.</li>
          <li className="nextjs">Next is my most recent framework, having chosen it to back this portfolio. It&apos;s been a delightful experience so far and I definitely want to do more work with it soon.</li>
          <li className="nodejs">Node has passed PHP as my favorite server-side platform. I enjoy not having to switch language mindsets during a project. Writing code that can execute server or clientside is also a joy with a framework that can work out the wrinkles like NextJS. I&apos;ve also worked with Node libraries such as the MySQL driver and the Express.js server, the latter in support of Cucumber testing.</li>
          <li className="npm">Used hand in hand with Node, NPM is my favorite package manager. Beyond the checkout process, I&apos;m familiar with the publishing process to company specific repositories.</li>
          <li className="php">PHP will always have a special place in my heart as it drew me back into programming after having left it for theater in college. The first version of it I worked with consistently was 4.3, and while it&apos;s been a few years since I&apos;ve worked with it I still lurk the dev lists.</li>
          <li className="react">React is one of the leading JavaScript frameworks and of the current ones it&apos;s the one I&apos;ve spent the most time with in recent years, either directly or converting websites into using it.</li>
          <li className="sass">Sass is a precompiler for CSS making it much less painful to work with. I&apos;m also familiar with its only major alternative - LESS.</li>
          <li className="single-spa">Along with SystemJS, Single-Spa is a micro-frontend architecture tool. It can be used with Reach, Angular, Vue or any other framework. It allows modules and components to be &quot;lazy loaded&quot;, which is useful for keeping large applications performant. It really shines with when used to migrate legacy apps into smaller more manageable chunks, each with their own production paths, that can be converted to newer libraries one at a time.</li>
          <li className="typescript">Typescript addresses nearly everything there is to dislike about JavaScript, stabilizing the language with type checking and adding structures to coordinate code such as interfaces. After using it for a few years it&apos;s hard to go back to vanilla, but fortunately bit by bit Javascript is picking up features of Typescript and making them core.</li>
          <li className="visualstudio">I&apos;ve used a lot of code editors over the years. I can use vi if needed, though it&apos;s rare not to at least have vim available. Visual Studio is my favorite of a wide field, and I&apos;ve learned to leverage maybe a quarter of what it can do that is relevant to what I do. It&apos;s just that powerful, and not a day goes by that I don&apos;t pick up another trick or two with it.</li>
          <li className="webpack">One of the more popular bundling libraries out there, webpack has been a crucial tool in the JavaScript space and will remain so for awhile longer, though its position is threatened by frameworks which can bundle and do more beyond that like Next.js, and by import-maps which are implemented by Single-Spa for all browsers and will be a native standard once Apple stops dragging their feet (Safari is the last browswer not to support them).</li>
        </ul>
      </section>
    </Page>
  )
}
