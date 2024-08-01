import { useTranslations } from 'next-intl';

export default function ContactUsPage() {
  const t = useTranslations('Pages.Contact Us');
//   console.log(t);
  return (
    <div className="p-6">
       <h1 className="text-2xl font-bold">{t('Title')}</h1>
      <p>{t('Description')}</p> 
    </div>
  );
}
