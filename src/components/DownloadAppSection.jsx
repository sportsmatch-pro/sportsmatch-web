import { useTranslation } from "react-i18next";
import {
  FaApple,
  FaGooglePlay,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function DownloadAppSection() {
  const { t } = useTranslation();

  return (
    <section
      aria-label={t("Download app and social media links")}
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url("/assets/section4-bg.jpg")` }}
    >
      {/* Blurred dark background */}
      <div
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg brightness-75"
        style={{ backgroundImage: `url("/assets/section4-bg.jpg")` }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center text-white px-4 md:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          {t("Available on:")}
        </h2>

        <nav
          aria-label={t("App download platforms")}
          className="flex justify-center space-x-6 sm:space-x-8 md:space-x-12 mb-6"
        >
          <FaApple
            role="img"
            aria-label="App Store"
            className="text-4xl sm:text-5xl md:text-7xl"
            tabIndex={0}
          />
          <FaGooglePlay
            role="img"
            aria-label="Google Play"
            className="text-4xl sm:text-5xl md:text-7xl"
            tabIndex={0}
          />
        </nav>

        <p className="text-lg sm:text-xl md:text-2xl mt-6 mb-4">{t("Follow us on:")}</p>

        <nav
          aria-label={t("Social media links")}
          className="flex justify-center space-x-6 sm:space-x-8 md:space-x-10"
        >
          <FaInstagram
            role="img"
            aria-label="Instagram"
            className="text-3xl sm:text-4xl md:text-4xl"
            tabIndex={0}
          />
          <FaTiktok
            role="img"
            aria-label="TikTok"
            className="text-3xl sm:text-4xl md:text-4xl"
            tabIndex={0}
          />
          <FaFacebookF
            role="img"
            aria-label="Facebook"
            className="text-3xl sm:text-4xl md:text-4xl"
            tabIndex={0}
          />
          <FaLinkedinIn
            role="img"
            aria-label="LinkedIn"
            className="text-3xl sm:text-4xl md:text-4xl"
            tabIndex={0}
          />
        </nav>
      </div>
    </section>
  );
}
