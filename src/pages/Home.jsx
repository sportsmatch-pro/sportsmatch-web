import './../index.css';
import { useTranslation } from 'react-i18next';
import Navbar from './../components/Navbar';
import DeportesSlider from './../components/DeportesSlider';
import DeportesSelector from './../components/DeportesSelector';
import TalentIntroSection from './../components/TalentIntroSection.jsx';
import Footer from './../components/Footer';
import SectionContactForm from '../components/SectionContactForm';
import DownloadAppSection from '../components/DownloadAppSection';

export default function Home() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('Your dream, within reach'),
      text: (
        <>
          {t('Do you believe you have potential and dream of taking the leap to the next level?')}
          <br />
          {t('Create your profile and start showcasing your talent by uploading videos and photos of your skills.')}
          <br />
          {t('Browse club offers, sign up for them, and make a Match with your next club!')}
        </>
      ),
      images: [
        "./../assets/futsal1.png",
        "./../assets/volei1.png",
        "./../assets/balonmano1.png"
      ],
      imagePosition: 'right',
      background: 'white',
      textColor: 'black',
    },
    {
      title: t('Find your next star'),
      text: (
        <>
          {t('If you are a club, a representative or a scouting company, you have the opportunity to')} <strong>{t('search, filter and find your next player')}</strong> {t('or the professional you need.') }
          <br />
          {t('Browse, chat, post a sports offer and Match with your next star!')}
        </>
      ),
      images: [
        "./../assets/futbol1.png",
        "./../assets/basket1.png",
        "./../assets/hockey1.png"
      ],
      imagePosition: 'left',
      background: 'black',
      textColor: 'white',
    },
  ];

  return (
    <>
      <Navbar />
      <DeportesSlider />
      <main className="relative w-full overflow-y-auto min-h-screen snap-y snap-mandatory">
        {sections.map((section, index) => (
          <div key={index} className="relative w-full min-h-screen snap-start flex flex-col justify-center px-0 sm:px-0 lg:px-0">
            <TalentIntroSection
              title={section.title}
              text={section.text}
              images={section.images}
              imageAlt={section.title}
              imagePosition={section.imagePosition}
              background={section.background}
              textColor={section.textColor}
              fullImage={true}
            />
          </div>
        ))}
        <div className="w-full bg-[#0e1628] flex items-center justify-center px-4">
          <DeportesSelector />
        </div>
      </main>
      <SectionContactForm />
      <DownloadAppSection />
      <Footer />
    </>
  );
}