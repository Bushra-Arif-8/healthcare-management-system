// src/app/[locale]/layout.tsx
"use client";

import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { ThemeProvider } from '../../styles/themes/ThemeProvider';
import Header from '@/components/header';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import enMessages from '../../../messages/en.json';  // Adjust path for the messages
import urMessages from '../../../messages/ur.json';  // Adjust path for the messages

const inter = Inter({ subsets: ['latin'] });

const messages = {
  en: enMessages,
  ur: urMessages,
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Provider store={store}>
          <NextIntlClientProvider
            messages={messages[locale]}  // Provide messages for the current locale
            locale={locale}              // Provide the locale explicitly
          >
            <ThemeProvider>
              <div className='flex flex-col min-h-screen max-w-4xl mx-auto'>
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
