function Section1({ title, text, image, imageAlt, imagePosition, background, textColor }) {
  const img = new URL(image, import.meta.url).href;

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
        <div className="md:w-1/2 w-full p-4">
          <img src={img} alt={imageAlt} className="w-full rounded-lg object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Section1;