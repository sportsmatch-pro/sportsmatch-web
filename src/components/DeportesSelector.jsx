import { useTranslation } from "react-i18next";

// TODO: Canviar el nom del component per un que sigui més descriptiu
function Section2() {
  const { t } = useTranslation();

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
      <h2 className="text-8xl font-bold mb-32 mt-0">{t("Which is your sport?")}</h2>
      <span className="mb-32 mt-32 text-2xl">
        <span className="text-2xl font-normal">
          {t("SPORTSMATCH allows you to register in one of these 6 sports.", { strong: (chunks) => <span className='font-bold'>{chunks}</span> })}
        </span>
      </span>
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
        {t("Download the app and start your journey.")}
      </p>
    </section>
  );
}

export default Section2;