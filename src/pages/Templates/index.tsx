import { DownloadSimple } from 'phosphor-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { CardFooter, CardMap, HearderTemplate, TemplatesContainer, TemplatesContents, TemplatesMap } from './styles'
import templatesData from '../../api/templates.json'
import { NavLink } from 'react-router-dom'

interface TemplateProps {
  id: string
  public: string
  image: string
  name: string
  path: string
  download: string
  creator: string
}

export function Templates() {
  document.title = 'OpenXBI | Templates'
  const { themeValue, languageSelect, user } = useContext(AppContext)

  const templates: any = templatesData.templates

  return (
    <TemplatesContainer variant={themeValue}>
      <TemplatesContents>
        <HearderTemplate variant={themeValue}>
          {languageSelect === 'pt' ? <><h2>Templates</h2>
            <p>Templates <strong>OpenXBI</strong> possuem componentes já configurados e com algumas medidas ou variáveis DAX incorporadas.</p>
            <p>Há também templates da comunidade disponíveis com prefixo <strong>community</strong>, e podem ou não ter componentes já configurados e incorporado DAX.</p>
            <small>Todos os dados utilizados em Templates são aleatórios e fictícios, e podem não ser dinâmicos.</small>
          </> : <><h2>Templates</h2>
            <p><strong>OpenXBI</strong> templates come with preconfigured components and some embedded DAX measures or variables.</p>
            <p>There are also community templates available with the prefix <strong>community</strong>, which may or may not have preconfigured components and embedded DAX.</p>
            <small>All data used in Templates is random and fictitious and may not be dynamic.</small>
          </>
          }
        </HearderTemplate>
        <TemplatesMap>
          {templates.map((template: TemplateProps) => {
            return (
              <CardMap key={template.id} variant={themeValue}>
                {user === null ? <a onClick={() => alert(`${languageSelect === 'pt' ? 'Acesse sua conta para poder visualizar e copiar o código.🚀' : 'Login to your account to view and copy the code.🚀'}`)} rel="noreferrer">
                  <img src={template.image} alt={template.name} />
                </a> :
                  <a href={template.public} target={'_blank'} rel="noreferrer">
                    <img src={template.image} alt={template.name} />
                  </a>}
                <CardFooter>
                  <strong>{template.name}</strong>
                  {user === null ? <button onClick={() => alert(`${languageSelect === 'pt' ? 'Acesse sua conta para poder visualizar e copiar o código.🚀' : 'Login to your account to view and copy the code.🚀'}`)}>
                    <NavLink to="">
                      <DownloadSimple />
                      Download</NavLink>
                  </button> :
                    <button>
                      <NavLink to={template.download} target={'_blank'}>
                        <DownloadSimple />
                        Download</NavLink>
                    </button>}
                </CardFooter>
              </CardMap>
            )
          })}
        </TemplatesMap>
      </TemplatesContents>
    </TemplatesContainer>
  )
}