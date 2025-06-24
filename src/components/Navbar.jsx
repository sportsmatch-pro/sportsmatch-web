import LanguageSelector from "./languageSelector";

function Navbar() {
  const logo = new URL("./../assets/logo.png", import.meta.url).href;
  return (
    <header className="bg-white shadow-sm">
      <div className="w-full px-4 py-6 flex items-center justify-between">
        <div className="flex-1 flex items-center space-x-6 text-base text-gray-800 justify-start ml-0">
          <a href="#" className="hover:underline">Tu sueño, a tu alcance</a>
          <a href="#" className="font-bold underline">Encuentra a tu próxima estrella</a>
        </div>

        <div className="flex justify-center flex-shrink-0">
          <img src={logo} alt="SportsMatch Logo" className="h-12" />
        </div>

        <div className="flex-1 flex items-center justify-end space-x-4 text-base mr-4">
          <LanguageSelector />
          <a href="#" className="">Blog</a>
          <button className="bg-gray-800 text-white px-4 py-1 rounded-full">Pregúntanos</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;