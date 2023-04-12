import { useContext, useEffect } from 'react'
import { MyAccordion } from '../../components/Accordion'
import { Principles } from '../../components/Principles'
import { AppContext } from '../../context/AppContext'
import { SyntaxHighlighterStyle } from '../ClickedComponent/styles'
import {
  CardsMainContentOne,
  ContentFooter,
  ContentTwoCard,
  IsolatedButtons,
  MainContainer,
  MainContentOne,
  MainContentTwo,
  MainFooterContent,
  MidContent,
} from './styles'
import {
  coldarkDark,
  coldarkCold,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CookiesModal } from '../../components/CookiesModal'
import { NavLink } from 'react-router-dom'
import templateImg from '../../assets/templates-image/openxbi-initial-template.png'
import templateImg2 from '../../assets/templates-image/openxbi-cloud-costs.png'
import { LanguageContents } from '../../components/CodeArea/styles'
import { HomeCreateComponent } from '../../components/HomeCreateComponent'

export function Home() {
  document.title = 'OpenXBI | Home'
  const { themeValue, contentsNames, setCode, code, cookiesAccept, setCookiesAccept, user, languageSelect } =
    useContext(AppContext)

  const daxCode = `measure_received_gross = 

var received_gross = FORMAT(25459234, CURRENCY)
var tshirt_value = FORMAT(10183693, CURRENCY)
var tshir_percent = 0.35
var pants_value = FORMAT(12729617, CURRENCY)
var pants_percent = 0.50

return 
"
<div class='card-container'>
    <div class=card-content>
        <div class=received-gross> <!-- Título recebido bruto -->
            <strong>Received gross</strong>
            <p>"&received_gross&"</p> <!-- Valor do recebido bruto -->
        </div>
        <strong class=strong-only>Received by category</strong>
        <div class=category-name-value>
            <strong>T-shirt</strong>
            <p>"&tshirt_value&"</p> <!-- Valor em T-Shirt -->
        </div>
        <div class=bar-progress1>
            <div class=back-bar>bar-back</div>
            <div class=front-bar>"&tshirt_percent&"</div> <!-- % em T-Shirt -->
        </div>
        <div class=category-name-value>
            <strong>Pants</strong>
            <p>"&pants_value&"</p> <!-- Valor em Pants -->
        </div>
        <div class=bar-progress2>
            <div class=back-bar2>bar-back</div>
            <div class=front-bar2>"&pants_percent&"</div>  <!-- % em Pants -->
        </div>
    </div>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');


* {
    font-family: 'Inter', sans-serif;
    margin: 0;
    box-sizing: border-box;
}

.card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
}

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex;
    
    padding: 1rem;
    margin: .5rem;
    height: auto;
    width: 250px;
    
    background: white; /* Background do card principal */
    
    border-radius: 11px; /* Raio da borda */
    border: 1px solid rgba(136, 136, 136, 0.1);
    box-shadow: 1px 1px 2px 1px rgba(133, 133, 133, 0.1);
}
/* RECEIVED GROSS STYLES */
.received-gross {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.received-gross strong {
    font-size: 1rem;
}

.received-gross p {
    margin: .3rem 0 1rem 0;
}
/* Category */
.strong-only {
    font-size: .875rem;
    color: rgb(1, 3, 116); /* Cor do Título das categorias */
    margin-bottom: .5rem;
} 

.category-name-value {
    display: flex;
    justify-content: space-between;
    margin-bottom: .5rem;
}

.category-name-value p {
    font-size: 0.875rem;
}

.bar-progress1, .bar-progress2 {
    display: flex;
    margin-bottom: 1rem;
}

.back-bar, 
.back-bar2 {
    --bar-width: 216px;
    color: transparent;
    background: rgb(255, 237, 237); /* Cor de fundo da barra */
    max-width: var(--bar-width);
    width: 100%;
    border-radius: 4px;
}

.front-bar, 
.front-bar2 {
    position: absolute;
    font-size: .7rem; /* Tamanho da fonte da porcentagem */
    margin: .2rem;
    text-align: center;
    color: white; /* Cor da porcentagem */
    border-radius: 4px;
    animation-fill-mode: forwards;
    animation-delay: 1s;
}

.front-bar {
    animation: anim1 1.5s forwards; /* 1.5s é o tempo da animação */
    background: #141414; /* Cor da barra 1 */
}

.front-bar2 {
    animation: anim2 1.5s forwards;
    background: #FF8C00; /* Cor da barra 2 */
}

@keyframes anim1 {
    0% { width: 0;}
    100% { width: calc(0.35 * 210px); } /* Barra 1: Altere o 0.35 pela sua porcentagem */
}

@keyframes anim2 {
    0% { width: 0;}
    100% { width: calc(0.5 * 210px); } /* Barra 2: Altere o 0.5 pela sua porcentagem */
}


</style>

  "
  `
  useEffect(() => {
    setCode('<div></div>')
  }, [])

  const htmlCode = `<!-- Componente OpenXBI, ajude-nos compartilhando nossa plataforma -->
<!-- https://openxbi.com.br -->
<div class='align-card'>
    <div class='card-acessibility'>
        <div class='card-info-hover'>
            <strong>Net value</strong> <!-- Título -->
            <p>$ 1.456.234,09</p> <!-- Valor -->
        </div>
    </div>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

* {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif; /* Font Inter, remova para exibir font nativa do PowerBI - SegoeUI */
}

.align-card, .card-acessibility, .card-info-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.card-acessibility {
    flex-direction: column;
    
    height: 120px; /* Altura do card */
    max-width: 200px; /* Largura máxima do card */
    width: 100%; /* largura automática */
      
    margin-top: 1rem; /* Margem top */
    
    background: white; /* Cor de fundo do card */
    
    border: 1px solid rgba(136, 136, 136, 0.1);
    box-shadow: 0px 0px 2px 1px rgba(133, 133, 133, 0.1);
    border-radius: 11px; /* Raio da borda */
    
    transition: .3s ease-in-out;
}

.card-acessibility p {
    margin-top: .8rem; /* Margin do top do texto */
}

.card-info-hover {
    flex-direction: column;
}

.align-card:hover .card-acessibility {
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 1);
    transform: scale(1.04); /* Tamanho da escala do elemento ao posicionar mouse */
}

</style>`

  useEffect(() => {
    const cookies = localStorage.getItem('cookies-accept')
    if (cookies === null) {
      setCookiesAccept(null)
    }
  }, [])

  return (
    <MainContainer variant={themeValue}>
      {cookiesAccept === null ? <CookiesModal /> : null}
      <MainContentOne>

        <h1>{languageSelect === 'pt' ? 'Potencialize seu BI com componentes personalizáveis' : 'Power your BI with customizable components'} </h1>
        <strong>
          {languageSelect === 'pt' ? 'Crie ou obtenha componentes para BI, flexivéis e personalizáveis para suas necessidades de análise de dados, usando uma combinação de HTML e CSS com a linguagem DAX' :
            'Create or get flexible and customizable BI components for your data analysis needs using a combination of HTML and CSS with the DAX Language'}
        </strong>
        <CardsMainContentOne>
          <div>
            <iframe
              src={contentsNames[5]}
              frameBorder={0}
              height={300}

            ></iframe>
          </div>
          <div>
            <iframe
              src={contentsNames[8]}
              frameBorder={0}
              height={300}
            ></iframe>
          </div>
          <div>
            <iframe
              src={contentsNames[13]}
              frameBorder={0}
              height={300}
              width={340}
            ></iframe>
          </div>
        </CardsMainContentOne>
        <IsolatedButtons variant={themeValue}>
          <button>
            <NavLink to={"/components"}>Components</NavLink>
          </button>
          <button>
            <NavLink to={user === null ? "/sign-in" : "/profile"}>
              + Create your component
            </NavLink>
          </button>
        </IsolatedButtons>
        <MainContentTwo>
          {languageSelect === 'pt' ? <>
            <ContentTwoCard>
              <h3>Estilizando</h3>
              <p>
                O OpenXBI busca revolucionar a maneira como criamos e estilizamos
                interfaces para BI utilizando HTML e CSS.{' '}
                <strong>
                  A iniciativa nasceu ao perceber um potencial ao incorporar
                  dentro do componente, inteligência a partir do uso de medidas e
                  variáveis DAX.
                </strong>
              </p>
            </ContentTwoCard>
            <ContentTwoCard>
              <h3>Conhecimento compartilhado</h3>
              <p>
                Buscamos entregar para comunidade componentes comentados, para que
                usuários possam aproveitar o máximo do componente, personalizando para sua necessidade, utilizando os
                componentes não somente para sua finalidade visual, mas também
                como forma de aprendizado.
              </p>
            </ContentTwoCard> </> :
            <>
              <ContentTwoCard>
                <h3>Styling</h3>
                <p>
                  OpenXBI seeks to revolutionize the way we create and style interfaces for BI using HTML and CSS.{' '}
                  <strong>
                    The initiative was born out of the realization of the potential to incorporate intelligence into the component by using DAX
                    measures and variables.
                  </strong>
                </p>
              </ContentTwoCard>
              <ContentTwoCard>
                <h3>Shared knowledge</h3>
                <p>
                  We seek to deliver commented components to the community, so that
                  users can make the most of the component, customizing it to their needs, using the
                  components not only for their visual purpose, but also
                  as a way of learning.
                </p>
              </ContentTwoCard>
            </>
          }
        </MainContentTwo>
        <MidContent>
          <div>
            <h1>#FREE</h1><h1>#UX</h1><h1>#BI</h1>
          </div>
        </MidContent>
        <MainFooterContent>
          {languageSelect === 'pt' ?
            <>
              <div>
                <h2>Experimente</h2>
              </div>

              <h3>Código comentado</h3>
              <p>
                Os componentes são comentados para auxiliar novos usuários na
                personalização e aprendizagem.
              </p></>
            :
            <>
              <div>
                <h2>Try it out</h2>
              </div>
              <h3>Commented code</h3>
              <p>
                The components are commented to assist new users in customization and learning.
              </p>
            </>}
          <SyntaxHighlighterStyle
            variant={themeValue}
            language="html"
            style={themeValue === 'light' ? coldarkCold : coldarkDark}
            showLineNumbers
            wrapLines
          >
            {htmlCode}
          </SyntaxHighlighterStyle>
          {languageSelect === 'pt' ? <>
            <h3>DAX</h3>
            <p>Incorpore a linguagem DAX a um componente.</p>
          </> : <>
            <h3>DAX</h3>
            <p>Embed the DAX language into a component.</p>
          </>}

          <SyntaxHighlighterStyle
            variant={themeValue}
            language="dax"
            style={themeValue === 'light' ? coldarkCold : coldarkDark}
            showLineNumbers
            wrapLines
          >
            {daxCode}
          </SyntaxHighlighterStyle>

          <ContentFooter variant={themeValue}>
            <h2>Templates</h2>
            {languageSelect === 'pt' ? <p>Experimente também alguns templates com componentes pré-configurados.</p> : <p>Also try out some templates with preconfigured components.</p>}
            <div>
              <img src={templateImg} alt="" />
              <img src={templateImg2} alt="" />
            </div>
            <IsolatedButtons variant={themeValue}>
              <button>
                <NavLink to={"/templates"}>Templates</NavLink>
              </button>
            </IsolatedButtons>
          </ContentFooter>
        </MainFooterContent>
      </MainContentOne>
      {/* <HomeCreateComponent /> */}
      <Principles />
    </MainContainer>
  )
}
