import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ClickedComponent } from './pages/ClickedComponent'
import { Home } from './pages/Home'
import { PageComponents } from './pages/PageComponents'
import { Templates } from './pages/Templates'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<PageComponents />} />
        <Route path="/componentCode" element={<ClickedComponent />} />
        <Route path="/templates" element={<Templates />} />
      </Route>
    </Routes>
  )
}
