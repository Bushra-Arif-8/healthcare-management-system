'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LocalSwitcher from './local-switcher';
import ThemeToggleButton from './ThemeToggleButton';

const routes = [
  { path: '/', label: 'Home' },
  { path: 'about', label: 'About Us' },
  { path: 'contact', label: 'Contact Us' },
  { path: 'help', label: 'Help' },
  { path: 'reviews', label: 'Reviews' },
  { path: 'settings', label: 'Settings' },
];

export default function Header() {
  const t = useTranslations('Navigation');
  console.log(t)
  const pathname = usePathname() || ''; // Ensure pathname is not null

  // Split the pathname to get the locale and the current path
  const pathSegments = pathname.split('/');
  const locale = pathSegments[1] || 'en';
  const currentPath = pathSegments[2] || '';

  return (
    <header className="bg-blue-900 text-white shadow-lg w-full">
      <nav className="flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={`/${locale}/${route.path}`}
              className={`text-lg font-medium hover:text-blue-300 transition-colors duration-300 ${
                currentPath === route.path ? 'underline' : ''
              }`}
            >
              {t(route.label)}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <LocalSwitcher />
          <ThemeToggleButton />
        </div>
      </nav>
    </header>
  );
}
