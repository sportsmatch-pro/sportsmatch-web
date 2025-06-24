import { useState } from "react";
// TODO: Canviar el nom del component per un que sigui més descriptiu
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
          <h2 className={`text-7xl font-bold mb-4 ${textClass}`}>{title}</h2>
          <p className={`text-3xl ${textClass}`}>{text}</p>
        </div>
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src={new URL(images[current], import.meta.url).href} alt="carousel" className="w-full h-full object-cover" />
          <button onClick={prev} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">&lt;</button>
          <button onClick={next} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">&gt;</button>
        </div>
      </div>
    </section>
  );
}

export default Section1;