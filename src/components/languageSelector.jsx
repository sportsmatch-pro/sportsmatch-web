// src/components/LanguageSelector.jsx
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation, useParams } from 'react-router-dom'

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { lang } = useParams()

  const handleChange = (e) => {
    const selected = e.target.value.toLowerCase()  // "es","ca" o "en"

    // Construïm la nova ruta: substitueix el primer segment després de "/" per selected
    const segments = location.pathname.split('/')
    // si no hi ha lang a la ruta actual, afegeix-lo
    if (!segments[1]) {
      segments.splice(1, 0, selected)
    } else {
      segments[1] = selected
    }
    const newPath = segments.join('/') || `/${selected}`

    // Navega a la ruta nova; LangWrapper s'encarregarà de fer i18n.changeLanguage
    navigate(newPath, { replace: true })
  }

  return (
    <select
      className="border rounded-full px-4 py-1"
      value={(i18n.language || i18n.options.fallbackLng).toUpperCase()}
      onChange={handleChange}
    >
      <option value="ES">ES</option>
      <option value="CA">CA</option>
      <option value="EN">EN</option>
    </select>
  )
}