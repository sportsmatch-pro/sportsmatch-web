import "./index.css";
import { useEffect } from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Navigate, 
  useParams,
  useLocation
} from 'react-router-dom'
import i18n from './i18n';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { componentMap, pathMap } from './routes';

const supported = Object.keys(i18n.options.resources || {})

function getBrowserLang() {
  const navs = navigator.languages.map(l => l.split('-')[0].toLowerCase())
  return navs.find(lang => supported.includes(lang)) || i18n.options.fallbackLng
}

function LangWrapper() {
  const { lang } = useParams()
  const location = useLocation();

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  // Inject hreflang tags manually
  useEffect(() => {
    // remove old alternate links
    document.querySelectorAll('link[rel="alternate"]').forEach(el => el.remove());
    // determine current page key by matching the second path segment
    const parts = window.location.pathname.split('/');
    const currentSegment = parts[2] || '';
    const pageKey = Object.keys(pathMap).find(
      key => pathMap[key][lang] === currentSegment
    );
    if (pageKey) {
      // add alternates only for other languages, using the correct localized segment
      Object.entries(pathMap[pageKey]).forEach(([l, segment]) => {
        if (l !== lang) {
          const link = document.createElement('link');
          link.rel = 'alternate';
          link.hreflang = l;
          link.href = `${window.location.origin}/${l}/${segment}`;
          document.head.appendChild(link);
        }
      });
    }
  }, [lang, location.pathname]);

  if (lang && !supported.includes(lang)) {
    return <NotFound />
  }

  // Definim aquí totes les rutes tant les compartides com home com les 
  // específiques per a cada idioma
  return (
    <Routes>
      <Route index element={<Home />} />
      {Object.entries(pathMap).map(([pageKey, segments]) => {
        const segment = segments[lang];
        const Component = componentMap[pageKey];
        return segment && Component ? (
          <Route key={pageKey} path={segment} element={<Component />} />
        ) : null;
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${getBrowserLang()}`} replace />} />
        <Route path="/:lang/*" element={<LangWrapper />} />
      </Routes>
    </BrowserRouter>
    
  );
}