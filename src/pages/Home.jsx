import './../index.css';
import { useTranslation } from 'react-i18next';
import Navbar from './../components/Navbar';
import DeportesSlider from './../components/DeportesSlider';
import Section1 from './../components/Section1';
import Section2 from './../components/Section2';
import Footer from './../components/Footer';
import SectionContactForm from '../components/SectionContactForm';
import Section4 from '../components/Section4';

export default function Home() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('Your dream within reach'),
      text: t(
        'Whether you are an athlete looking to go further or a scout searching for talent, SportsMatch makes it easy for you.'
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
      title: t('Find your team'),
      text: t(
        'Join a community of athletes and scouts who share your goals and interests.'
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
      <main className="relative w-full overflow-y-scroll h-screen snap-y snap-mandatory">
        {sections.map((section, index) => (
          <div key={index} className="relative w-full h-screen snap-start">
            <Section1
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
        <div className="relative w-full h-screen snap-start">
          <Section2 />
        </div>
      </main>
      <div className="w-full bg-[#0e1628] flex items-center justify-center px-4">
        <SectionContactForm />
      </div>
      
        <Section4 />
      <Footer />
    </>
  );
}