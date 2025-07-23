import './../index.css';
import { useTranslation } from 'react-i18next';
import Navbar from './../components/Navbar';
import DeportesSlider from './../components/DeportesSlider';
import DeportesSelector from './../components/DeportesSelector';
import TalentIntroSection from './../components/TalentIntroSection.jsx';
import Footer from './../components/Footer';
import SectionContactForm from '../components/SectionContactForm';
import DownloadAppSection from '../components/DownloadAppSection';
import videoSport from './../assets/videosport.mp4';

export default function Home() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('Your dream,\nwithin reach'),
      text: (
        <>
          <p className="mb-6">{t('Do you believe you have potential and dream of taking the leap to the next level?')}</p>
          <p className="mb-6">{t('Create your profile and start showcasing your talent by uploading videos and photos of your skills.')}</p>
          <p>{t('Browse club offers, sign up for them, and make a Match with your next club!')}</p>
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
      title: t('Find your\nnext star'),
      text: (
        <>
          <p className="mb-6">{t('If you are a club, a representative or a scouting company, you have the opportunity to')} <strong>{t('search, filter and find your next player')}</strong> {t('or the professional you need.') }</p>
          <p>{t('Browse, chat, post a sports offer and Match with your next star!')}</p>
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
      <section className="w-screen min-h-screen bg-black flex items-center justify-center">
        <video
          src={videoSport}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>
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
        <div className="w-screen min-h-screen bg-[#0e1628] flex items-center justify-center">
          <DeportesSelector />
        </div>
      </main>
      <SectionContactForm />
      <DownloadAppSection />
      <Footer />
    </>
  );
}