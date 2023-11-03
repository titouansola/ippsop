'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { SimpleLoader } from '@ippsop/features/common/components/SimpleLoader';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useState<string | null>();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const canSubmit = !loading && !!token && isValid;

  const onSubmit = (data: { name: string; email: string; message: string }) => {
    if (!token) {
      return;
    }
    setLoading(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    fetch('/api/contact', { method: 'POST', body: formData, cache: 'no-cache' })
      .then((response) => {
        if (response.status !== 200) {
          return setError(true);
        }
        setSuccess(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <form
        // @ts-ignore
        onSubmit={handleSubmit(onSubmit)}
        className={'flex max-w-xl flex-col gap-8'}
        id={'contact-form'}
      >
        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'name'}>Prénom / Nom</label>
          <input
            {...register('name', { required: true })}
            type={'text'}
            id={'name'}
            placeholder={'Antoine Dupont'}
          />
        </div>

        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'email'}>Adresse e-mail</label>
          <input
            {...register('email', { required: true })}
            type={'email'}
            id={'email'}
            placeholder={'antoine.dupont@gmail.com'}
            required
          />
        </div>

        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'message'}>Message</label>
          <textarea
            {...register('message', { required: true })}
            id={'message'}
            placeholder={'Entrez votre message ici'}
            rows={5}
            required
          />
        </div>

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={setToken}
        />

        {!success && (
          <button type={'submit'} className={'primary'} disabled={!canSubmit}>
            {loading ? <SimpleLoader /> : 'Envoyer'}
          </button>
        )}

        {success && (
          <p className={'text-lime-600'}>
            Votre message a bien été envoyé ! Nous vous recontacterons dans les
            plus brefs délais.
          </p>
        )}
        {error && (
          <p className={'text-rose-800'}>
            Une erreur est survenue durant l&apos;envoi de votre message.
            Veuillez réessayer ultérieurement.
          </p>
        )}
      </form>
    </>
  );
}
