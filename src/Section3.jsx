import React from "react";

const Section3 = () => {
  return (
    <section className="bg-gray-900 min-h-screen py-32 px-8">
      <div className="max-w-full mx-auto text-center w-full h-full">
        <h2 className="text-5xl font-bold text-white mb-10">¿Quieres saber más?</h2>
        <form className="space-y-8 text-left max-w-7xl mx-auto">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="w-full bg-gray-800 text-white rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            className="w-full bg-gray-800 text-white rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            className="w-full bg-gray-800 text-white rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="mensaje"
            rows="4"
            placeholder="Mensaje"
            className="w-full bg-gray-800 text-white rounded-md px-4 py-3 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <label className="flex items-center space-x-2 text-gray-300">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 bg-gray-800 rounded focus:ring-2 focus:ring-blue-500" />
            <span>Acepto las condiciones</span>
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
};

export default Section3;