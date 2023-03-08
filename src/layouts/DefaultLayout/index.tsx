import { Outlet } from 'react-router-dom' // o outlet é um espaço para ser inserido um conteúdo
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Outlet />
        <Footer />
      </LayoutContainer>
    </div>
  )
}
