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
    <section className={`${bgClass} w-screen lg:h-screen lg:flex items-center justify-center`}>
      <div className={`lg:flex ${flexDirection} w-full lg:h-full`}>
        <div className="lg:w-1/2 h-full p-8 flex flex-col justify-between">
          <div className={`${textClass} ${props.title === "your dream, within reach" ? "text-center" : ""} px-8 py-12`}>
            <h2 className={`text-6xl mb-12 whitespace-pre-line ${props.title === "your dream, within reach" ? "text-center" : ""}`}>
              {props.title}
            </h2>
            <p className={`text-3xl mt-4 ${props.title === "your dream, within reach" ? "text-center" : "text-left"}`}>{props.text}</p>
          </div>
        </div>
        <div className="lg:w-1/2 h-full relative overflow-hidden">
          <img src={new URL(props.images[current], import.meta.url).href} alt="carousel" className="w-full h-full object-cover" />
          <BaseCarouselButton direction="left" onClick={prev} />
          <BaseCarouselButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}

export default Section1;