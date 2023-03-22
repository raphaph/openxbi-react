import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ClickedComponent } from './pages/ClickedComponent'
import { Home } from './pages/Home'
import { PageComponents } from './pages/PageComponents'
import { Templates } from './pages/Templates'
import { Introduction } from './pages/@docs-1-Introduction'
import { GettingStarted } from './pages/@docs-2-GettingStarted'
import { EmbeddingDax } from './pages/@docs-3-EmbeddingDax'
import { DaxFormatting } from './pages/@docs-4-DaxFormatting'
import { ConditionalDax } from './pages/@docs-5-Conditional'
import { IteratingDax } from './pages/@docs-6-IteratingWithDax'


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
        <Route path="/docs/embedding-dax" element={<EmbeddingDax />} />
        <Route path="/docs/dax-formating" element={<DaxFormatting />} />
        <Route path="/docs/conditional-in-code" element={<ConditionalDax />} />
        <Route path="/docs/iterating-with-dax" element={<IteratingDax />} />
      </Route>
    </Routes>
  )
}
