import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import LegalPage from './pages/LegalPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="terms" element={<LegalPage slug="terms" />} />
        <Route path="privacy" element={<LegalPage slug="privacy" />} />
        <Route path="refund" element={<LegalPage slug="refund" />} />
        <Route path="cookies" element={<LegalPage slug="cookies" />} />
        <Route path="disclaimer" element={<LegalPage slug="disclaimer" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
