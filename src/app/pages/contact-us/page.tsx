'use client';

import { useTranslations } from 'next-intl';

export default function ContactUs() {
  const t = useTranslations('Pages.ContactUs');

  return (
    <div>
      <h1>{t('Title')}</h1>
      <p>{t('Description')}</p>
    </div>
  );
}