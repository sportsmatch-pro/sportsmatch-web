import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// src/NotFound.jsx
export default function NotFound() {
    const { t } = useTranslation();
    return (
    <>
      <Navbar />
        <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">{t('404 - Page not found.')}</h1>
        </div>
      <Footer />
    </>
    )
}