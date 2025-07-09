import { useTranslation } from "react-i18next";
import Contactform from "./ContactForm";

const SectionContactForm = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-900 min-h-screen py-24 px-4 sm:py-32 sm:px-8">
      <div className="max-w-full mx-auto text-center w-full h-full">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-10">
          {t('Do you want to know more?')}
        </h2>
        <Contactform className="space-y-8 max-w-7xl mx-auto" />
      </div>
    </section>
  );
};

export default SectionContactForm;