import { DownloadSimple } from 'phosphor-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { CardFooter, CardMap, HearderTemplate, TemplatesContainer, TemplatesContents, TemplatesMap } from './styles'

export function Templates() {
  document.title = 'OpenXBI | Templates'
  const { themeValue } = useContext(AppContext)

  const templates = [{
    id: 1,
    name: "openxbi-initial-template",
    path: "src/pbix/openxbi-templates.zip",
    download: "openxbi-templates.zip",
    image: "src/assets/templates-image/openxbi-initial-template.png"
  }
  ]

  return (
    <TemplatesContainer variant={themeValue}>
      <TemplatesContents>
        <HearderTemplate variant={themeValue}>
          <h2>Templates</h2>
          <p>Templates <strong>OpenXBI</strong> possum componentes já configurados e com algumas medidas ou variáveis DAX incorporadas.</p>
          <p>Há também templates da comunidade disponíveis com prefixo <strong>community</strong>, e podem ou não ter componentes já configurados e incorporado DAX.</p>
        </HearderTemplate>
        <TemplatesMap>
          {templates.map(template => {
            return (
              <CardMap key={template.id}>
                <img src={template.image} alt={template.name} />
                <CardFooter>
                  <strong>{template.name}</strong>
                  <button>
                    <a href="src/pbix/openxbi-templates.zip" download={"openxbi-templates.zip"}><DownloadSimple />
                      Download</a>
                  </button>
                </CardFooter>
              </CardMap>
            )
          })}
        </TemplatesMap>
      </TemplatesContents>
    </TemplatesContainer>
  )
}