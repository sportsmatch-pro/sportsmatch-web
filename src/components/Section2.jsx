// TODO: Canviar el nom del component per un que sigui més descriptiu
function Section2() {

  const deportes = [
    { nombre: "Fútbol", color: "border-green-500", imagen: "./../assets/futbolsection2.png" },
    { nombre: "Baloncesto", color: "border-orange-500", imagen: "./../assets/basketsection2.png" },
    { nombre: "Hockey", color: "border-yellow-500", imagen: "./../assets/hockeysection2.png" },
    { nombre: "Fútbol sala", color: "border-blue-500", imagen: "./../assets/futbolsalasection2.png" },
    { nombre: "Voleibol", color: "border-pink-500", imagen: "./../assets/voleibolsection2.png" },
    { nombre: "Balonmano", color: "border-purple-600", imagen: "./../assets/balonmanosection2.png" },
  ];

  return (
    <section className="snap-center snap-mandatory w-screen min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-8xl font-bold mb-32 mt-0">¿Cuál es tu deporte?</h2>
      <p className="mb-32 mt-32 text-2xl">
        <span className="font-bold">SPORTSMATCH</span> te permite registrar en alguno de estos 6 deportes.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {deportes.map((deporte) => (
          <div key={deporte.nombre} className="flex flex-col items-center">
            <div className={`border-8 ${deporte.color} w-48 h-48 relative transform rotate-45 overflow-hidden`}>
              <img
                src={new URL(deporte.imagen, import.meta.url).href}
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