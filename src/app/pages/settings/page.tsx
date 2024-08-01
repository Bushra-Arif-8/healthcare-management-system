import { useTranslations } from 'next-intl';

export default function Settings() {
  const t = useTranslations('Pages.Settings');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{t('SettingsTitle')}</h1>
      <p>{t('SettingsDescription')}</p>
    </div>
  );
}
