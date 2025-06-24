import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import BaseInput from './base/BaseInput';
import BaseTextarea from './base/BaseTextarea';
import BaseCheckbox from './base/BaseCheckbox';
import BaseSubmit from './base/BaseSubmit';

function Contactform({className}) {

  const { t } = useTranslation();
  return (
    <form action="/contact" method="POST" className={className}>
      <BaseInput type="text" name="name" placeholder={t('Name')} />
      <BaseInput type="email" name="email" placeholder={t('Email')} />
      <BaseInput type="tel" name="phone" placeholder={t('Phone')} />
      <BaseTextarea name="message" placeholder={t('Message')} />
      <BaseCheckbox name="legal" label={
        <Trans
          i18nKey="'I agree to the <privacy>Privacy Policy</privacy>.'"
          components={{
            privacy: (
              <Link
              to={t('/en/privacy-policy')}
              style={{ textDecoration: 'underline' }}
              />
            ),
          }}
        />
      } />
      <BaseSubmit label={t('Send')} />
    </form>
  );
}

export default Contactform;