"use client";

import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { ThemeProvider } from '../../styles/themes/ThemeProvider';
import Header from '@/components/header';
import { Inter } from 'next/font/google';
import '..//globals.css';
import { NextIntlClientProvider } from 'next-intl';
import enMessages from '../../../messages/en.json';  // Adjust path for the messages
import urMessages from '../../../messages/ur.json';  // Adjust path for the messages

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
          <NextIntlClientProvider
            messages={messages[locale]}
            locale={locale}
          >
            <ThemeProvider>
              <div className='flex flex-col min-h-screen w-full'>
                <Header />
                <div className='flex-grow mt-20'>{children}</div>
              </div>
            </ThemeProvider>
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}
