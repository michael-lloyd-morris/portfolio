import { ReactNode } from 'react';
import NavLink from "./NavLink";
import Link from 'next/link';
interface Props {
  children?: ReactNode,
}

export default function MainNav({}:Props) {
  return (
    <header className="main">
      <div className="lead">
        <Link href="/">
        <div>Michael Lloyd Morris</div>
        <div>Senior Web Developer</div>
        </Link>
      </div>
      <div className="navs">
        <nav>
          <div><NavLink href="/about">About</NavLink></div>
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
              <NavLink href="/demos/cucumber-next">Cucumber/NextJS</NavLink>
              <NavLink href="/demos/login">Login</NavLink>
            </div>
          </div>
          <div><NavLink href="/experience">Experience</NavLink></div>
        </nav>
        <nav>
          <a href="/resume.pdf" className="icon-file-text2" title="My Resume"></a>
          <a href="https://www.linkedin.com/in/michael-morris-00b4b7118/" className="icon-linkedin" title="Linked In Profile"></a>
          <a href="mailto:tendoaki@gmail.com" className="icon-envelop" title="Email"></a>
          <a href="tel:6063440594" className="icon-phone" title="Phone"></a>
        </nav>
      </div>
    </header>
  )
}