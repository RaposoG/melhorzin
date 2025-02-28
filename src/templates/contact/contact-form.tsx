import {
  Form,
  FormGroup,
  Input,
  Label,
  Textarea,
  Toast,
  SendButton
} from '@/src/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { emailSchema } from '@/src/schemas';
import { type EmailProps } from '@/src/@types';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Api } from '@/src/libs';

export const ContactForm = () => {
  const { basePath } = useRouter();
  const { t } = useTranslation();

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EmailProps>({
    resolver: zodResolver(emailSchema)
  });

  const onSubmit: SubmitHandler<EmailProps> = async data => {
    try {
      const api = new Api(basePath).getInstance();
      await api.post('/api/email', data);
      setIsEmailSent(true);
      setShowToast(true);
      reset();
    } catch (e) {
      console.error(e);
      setIsEmailSent(false);
      setShowToast(true);
    }
  };
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: t('pages.contact.description') }} />
      <h2>Mande um email</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor='name'>{t('pages.contact.labels.name')}</Label>
          <Input
            placeholder={t('pages.contact.placeholders.name')}
            {...register('name')}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>{t('pages.contact.labels.email')}</Label>
          <Input
            placeholder={t('pages.contact.placeholders.email')}
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor='message'>{t('pages.contact.labels.message')}</Label>
          <Textarea
            placeholder={t('pages.contact.placeholders.message')}
            rows={4}
            {...register('message')}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </FormGroup>
        <FormGroup>
          <SendButton type='submit'>
            {t('pages.contact.labels.button')}
          </SendButton>
        </FormGroup>
      </Form>

      <Toast
        title={
          isEmailSent
            ? t('pages.contact.toast.success.title')
            : t('pages.contact.toast.fail.title')
        }
        description={
          isEmailSent
            ? t('pages.contact.toast.success.description')
            : t('pages.contact.toast.fail.description')
        }
        isSuccess={isEmailSent}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </div>
  );
};
