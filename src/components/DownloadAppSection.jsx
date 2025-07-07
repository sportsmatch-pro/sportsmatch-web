import section4Bg from "./../assets/section4-bg.jpg";
import { FaApple, FaGooglePlay, FaInstagram, FaTiktok, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function DownloadAppSection() {
  return (
    <div
      className="w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${section4Bg})` }}
    >
      <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden mb-0">
        {/* Fondo desenfocado */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg brightness-75"
          style={{ backgroundImage: `url(${section4Bg})` }}
          aria-hidden="true"
        />
        {/* Contenido principal */}
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">Ya disponible en:</h2>
          <div className="flex justify-center space-x-12 mb-6">
            <FaApple className="text-7xl" aria-label="App Store" />
            <FaGooglePlay className="text-7xl" aria-label="Google Play" />
          </div>
          <p className="text-2xl mt-10 mb-4">Síguenos en:</p>
          <div className="flex justify-center space-x-10">
            <FaInstagram className="text-4xl" aria-label="Instagram" />
            <FaTiktok className="text-4xl" aria-label="TikTok" />
            <FaFacebookF className="text-4xl" aria-label="Facebook" />
            <FaLinkedinIn className="text-4xl" aria-label="LinkedIn" />
          </div>
        </div>
      </section>
    </div>
  );
}
