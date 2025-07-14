import { useTranslation } from 'react-i18next';
import logoFooter from '../assets/logofooter.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#2e2e2e] text-white py-24 px-12 mt-0">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8">{t('Contact us')}</h2>
        <p className="text-2xl mb-10">
          {t('If you have questions or need assistance, you can contact us at:')}
        </p>
        <p className="text-4xl font-semibold text-white mb-10">
          info@sportsmatch.pro
        </p>
        <div className="flex justify-center items-center space-x-12 mb-12">
          <img
            src="https://img.icons8.com/ios-filled/60/25D366/whatsapp--v1.png"
            alt="WhatsApp"
            className="h-12"
          />
          <span className="text-3xl">+34 689 47 22 60</span>
          <img
            src="https://img.icons8.com/ios-filled/60/ffffff/technical-support.png"
            alt={t('Support')}
            className="h-12"
          />
        </div>
        <div className="mx-auto mb-12 inline-block p-4 rounded-lg bg-[#2e2e2e]">
          <img
            src={logoFooter}
            alt={t('SportsMatch Logo')}
            className="h-32 opacity-90"
            style={{ filter: 'brightness(1) contrast(1)' }}
          />
        </div>
        <div className="flex justify-center space-x-12 text-lg mb-6">
          <a href="#" className="hover:underline">{t('Legal notice')}</a>
          <a href="#" className="hover:underline">{t('Privacy Policy')}</a>
          <a href="#" className="hover:underline">{t('Cookies Policy')}</a>
        </div>
        <p className="text-sm">©2024. SPORTSMATCH. {t('All rights reserved.')}</p>
      </div>
    </footer>
  );
};

export default Footer;