import { useState } from "react";

function Section1({ title, text, imagePosition, background, textColor }) {
  const [current, setCurrent] = useState(0);
  const images = [
    "futbol1.png",
    "basket1.png",
    "hockey1.png",
    "futsal1.png",
    "volei1.png",
    "balonmano1.png"
  ];

  const imgSrc = new URL(`./assets/${images[current]}`, import.meta.url).href;

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  const flexDirection = imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row";
  const bgClass = background === "black" ? "bg-black" : "bg-white";
  const textClass = textColor === "white" ? "text-white" : "text-black";

  return (
    <section className={`${bgClass} py-16 px-6`}>
      <div className={`max-w-6xl mx-auto flex flex-col ${flexDirection} items-center justify-between`}>
        <div className="md:w-1/2 w-full p-4">
          <h2 className={`text-4xl font-bold mb-4 ${textClass}`}>{title}</h2>
          <p className={`text-lg ${textClass}`}>{text}</p>
        </div>
        <div className="md:w-1/2 w-full relative overflow-hidden">
          <img src={imgSrc} alt="carousel" className="w-full h-full object-cover" />
          <button onClick={prev} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">&lt;</button>
          <button onClick={next} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">&gt;</button>
        </div>
      </div>
    </section>
  );
}

export default Section1;