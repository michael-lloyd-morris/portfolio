import { ReactNode } from 'react'

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
        <div><a href="/">About</a></div>
        <div>
          <a href="/projects">Projects</a>
          <div>
            <a href="/projects/drupal">Drupal</a>
            <a href="/projects/cucumber">Cucumber JS</a>
          </div>
        </div>
        <div>
          <a href="/skills/">Skills</a>
          <div>
            <a href="/skills/ag-grid">AgGrid</a>
            <a href="phpunit">PHP</a>
          </div>
        </div>
        <div><a href="experience">Experience</a></div>
        <div><a href="contact">Contact</a></div>
      </nav>
    </header>
  )
}