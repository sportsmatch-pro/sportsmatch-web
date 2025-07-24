import { useTranslation } from "react-i18next";
import Contactform from "./ContactForm";

const SectionContactForm = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-900 min-h-screen py-8 px-4 sm:py-12 sm:px-8">
      <div className="max-w-full mx-auto text-center w-full h-full">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-32 mb-0">
          {t('Do you want to know more?')}
        </h2>
        <div className="mt-[-200px]">
          <Contactform className="space-y-4 max-w-7xl mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default SectionContactForm;