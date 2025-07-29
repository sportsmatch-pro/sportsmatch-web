import { useState } from "react";
import LanguageSelector from "./languageSelector";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <header className="bg-white shadow-sm hidden lg:block fixed top-0 left-0 w-full z-50">
      <div className="w-full px-4 py-6 flex items-center justify-between">
        <div className="flex-1 flex items-center space-x-6 text-base text-gray-800 justify-start ml-0">
          <a href="#" className="hover:underline">Tu sueño, a tu alcance</a>
          <a href="#" className="font-bold underline">Encuentra a tu próxima estrella</a>
        </div>

        <div className="flex justify-center flex-shrink-0">
          <img src="/assets/logo.png" alt="SportsMatch Logo" className="h-12" />
        </div>

        <div className="flex-1 flex items-center justify-end space-x-4 text-base mr-4">
          <LanguageSelector />
          <a href="#" className="">Blog</a>
          <button className="bg-gray-800 text-white px-4 py-1 rounded-full">Pregúntanos</button>
        </div>
      </div>
    </header>
    <header className="bg-white shadow-sm lg:hidden">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        <img src="/assets/logo.png" alt="SportsMatch Logo" className="h-10" />

        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <button className="bg-gray-800 text-white px-3 py-1 rounded-full">Pregúntanos</button>
          <button
            className="text-gray-800 text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-start space-y-4 mt-4 px-4 text-gray-800 text-lg">
          <a href="#" className="hover:underline">Tu sueño, a tu alcance</a>
          <a href="#" className="hover:underline">Encuentra a tu próxima estrella</a>
          <a href="#" className="hover:underline">Blog</a>
        </div>
      )}
    </header>
    </>
  );
}

export default Navbar;