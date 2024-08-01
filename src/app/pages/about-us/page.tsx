import { useTranslations } from 'next-intl';

export default function AboutUs() {
  const t = useTranslations('Pages.AboutUs');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{t('AboutUsTitle')}</h1>
      <p>{t('AboutUsDescription')}</p>
    </div>
  );
}
