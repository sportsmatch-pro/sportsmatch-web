import { useState, useEffect } from "react";

const deportes = [
  { nombre: "Fútbol", color: "border-green-500", imagen: "./../assets/futbol.png" },
  { nombre: "Baloncesto", color: "border-orange-500", imagen: "./../assets/basket.png" },
  { nombre: "Hockey", color: "border-yellow-500", imagen: "./../assets/hockey.webp" },
  { nombre: "Fútbol sala", color: "border-blue-500", imagen: "./../assets/futsal.png" },
  { nombre: "Voleibol", color: "border-pink-500", imagen: "./../assets/voliebol.png" },
  { nombre: "Balonmano", color: "border-purple-600", imagen: "./../assets/balonmano.png" },
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
      const maxScroll = 500; // px for full effect
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

      {/* Arrows on sides */}
      <button
        onClick={anterior}
        className="absolute left-8 text-5xl text-white z-20"
      >
        &lt;
      </button>
      <button
        onClick={siguiente}
        className="absolute right-8 text-5xl text-white z-20"
      >
        &gt;
      </button>
    </div>
  );
}