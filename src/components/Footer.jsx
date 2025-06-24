import logoFooter from '../assets/logofooter.png';

const Footer = () => {
  return (
    <footer className="bg-[#2e2e2e] text-white py-12 px-4 mt-16">
      <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
      <p className="text-lg mb-6">
        Si tienes dudas o necesitas resolver alguna incidencia, puedes contactarnos en:
      </p>
      <p className="text-2xl font-semibold text-white mb-6">
        info@sportsmatch.pro
      </p>
      <div className="flex justify-center items-center space-x-6 mb-8">
        <img src="https://img.icons8.com/ios-filled/50/25D366/whatsapp--v1.png" alt="WhatsApp" className="h-8" />
        <span className="text-xl">+34 689 47 22 60</span>
        <img src="https://img.icons8.com/ios-filled/50/ffffff/technical-support.png" alt="Soporte" className="h-8" />
      </div>
      <img src={logoFooter} alt="SportsMatch Logo" className="mx-auto h-12 mb-4" />
      <div className="flex justify-center space-x-6 text-sm mb-2">
        <a href="#" className="hover:underline">Aviso legal</a>
        <a href="#" className="hover:underline">Política de privacidad</a>
        <a href="#" className="hover:underline">Política de cookies</a>
      </div>
      <p className="text-xs">©2024. SPORTSMATCH. All rights reserved.</p>
      </div>
    </footer>
    );
};

export default Footer;