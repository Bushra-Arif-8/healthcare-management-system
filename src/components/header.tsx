import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import ThemeToggleButton from '../components/ThemeToggleButton';



export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className='p-4'>
      <nav className='flex items-center justify-between'>
        <LocalSwitcher />
        <ThemeToggleButton />
        


      </nav>
    </header>
  );
}