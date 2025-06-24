// src/routes.js

// Importa aquí els components que mapejaràs
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
// afegeix més imports si tens més pàgines...

/**
 * pathMap: map de claus de pàgina a la seva ruta per idioma
 * Les claus (home, privacyPolicy, notFound…) són arbitràries; 
 * poden coincidir amb el nom del component o el que prefereixis.
 */
export const pathMap = {
    home: {
        en: '',
        es: '',
        ca: '',
    },
    privacyPolicy: {
        en: 'privacy-policy',
        es: 'politica-de-privacidad',
        ca: 'politica-de-privacitat',
    },
    notFound: {
        en: 'error-404-page-not-found',
        es: 'error-404-pagina-no-encontrada',
        ca: 'error-404-pagina-no-trobada',
    },
    // afegeix més pàgines aquí…
};

/**
 * componentMap: map de la mateixa clau de pàgina al component React
 */
export const componentMap = {
    home: Home,
    privacyPolicy: PrivacyPolicy,
    notFound: NotFound,
    // afegeix més components aquí…
};