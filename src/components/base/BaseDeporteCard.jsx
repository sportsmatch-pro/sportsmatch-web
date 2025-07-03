export default function BaseDeporteCard({ nombre, color, imagen }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`border-8 ${color} w-48 h-48 relative rotate-45 overflow-hidden rounded-lg`}
        style={{ boxSizing: "border-box" }}
      >
        <img
          src={imagen}
          alt={nombre}
          className="absolute inset-0 w-full h-full object-cover scale-[1.5] -rotate-45"
          draggable={false}
        />
      </div>
      <span className="text-3xl mt-16 font-semibold select-none">{nombre}</span>
    </div>
  );
}