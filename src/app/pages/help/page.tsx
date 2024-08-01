import { useTranslations } from 'next-intl';

export default function Help() {
  const t = useTranslations('Pages.Help');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{t('HelpTitle')}</h1>
      <p>{t('HelpDescription')}</p>
    </div>
  );
}
