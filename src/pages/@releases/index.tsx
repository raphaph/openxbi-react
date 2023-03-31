import { NavDocumentation } from '../../components/NavDocumentation'
import { ReleasesContainer, ReleasesContent, ReleasesText } from './styles'
import { versions } from '../../api/versions.json'
import { AppContext } from '../../context/AppContext'
import { useContext, useEffect } from 'react'

/*O primeiro número (1) representa a versão principal do software. Ele é incrementado sempre que há mudanças significativas que podem afetar a compatibilidade com versões anteriores.
* O segundo número (0) representa a versão secundária do software. Ele é incrementado sempre que há novas funcionalidades ou melhorias que não afetam a compatibilidade com versões anteriores.
* O terceiro número (0) representa a correção de bugs ou problemas menores no software. Ele é incrementado sempre que há correções de erros ou ajustes que não afetam a compatibilidade com versões anteriores. */

export function Releases() {
    document.title = 'OpenXBI | Introduction'
    const { themeValue } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <ReleasesContainer variant={themeValue}>
            <NavDocumentation />
            <ReleasesContent>
                <ReleasesText>
                    <h1>Releases</h1>
                    {versions.map((version) => {
                        return (<>
                            <h2>{version.release}</h2>
                            <p>{version.description} <strong>({version.version})</strong></p>
                            <ul>
                                {version.marks.map(mark => {
                                    return (
                                        <li>{mark.mark}</li>
                                    )
                                })}
                            </ul>
                        </>)
                    })}
                </ReleasesText>
            </ReleasesContent>
        </ReleasesContainer>
    )
}

