import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('IndexPage');
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p>Welcome to the homepage!</p>
    </div>
  );
}
