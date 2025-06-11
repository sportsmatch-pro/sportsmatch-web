function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1601987077302-3cc0d8f0f0ab?auto=format&fit=crop&w=1600&q=80"
        alt="Fútbol"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 max-w-2xl text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Únete a la primera red social del mercado que conecta jugador@s y profesionales del deporte con clubes deportivos
        </h1>
      </div>
    </section>
  );
}

export default Hero;