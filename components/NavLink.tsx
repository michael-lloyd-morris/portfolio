import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface Props {
  href: string,
  children?: ReactNode,
}

export default function NavLink({href, children}:Props) {
  const router = useRouter();

  return <Link href={href} className={router.pathname === href ? "active" : ""}>{children}</Link>
}