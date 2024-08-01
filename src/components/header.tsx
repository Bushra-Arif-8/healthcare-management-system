'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LocalSwitcher from './local-switcher';
import ThemeToggleButton from './ThemeToggleButton';
import routes from '../routes/route';

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <header className="bg-blue-600 text-white shadow-md w-full">
      <nav className="flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-6">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={`/${locale}/${route.path}`}
              className="text-lg hover:text-gray-200 transition duration-300"
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