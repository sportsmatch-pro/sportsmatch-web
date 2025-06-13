import { useState } from "react";
import futbol from "./assets/futbol.png"; 
//import basket from "./assets/basket.jpg";
//import hockey from "./assets/hockey.jpg";
//import futbolSala from "./assets/futbolsala.jpg";
//import voleibol from "./assets/voleibol.jpg";
import balonmano from "./assets/balonmano.png";

const deportes = [
  { nombre: "Fútbol", color: "border-green-500", imagen: futbol },
  // { nombre: "Baloncesto", color: "border-orange-500", imagen: basket },
  // { nombre: "Hockey", color: "border-yellow-500", imagen: hockey },
  // { nombre: "Fútbol sala", color: "border-blue-500", imagen: futbolSala },
  // { nombre: "Voleibol", color: "border-pink-500", imagen: voleibol },
  { nombre: "Balonmano", color: "border-purple-600", imagen: balonmano },
];

export default function DeportesSlider() {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % deportes.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + deportes.length) % deportes.length);
  };

  const actual = deportes[index];

  return (
    <div className="h-screen w-full bg-white flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-4">
        <button onClick={anterior} className="text-4xl font-bold">&lt;</button>
        
        {actual.imagen && (
          <div className={`border-4 ${actual.color} p-4 transform rotate-45`}>
            <img
              src={actual.imagen}
              alt={actual.nombre}
              className="w-80 h-80 object-cover transform -rotate-45"
            />
          </div>
        )}

        <button onClick={siguiente} className="text-4xl font-bold">&gt;</button>
      </div>

      <p className="mt-6 text-3xl font-semibold">{actual.nombre}</p>

       
    </div>
  );
}