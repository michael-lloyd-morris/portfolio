import { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children?: ReactNode,
}

export default function MainNav({}:Props) {
  return (
    <header className="main">
      <div>
        <div>Michael Lloyd Morris</div>
        <div>Senior Web Developer</div>
      </div>
      <nav>
        <div><Link href="/">About</Link></div>
        <div>
          <Link href="/projects">Projects</Link>
          <div>
            <Link href="/projects/drupal">Drupal</Link>
            <Link href="/projects/cucumber">Cucumber JS</Link>
          </div>
        </div>
        <div>
          <Link href="/skills/">Skills</Link>
          <div>
            <Link href="/skills/ag-grid">AgGrid</Link>
            <Link href="phpunit">PHP</Link>
          </div>
        </div>
        <div><Link href="experience">Experience</Link></div>
        <div><Link href="contact">Contact</Link></div>
      </nav>
    </header>
  )
}