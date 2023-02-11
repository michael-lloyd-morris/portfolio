import { ReactNode } from 'react';
import NavLink from "./NavLink";

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
        <div><NavLink href="/">About</NavLink></div>
        <div>
          <NavLink href="/projects">Projects</NavLink>
          <div>
            <NavLink href="/projects/drupal">Drupal</NavLink>
            <NavLink href="/projects/cucumber">Cucumber JS</NavLink>
          </div>
        </div>
        <div>
          <NavLink href="/demos/">Demos</NavLink>
          <div>
            <NavLink href="/demos/ag-grid">AgGrid</NavLink>
          </div>
        </div>
        <div><NavLink href="/experience">Experience</NavLink></div>
      </nav>
      <nav>
        <a href="https://www.linkedin.com/in/michael-morris-00b4b7118/" className="icon-linkedin"></a>
        <a href="mailto:tendoaki@gmail.com" className="icon-envelop"></a>
        <a href="tel:6063440594" className="icon-phone"></a>
      </nav>
    </header>
  )
}