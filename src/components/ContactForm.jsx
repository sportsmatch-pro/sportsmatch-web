import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BaseInput from './base/BaseInput';
import BaseTextarea from './base/BaseTextarea';
import BaseCheckbox from './base/BaseCheckbox';
import BaseSubmit from './base/BaseSubmit';

function Contactform({ className }) {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to send');
        setStatus('success');
      })
      .catch(() => setStatus('error'))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="w-screen min-h-screen flex items-center justify-center pt-0">
      <div className="bg-white bg-opacity-10 p-6 rounded-3xl w-full max-w-4xl">
        <form action="/contact" method="POST" className={className} noValidate onSubmit={handleSubmit}>
          <BaseInput
            type="text"
            name="name"
            placeholder={t('Name')}
            aria-label={t('Name')}
            required
          />
          <BaseInput
            type="email"
            name="email"
            placeholder={t('Email')}
            aria-label={t('Email')}
            required
          />
          <BaseInput
            type="tel"
            name="phone"
            placeholder={t('Phone')}
            aria-label={t('Phone')}
          />
          <BaseTextarea
            name="message"
            placeholder={t('Message')}
            aria-label={t('Message')}
            required
          />
          <fieldset className="mb-4 border-0 p-0">
            <legend className="sr-only">{t('Legal Agreement')}</legend>
            <BaseCheckbox
              name="legal"
              label={
                <Trans
                  i18nKey="I agree to the <privacy>Privacy Policy</privacy>."
                  components={{
                    privacy: (
                      <Link
                        to={t('/en/privacy-policy')}
                        style={{ textDecoration: 'underline' }}
                        aria-label={t('Privacy Policy')}
                      />
                    ),
                  }}
                />
              }
              required
              className="bg-transparent"
            />
          </fieldset>
          <BaseSubmit
            label={t('Send')}
            disabled={isSubmitting}
            className="bg-gray-600 text-white text-lg font-normal px-12 py-2 rounded-full hover:bg-gray-700 transition mx-auto block"
          />
          {status === 'success' && <p className="text-green-600 mt-2">{t('Message sent successfully!')}</p>}
          {status === 'error' && <p className="text-red-600 mt-2">{t('There was an error sending your message.')}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contactform;