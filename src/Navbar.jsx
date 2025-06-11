import logo from "./assets/logo.png";

function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Izquierda */}
        <div className="flex items-center space-x-6 text-sm text-gray-800">
          <a href="#" className="hover:underline">Tu sueño, a tu alcance</a>
          <a href="#" className="font-bold underline">Encuentra a tu próxima estrella</a>
        </div>

        {/* Centro: Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="SportsMatch Logo" className="h-10" />
        </div>

        {/* Derecha */}
        <div className="flex items-center space-x-4">
          <select className="border rounded-full px-4 py-1 text-sm">
            <option>ES</option>
            <option>EN</option>
          </select>
          <a href="#" className="text-sm">Blog</a>
          <button className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm">Pregúntanos</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;