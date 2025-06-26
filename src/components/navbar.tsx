import Link from 'next/link';
import React from 'react';

interface Route {
  name: string,
  link: string
}

interface NavBarProps {
  routes: Route[]
}
export default function NavBar({ routes }: NavBarProps): React.ReactElement {

  const links = routes.map(({ name, link }: Route, i: number): React.ReactElement =>
    <Link className="text-left text-2xl px-4 py-2 hover:text-gray-400 hover:bg-gray-800 transition rounded" key={i} href={link} >{name}</Link>
  );

  return (
    <nav className='fixed top-0 left-0 px-4 py-4 w-full h-14 z-50 flex items-center justify-start 
      shadow-lg bg-gray-800 text-white print:hidden'>
      {links}
    </nav>
  );
}
