import { useState } from "react";
import BaseTextBlock from "./base/BaseTextBlock";
import BaseCarouselButton from "./base/BaseCarouselButton";

function Section1({ title, text, imagePosition, background, textColor, images }) {
  
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  const flexDirection = imagePosition === "left" ? "flex-row-reverse" : "flex-row";
  const bgClass = background === "black" ? "bg-black" : "bg-white";
  const textClass = textColor === "white" ? "text-white" : "text-black";

  return (
    <section className={`${bgClass} w-screen h-screen flex items-center justify-center`}>
      <div className={`flex ${flexDirection} w-full h-full`}>
        <div className="w-1/2 h-full p-8 flex flex-col justify-center">
          <BaseTextBlock title={title} text={text} textColor={textClass} />
        </div>
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src={new URL(images[current], import.meta.url).href} alt="carousel" className="w-full h-full object-cover" />
          <BaseCarouselButton direction="left" onClick={prev} />
          <BaseCarouselButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}

export default Section1;