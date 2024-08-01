import { useTranslations } from 'next-intl';

export default function Reviews() {
  const t = useTranslations('Pages.Reviews');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{t('ReviewsTitle')}</h1>
      <p>{t('ReviewsDescription')}</p>
    </div>
  );
}
