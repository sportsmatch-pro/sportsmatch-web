import { useState, useEffect } from "react";
import LogoIcon from './icons/LogoIcon';
import BaseCarouselButton from './base/BaseCarouselButton';

const deportes = [
  { nombre: "Fútbol", colorPart1: "#22c55e", colorPart2: "#a7f3d0", imagen: "./../assets/futbol.png" },
  { nombre: "Baloncesto", colorPart1: "#f97316", colorPart2: "#fed7aa", imagen: "./../assets/basket.png" },
  { nombre: "Hockey", colorPart1: "#eab308", colorPart2: "#fef3c7", imagen: "./../assets/hockey.png" },
  { nombre: "Fútbol sala", colorPart1: "#3b82f6", colorPart2: "#bfdbfe", imagen: "./../assets/futsal.png" },
  { nombre: "Voleibol", colorPart1: "#ec4899", colorPart2: "#fbcfe8", imagen: "./../assets/voleibol.png" },
  { nombre: "Balonmano", colorPart1: "#7c3aed", colorPart2: "#ddd6fe", imagen: "./../assets/balonmano.png" },
];

export default function DeportesSlider() {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(0.8);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % deportes.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + deportes.length) % deportes.length);
  };

  useEffect(() => {
    const interval = setInterval(siguiente, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 500;
      const scrollY = window.scrollY;
      const newScale = Math.min(1, 0.8 + (scrollY / maxScroll) * 0.2);
      setScale(newScale);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const actual = deportes[index];

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {actual.imagen && (
        <img
          src={new URL(actual.imagen, import.meta.url).href}
          alt={actual.nombre}
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.1s ease-out",
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}


      <div className="absolute left-24 top-1/2 transform -translate-y-1/2 text-white text-4xl max-w-lg z-30">
        Únete a la primera red social del mercado que conecta jugador@s y profesionales del deporte con clubes deportivos
      </div>
      <div className="absolute bottom-8 right-8 text-white text-7xl z-30">
        {actual.nombre}
      </div>

      {/* LogoIcon block, z-20 so it's above bg image but below text */}
      <div className="absolute inset-0 flex justify-center items-center z-20 animate-pulse-strong">
        <LogoIcon
          width={1000}
          height={1000}
          color={actual.colorPart1}
          secondaryColor={actual.colorPart2}
        />
      </div>

      {/* Arrows on sides */}
      <BaseCarouselButton
        direction="left"
        onClick={anterior}
        className="absolute left-8 z-30"
      />
      <BaseCarouselButton
        direction="right"
        onClick={siguiente}
        className="absolute right-8 z-30"
      />
    </div>
  );
}