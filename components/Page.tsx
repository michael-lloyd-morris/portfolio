import { ReactNode } from 'react'
interface Props {
  children?: ReactNode,
  title?: string
}

export default function Page({children}:Props) {
  return <>
    <main>{children}</main>
    <footer className="main">
      <p>&copy; {new Date().getFullYear()} Michael Lloyd Morris</p>
      <p>Hosted by Vercel.</p>
    </footer>
  </>
}