'use client';

import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { Inter } from 'next/font/google';
import '..//globals.css';
import { ThemeProvider } from '@/utils/ThemeProvider';
import { NextIntlClientProvider } from 'next-intl';
import enMessages from '../../../messages/en.json';  // Adjust path if needed
import urMessages from '../../../messages/ur.json';  // Adjust path if needed
import LocalSwitcher from '../../components/local-switcher'; // Adjust the path as needed

const inter = Inter({ subsets: ['latin'] });

type Locale = 'en' | 'ur';

const messages: Record<Locale, any> = {
  en: enMessages,
  ur: urMessages,
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Provider store={store}>
        <ThemeProvider>
          <NextIntlClientProvider
            messages={messages[locale]}
            locale={locale}
          >
            {children}
            
          </NextIntlClientProvider>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
