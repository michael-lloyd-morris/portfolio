import Page from "@/components/Page";
import Link from "next/link";

export default function Home() {
  return (
    <Page title="Experience">
      <h1>Experience</h1>
      <section>
        <p>Since 2004 I have worked professionally in web development, but have dabbled with it even longer beginning with when I arrived at college at the University of Kentucky in 1995. This listing goes all the way to the beginning and is more detailed than the brief account in my résumé</p>
      </section>
      <article>
        <h2>Rural Sourcing (RSI)</h2>
        <sub>January 2018 - January 2023</sub>
        <p>A consulting agency, so during my five years with the company my services were sold to other companies, clients of RSI. The clients I worked with are as follows:</p>
        <section>
          <h3>Fleetcor</h3>
          <sub>August 2020 - December 2022</sub>
          <p>Fleetcor is one of the larger FinTech companies worldwide, focusing primarily on fuel payment cards and related services. Over the years they&apos;ve aquired multiple smaller companies, each with their own web applications and services. I was brought on as a front end developer for a project to unite these disparate applications into one. The version I was brought in to work on was being built using Hugo with vanilla JavaScript. During the interview process I asked for the reasoning behind using no major framework and was told they were pointless overhead.</p>
          <p>The first task I was put to was a registration page. A full end to end test took 10 minutes to do if you had the passwords to either the dev or production database to setup the test - and as a frontend developer I had no database access. So I wrote a small testing suite for my code which used Express.js to provide the possible responses from the backend from a JSON file. Management took one look at the testing system and asked for it to be expanded to the rest of the application which, up until that point, had been worked on without any automated tests.</p>
          <p>By the time of my release I had accomplished the following:</p>
          <ul>
            <li>Introduced the entire production staff from Product owners down to Behavior Driven Development, altering the workflow of the entire company to create more accurate and meaningful estimates of development time based on a count of the scenarios and their steps rather than pure speculation.</li>
            <li>Built the functional test layer of the application based on Cucumber-JS and using Puppeteer as browser driver.</li>
            <li>Built a mocking engine in Express.js that could accurately simulate the responses of the REST API provided by the backend team in MuleSoft. Prior to this engine being introduced the front end teams (around 20 people) suffered multiple work stoppages when the dev REST API went down - which at worst was a weekly occurence, usually when they tried to deploy something the first time.</li>
            <li>Served as Interim lead application designer for two months. I later learned Fleetcor had considered hiring me directly to fill the post, but the buyout requested by RSI under the anti-poaching clause of the contract was too high for them.</li>
            <li>Implemented a decision to move the application away from a framework-less approach built on the Hugo static site generator to a React site. The new designer chose to use a micro-frontend architecture using the Single Spa framework, but left the details to me, so the following was done:
              <ul>
                <li>Micro-frontends where to be built in Typescript. I had to lead multiple retraining classes in support of this.</li>
                <li>Each page of the site was to be moved to its own repository with its own production pipeline. I wrote all of the supporting CI sripts in GitLab for this and created all project templates to be used.</li>
              </ul>
            </li>
          </ul>
          In December Fleetcor chose to cut all contractor positions in preparation for the coming recession so I was released.
        </section>
        <section>
          <h3>McKenney&apos;s Inc.</h3>
          <sub>February 2020 - March 2022</sub>
          <p>McKenney&apos;s provides HVAC and smart building optimation services for some of the largest strutures in the Atlanta area. Some of these strutures have in excess of 90,000 data points reporting every 15 minutes. They have a brilliant engineer on staff to gather and collate this information, and I was tasked to build a front end for him to make the information he&apos;d gathered more accessible. This engagement was for six weeks.</p>
          <p>The backend already in place was in MVC Razor. I learned how to get some templates and with a little guidance did what little C# code I needed to support the pages he needed. We chose to go with a combination of AgGrid to write the reports, and CodeMirror to allow his team to write in their own report formulae into the application in Excel style. A custom multiselect tool was also developed to sort through the thousands of possible datapoints.</p>
        </section>
        <section>
          <h3>Enterprise Holdings</h3>
          <sub>April 2018 - January 2020</sub>
          <p>RSI hired me knowing my specialty at the time was PHP and JavaScript, but when they couldn&apos;t find anything with those requirements they asked me how fast I could learn Java. &quot;Three Weeks&quot;.  Enterprise PHP takes a huge number of cues from Java structure-wise, and I had taken Java classes in college so I wasn&apos;t starting entirely from scratch.</p>
          <p>The job itself was doing automated testing for the internal loss prevention and recover application used by Enterprise to track damage dealt to their rental vehicles. A new Angular application was being rolled out and I worked to write the end to end tests in Cucumber Java and maintain them.</p>
        </section>
      </article>
      <article>
        <h2>Lexington-Fayette Urban County Government</h2>
        <sub>January 2017 - August 2017</sub>
        <p>The city&apos;s website is a Drupal installation, and I was charged with general maintainence and expansion of the site, including the addition of a parks map system using ArchGis.</p>
      </article>
      <article>
        <h2>Tombras</h2>
        <sub>June 2013 - June 2016</sub>
        <p>Tombras is an advertising agency, and so I was building Wordpress sites, advertising Microsites, and one largish Drupal 7 site for the Knoxville Chamber of Commerce.</p>
      </article>
      <article>
        <h2>Webbed Sphere Inc.</h2>
        <sub>June 2012 - June 2013</sub>
        <p>I was hired to convert the in house sales application to Magento. Before I was hired they had spoken with a consultant from the makers of Magento for advice and were flat out told it would be impossible.  I was told to try anyway. The site proved too large to work with that application. Their legacy application was also running on PHP 4 still even with PHP 5.6 being the newest.  I managed to get it to upgrade in about an hour after being told by another programmer on staff that he&apos;d spent 3 months trying to upgrade but it wouldn&apos;t start (the problem was he wasn&apos;t porting the PECL libraries during the upgrade).</p>
      </article>
      <article>
        <h2>eGovernment Solutions</h2>
        <sub>May 2010 - April 2012</sub>
        <p>This company provides government support web applications for counties in the state of Tennessee, allowing citizens to pay fines and taxes online. The software had no automated tests at all, and it was at this time I began the process of learning automated tests to try to make the task more doable. The program was entirely in house and written to support IE 6. Weaning the software from IE 6 only was high on the task list which led to one of the more interesting bits of code I ever wrote.</p>
        <p>The software was not only an online portal, it was an in office management suite. The clients wanted one click printing of documents, which isn&apos;t possible in JavaScript because of hackers. However, by contract the physical server was to be placed in the office. I took advantage of this unusual arrangement of the server being on the same local network as the printers they wanted to print with and wrote a PHP LDAP library to drive the printing.</p>
        <p>I also optimized many of the report queries. The most memorable was one that took 8 hours to run before I rewrote it to run in 4 minutes - three of which were spent on a temporary table creation query to copy the data over to something normalized.</p>
      </article>
      <article>
        <h2>DMGx</h2>
        <sub>2006-2010</sub>
        <p>Another advertising agency, I worked on custom microsites and also a large number of Actionscript class modules and plugins - with the passing of Flash most of what I used and learned here isn&apos;t really useful anymore.</p>
      </article>
      <article>
        <h2>Intermedia Graphics</h2>
        <sub>2005-2006</sub>
        <p>My first formal employer in web applications. I wrote a custom application that was used to coordinate and run the 2005 Bonnaroo music show and was used for a few years after.</p>
      </article>
      <article>
        <h2>Wizards of the Coast</h2>
        <sub>2004</sub>
        <p>This was the kickoff - prior to this I was driving a truck. An avid fan of D&amp;D and Magic: The Gathering, I was active in their forums at the time (which have long since been closed). All their in house web pages where in ASP except the forum software which was in vBulletin on PHP. As a hobby I&apos;d helped maintain a fan site and somehow I landed the job of converting their ASP designs over to PHP. I worked 3 W2 contracts doing this and decided I could make a living at this so I went back to school at ITT Tech until I was hired out of school by Intermedia.</p>
      </article>
    </Page>
  )
}
