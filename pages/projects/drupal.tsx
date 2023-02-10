import Page from "@/components/Page"

export default function Home() {
  return (
    <Page title="Projects - Runtime Assertions in Drupal">
      <h1>Runtime Assertions in Drupal</h1>
      <section>
        <p>While Drupal 8 was late into its beta I decided to investigate the changes that it was bringing to the Drupal project. I had used Drupal for a few projects over the years including a chamber of commerce website for the City of Knoxville, TN, but Drupal 8 was utterly different from 7 and there was so much to explore it verged on overwhelming. I started with creating my own templates and made a mistake in the configuration that took me four days to debug because the error message that was being returned was incredibly cryptic.</p>
        <p>When I tracked down the point of the problem deep in the core code I thought to myself, "if only there was an assert statement here to tell me what I'm doing wrong, could have saved me days." So I wrote up an issue ticket and joined the Drupal community forums and IRC determined to change the world</p>
        <p>What followed was a six month back and forth with the community. Many of the members didn't know what the assert statement was, and most of those that did misunderstood it's application. But slowly I won over the majority of the project leads and got a green light for its inclusion provided it could solve one last unsolved problem.</p>
        <p>Drupal uses string tokens to identify components and modules. These labels are included in the YAML files constructed by the programmer and they must be valid strings with some formatting restrictions.  If a malformed token is inserted into the database the site can be corrupted and reversing the action can be painful to outright impossible for a developer without deep knowledge into the workings of Drupal Core.  To prevent such a mistake Drupal 8 did a validation pass over all the tokens on each request. On a production site though this token list can be thousands, even tens of thousands of entries in length for a large complex site.</p>
        <p>These tokens are only changed by programmers and module developers. They are not subject to change by users or by the environment - so their integrity can be asserted in a development environment and the process can be skipped in production. They were an ideal candidate to prove the worth of runtime assertions in Drupal, so the task was assigned to me to prove the concept. Drupal 8 was late in beta at this point, and the slowness of the system was one of the last blockers before going to release candidates.</p>
        <p>Once the code I wrote was committed the internal tests of just Drupal core sped up by 2%, significant but not remarkable. The developers at Acquina then pulled a build with the patch and ran it on their test servers which have far, far more of the string tokens than Drupal core alone. The production environment sped up by 50%.  The patch was committed and Drupal 8 went into release candidates.</p>
        <p>Part of that code commit was this large inclusion into the Drupal documentation on <a href="https://www.drupal.org/docs/drupal-apis/runtime-assertions">runtime assertions</a> (So named to distinguish them from PHP Unit assertions).</p>
        <p>My contributor handle at Drupal is <a href="https://www.drupal.org/u/aki-tendo">Aki Tendo</a>. The discussion thread on the issue is <a href="https://www.drupal.org/project/drupal/issues/2408013">still in place</a> on the Drupal Issues board. Please forgive some of my miscues - this was my first truly large feature inclusion for a major open source project and I was still learning the ropes.</p>
        <p>The commit for this feature <a href="https://git.drupalcode.org/project/drupal/-/commit/cc34748c31e393e25f595f472c1a40bedd9acf12">can be found here.</a> I was the only active coder for that commit, everyone else was acting as guides and editors, particularly on the documentation.</p>
      </section>
    </Page>
  )
}
