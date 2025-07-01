import { useState } from "react";
import { useTranslation } from "react-i18next";
import BaseCarouselButton from "./base/BaseCarouselButton";

function Section1(props) {
  
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + props.images.length) % props.images.length);
  const next = () => setCurrent((current + 1) % props.images.length);

  const flexDirection = props.imagePosition === "left" ? "flex-row-reverse" : "flex-row";
  const bgClass = props.background === "black" ? "bg-black" : "bg-white";
  const textClass = props.textColor === "white" ? "text-white" : "text-black";

  return (
    <section className={`${bgClass} w-screen h-screen flex items-center justify-center`}>
      <div className={`flex ${flexDirection} w-full h-full`}>
        <div className="w-1/2 h-full p-8 flex flex-col justify-center">
          <div className={`${textClass} ${props.title === "your dream, within reach" ? "text-center" : ""}`}>
            <h2 className={`text-6xl font-bold mb-12 ${props.title === "your dream, within reach" ? "text-center" : ""}`}>{props.title}</h2>
            <p className={`text-3xl ${props.title === "your dream, within reach" ? "text-center" : "text-left"}`}>{props.text}</p>
          </div>
        </div>
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src={new URL(props.images[current], import.meta.url).href} alt="carousel" className="w-full h-full object-cover" />
          <BaseCarouselButton direction="left" onClick={prev} />
          <BaseCarouselButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}

export default Section1;