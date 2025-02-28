import { SendButton } from '@/src/components';
import { useTranslation } from 'next-i18next';

export const ContactUnform = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    window.location.href = t('pages.contact.href');
  };

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: t('pages.contact.description') }} />
      <h2>{t('pages.contact.email')}</h2>
      <SendButton type='button' onClick={handleClick}>
        {t('pages.contact.labels.button')}
      </SendButton>
    </div>
  );
};
