import { DownloadSimple } from 'phosphor-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { CardFooter, CardMap, HearderTemplate, TemplatesContainer, TemplatesContents, TemplatesMap } from './styles'
import templatesData from '../../api/templates.json'
import { saveAs } from 'file-saver';

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
  const { themeValue } = useContext(AppContext)

  const templates: any = templatesData.templates

  function handleDownload(name: string, path: string) {
    const file = new File([""], name, { type: "application/octet-stream", lastModified: Date.now() });
    saveAs(file, path);
  }

  return (
    <TemplatesContainer variant={themeValue}>
      <TemplatesContents>
        <HearderTemplate variant={themeValue}>
          <h2>Templates</h2>
          <p>Templates <strong>OpenXBI</strong> possuem componentes já configurados e com algumas medidas ou variáveis DAX incorporadas.</p>
          <p>Há também templates da comunidade disponíveis com prefixo <strong>community</strong>, e podem ou não ter componentes já configurados e incorporado DAX.</p>
        </HearderTemplate>
        <TemplatesMap>
          {templates.map((template: TemplateProps) => {
            return (
              <CardMap key={template.id} variant={themeValue}>
                <a href={template.public} target={'_blank'} rel="noreferrer">
                  <img src={template.image} alt={template.name} />
                </a>
                <CardFooter>
                  <strong>{template.name}</strong>
                  <button onClick={() => handleDownload(template.name, template.path)}>
                    <a href={template.path} ><DownloadSimple />
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