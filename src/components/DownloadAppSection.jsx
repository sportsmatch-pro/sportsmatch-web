import section4Bg from "./../assets/section4-bg.jpg";
import { FaApple, FaGooglePlay, FaInstagram, FaTiktok, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// Canviar el nom al component per a que sigui més descriptiu
export default function Section4() {
  return (
    <div
        className="w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${section4Bg})` }}
      >
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden mb-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg brightness-75"
        style={{ backgroundImage: `url(${section4Bg})` }}
      ></div>

      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-6">Ya disponible en:</h2>
        <div className="flex justify-center space-x-12 mb-6">
          <FaApple className="text-7xl" />
          <FaGooglePlay className="text-7xl" />
        </div>
        <p className="text-2xl mt-10 mb-4">Síguenos en:</p>
        <div className="flex justify-center space-x-10">
          <FaInstagram className="text-4xl" />
          <FaTiktok className="text-4xl" />
          <FaFacebookF className="text-4xl" />
          <FaLinkedinIn className="text-4xl" />
        </div>
      </div>
    </section>
    </div>
  );
}
