import { useContext } from 'react'
import { MyAccordion } from '../../components/Accordion'
import { AppContext } from '../../context/AppContext'
import {
  CardsMainContentOne,
  ContentTwoCard,
  MainContainer,
  MainContentOne,
  MainContentTwo,
} from './styles'

export function Home() {
  document.title = 'OpenXBI | Home'
  const { themeValue, contentsNames } = useContext(AppContext)

  return (
    <MainContainer variant={themeValue}>
      <MainContentOne>
        <h1>Inteligência aplicada a componentes para BI</h1>
        <strong>
          Nós utilizamos componentes estilizados com HTML e CSS, incorporando
          variáveis e medidas DAX, <br />
          para um experiência excepcional.
        </strong>
        <CardsMainContentOne>
          <div>
            <iframe
              src={contentsNames[2]}
              frameBorder={0}
              height={300}
            ></iframe>
          </div>
          <div><iframe
              src={contentsNames[1]}
              frameBorder={0}
              height={300}
            ></iframe></div>
          <div><iframe
              src={contentsNames[0]}
              frameBorder={0}
              height={300}
            ></iframe></div>
        </CardsMainContentOne>
        <MainContentTwo>
          <ContentTwoCard>
            <h3>Estilizando</h3>
            <p>
              O OpenXBI busca revolucionar a maneira como criamos e estilizamos
              interfaces utilizando HTML e CSS.{' '}
              <strong>
                A iniciativa nasceu ao perceber um potencial ao incorporar
                dentro da estilização, inteligência a partir do uso de medidas e
                variáveis DAX, tornando o processo mais rápido, eficiente e
                intuitivo.
              </strong>
            </p>
          </ContentTwoCard>
          <ContentTwoCard>
            <h3>Compartilhando</h3>
            <p>
              Estamos empenhados em entregar uma experiência excepcional aos
              usuários de dashboards, oferecendo suporte e recurso pronto para
              uso, para que possam aproveitar o máximo a plataforma. Com uma
              abordagem diferente para BI, estamos prontos para uma revolução no
              design de interfaces.
            </p>
          </ContentTwoCard>
        </MainContentTwo>
        <h1>#FREE  #UX #BI</h1>
        <MyAccordion />
        <div>
          <h2>Experimente</h2>
          <p>Pratique com os componentes prontos, substitua os valores  <br />com variáveis,
          experimente criar seus próprios componentes. </p>
        </div>
        
      </MainContentOne>
    </MainContainer>
  )
}
