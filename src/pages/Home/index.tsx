import { useContext } from 'react'
import { MyAccordion } from '../../components/Accordion'
import { AppContext } from '../../context/AppContext'
import {
  CardsMainContentOne,
  ContentTwoCard,
  ImageCodes,
  MainContainer,
  MainContentOne,
  MainContentTwo,
  MainFooterContent,
  MidContent,
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
          <div>
            <iframe
              src={contentsNames[1]}
              frameBorder={0}
              height={300}
            ></iframe>
          </div>
          <div>
            <iframe
              src={contentsNames[0]}
              frameBorder={0}
              height={300}
            ></iframe>
          </div>
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
        <MidContent>
          <MyAccordion />
          <h1>#FREE #UX #BI</h1>
        </MidContent>
        <MainFooterContent>
          <div>
            <h2>Experimente</h2>
            <p>
              Pratique com nossos componentes prontos e #free, substitua os
              valores <br />
              com variáveis, experimente criar seus próprios componentes,
              descubra novas possibilidades.{' '}
            </p>
          </div>
          <ImageCodes>
            <div>
              <h3>Código comentado para auxiliar novos usuários</h3>
              <img
                src={
                  themeValue === 'light'
                    ? 'src/assets/code-light.png'
                    : 'src/assets/code-dark.png'
                }
                alt=""
              />
            </div>
            <div>
              <h3>
                Utilize variáveis e medidas DAX dentro do código
              </h3>
              <img
                src={
                  themeValue === 'light'
                    ? 'src/assets/dax-light.png'
                    : 'src/assets/dax-dark.png'
                }
                alt=""
              />
            </div>
          </ImageCodes>
        </MainFooterContent>
      </MainContentOne>
    </MainContainer>
  )
}
