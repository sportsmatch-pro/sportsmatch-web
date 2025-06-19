import Navbar from "./Navbar";
import DeportesSlider from "./DeportesSlider";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";

import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <DeportesSlider />
      <main className="relative w-full overflow-y-scroll h-screen snap-y snap-mandatory">
        {[
          {
            title: "Tu sueño a tu alcance",
            text: "Tanto si eres deportista y quieres llegar más lejos, como si eres ojeador y buscas talento, SportsMatch te lo pone fácil.",
            image: "./assets/futbol.png",
            imagePosition: "right",
            background: "white",
            textColor: "black",
          },
          {
            title: "Encuentra tu equipo",
            text: "Únete a una comunidad de deportistas y ojeadores que comparten tus intereses.",
            image: "./assets/futbol.png",
            imagePosition: "left",
            background: "black",
            textColor: "white",
          },
        ].map((section, index) => (
          <div key={index} className="relative w-full h-screen snap-start">
            <Section1
              title={section.title}
              text={section.text}
              image={section.image}
              imageAlt={section.title}
              imagePosition={section.imagePosition}
              background={section.background}
              textColor={section.textColor}
              fullImage={true}
            />
          </div>
        ))}
      </main>
      <Section2 />
      <Footer />
    </>
  );
}

export default App;