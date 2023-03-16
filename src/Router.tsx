import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ClickedComponent } from './pages/ClickedComponent'
import { GettingStarted } from './pages/Documentation/2.GettingStarted'
import { Introduction } from './pages/Documentation/1.Introduction'
import { Home } from './pages/Home'
import { PageComponents } from './pages/PageComponents'
import { Templates } from './pages/Templates'
import { DaxFormating } from './pages/Documentation/DaxFormating'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<PageComponents />} />
        <Route path="/componentCode" element={<ClickedComponent />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/docs/introduction" element={<Introduction />} />
        <Route path="/docs/getting-started" element={<GettingStarted />} />
        <Route path="/docs/dax-formating" element={<DaxFormating />} />
      </Route>
    </Routes>
  )
}
