import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-black px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t('privacy.title', 'Privacy Policy')}</h1>

      <p className="mb-4">
        {t(
          'This privacy policy explains how we collect, use, and protect your personal data when you use SportsMatch.'
        )}
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t('privacy.dataCollectionTitle', 'What data do we collect?')}</h2>
      <ul className="list-disc list-inside mb-4">
        <li>{t('Name and contact information')}</li>
        <li>{t('Device and usage information')}</li>
        <li>{t('Messages sent via contact forms')}</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t('privacy.useTitle', 'How do we use your data?')}</h2>
      <p className="mb-4">
        {t(
          'We use your data to provide services, improve user experience, and contact you if necessary.'
        )}
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t('privacy.rightsTitle', 'Your rights')}</h2>
      <p className="mb-4">
        {t(
          'You have the right to access, correct, or delete your personal data. You can contact us at any time.'
        )}
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t('privacy.contactTitle', 'Contact')}</h2>
      <p>
        {t(
          'If you have any questions about this policy, please contact us at'
        )}{' '}
        <a href="mailto:info@sportsmatch.app" className="text-blue-600 underline">
          info@sportsmatch.app
        </a>
        .
      </p>
    </div>
  );
}