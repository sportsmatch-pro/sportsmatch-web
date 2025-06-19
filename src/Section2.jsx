import futbol from "./assets/futbolsection2.png";
import basket from "./assets/basketsection2.png";
import hockey from "./assets/hockeysection2.png";
import futsal from "./assets/futbolsalasection2.png";
import volei from "./assets/voleibolsection2.png";
import balonmano from "./assets/balonmanosection2.png";
function Section2() {
  const deportes = [
    { nombre: "Fútbol", color: "border-green-500", imagen: futbol },
    { nombre: "Baloncesto", color: "border-orange-500", imagen: basket },
    { nombre: "Hockey", color: "border-yellow-500", imagen: hockey },
    { nombre: "Fútbol sala", color: "border-blue-500", imagen: futsal },
    { nombre: "Voleibol", color: "border-pink-500", imagen: volei },
    { nombre: "Balonmano", color: "border-purple-600", imagen: balonmano },
  ];

  return (
    <section className="w-screen h-screen snap-start flex flex-col items-center justify-start bg-white">
      <h2 className="text-8xl font-bold mb-32 mt-0">¿Cuál es tu deporte?</h2>
      <p className="mb-32 mt-32 text-2xl">
        <span className="font-bold">SPORTSMATCH</span> te permite registrar en alguno de estos 6 deportes.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {deportes.map((deporte) => (
          <div key={deporte.nombre} className="flex flex-col items-center">
            <div className={`border-8 ${deporte.color} w-48 h-48 relative transform rotate-45 overflow-hidden`}>
              <img
                src={deporte.imagen}
                alt={deporte.nombre}
                className="absolute top-0 left-0 w-full h-full object-cover scale-[1.5] transform -rotate-45"
              />
            </div>
            <span className="text-3xl mt-16">{deporte.nombre}</span>
          </div>
        ))}
      </div>
      <p className="mt-32 text-5xl font-bold">
        ¡Descárgate ya la app y persigue tu primer Match!
      </p>
    </section>
  );
}

export default Section2;