import { useTranslation } from "react-i18next";
import BaseDeporteCard from "./base/BaseDeporteCard";
import BaseSectionTitle from "./base/BaseSectionTitle";
import BaseParagraph from "./base/BaseParagraph";

function DeportesSelector() {
  const { t } = useTranslation();

  const deportes = [
    { nombre: "Fútbol", color: "border-green-500", imagen: new URL("./../assets/futbolsection2.png", import.meta.url).href },
    { nombre: "Baloncesto", color: "border-orange-500", imagen: new URL("./../assets/basketsection2.png", import.meta.url).href },
    { nombre: "Hockey", color: "border-yellow-500", imagen: new URL("./../assets/hockeysection2.png", import.meta.url).href },
    { nombre: "Fútbol sala", color: "border-blue-500", imagen: new URL("./../assets/futbolsalasection2.png", import.meta.url).href },
    { nombre: "Voleibol", color: "border-pink-500", imagen: new URL("./../assets/voleibolsection2.png", import.meta.url).href },
    { nombre: "Balonmano", color: "border-purple-600", imagen: new URL("./../assets/balonmanosection2.png", import.meta.url).href },
  ];

  return (
    <section className="snap-center snap-mandatory w-screen min-h-screen flex flex-col items-center justify-center bg-white">
      <BaseSectionTitle className="mt-48 mb-2">{t("Which is your sport?")}</BaseSectionTitle>

      <BaseParagraph className="mt-[-12px]">
        {t("SPORTSMATCH allows you to register in one of these 6 sports.", {
          strong: (chunks) => <span className="font-bold">{chunks}</span>,
        })}
      </BaseParagraph>

      <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:justify-center sm:gap-12">
        {deportes.map((deporte) => (
          <BaseDeporteCard
            key={deporte.nombre}
            nombre={deporte.nombre}
            color={deporte.color}
            imagen={deporte.imagen}
          />
        ))}
      </div>

      <BaseParagraph className="mt-12 text-5xl font-bold max-w-3xl text-center">
        {t("Download the app and start your journey.")}
      </BaseParagraph>
    </section>
  );
}

export default DeportesSelector;
