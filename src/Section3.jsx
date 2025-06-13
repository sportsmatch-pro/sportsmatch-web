import React from "react";

const Section3 = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Por qué elegir SportsMatch?</h2>
        <p className="text-gray-600 mb-8">
          Nuestra plataforma facilita la conexión entre deportistas y la gestión de partidos de manera rápida y eficiente.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Organiza</h3>
            <p className="text-gray-600">Crea partidos y gestiona horarios fácilmente.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Conecta</h3>
            <p className="text-gray-600">Encuentra y únete a otros deportistas según tu nivel y ubicación.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Disfruta</h3>
            <p className="text-gray-600">Juega, mejora y diviértete con tu comunidad deportiva.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;