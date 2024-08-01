import { useTranslations } from 'next-intl';

export default function AboutUsPage() {
  const t = useTranslations('Pages.About Us');
  console.log(t);
  return (
    <div className="p-6">
       <h1 className="text-2xl font-bold">{t('Title')}</h1>
      <p>{t('Description')}</p> 
    </div>
  );
}
