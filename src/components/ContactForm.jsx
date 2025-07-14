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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aquí podrías añadir la lógica de envío real, por ejemplo fetch o axios

    setTimeout(() => {
      setIsSubmitting(false);
      // mostrar mensaje de éxito o manejar errores
    }, 2000);
  };

  return (
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
        />
      </fieldset>

      <BaseSubmit label={t('Send')} disabled={isSubmitting} />
    </form>
  );
}

export default Contactform;