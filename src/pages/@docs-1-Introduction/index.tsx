import { NavDocumentation } from '../../components/NavDocumentation'
import { IntroductionContainer, IntroductionContent, IntroText } from './styles'

import { AppContext } from '../../context/AppContext'
import { useContext, useEffect } from 'react'

export function Introduction() {
    document.title = 'OpenXBI | Introduction'
    const { themeValue } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <IntroductionContainer variant={themeValue}>
            <NavDocumentation />
            <IntroductionContent>
                <IntroText>
                    <h1>Introdução</h1>
                    <strong>Biblioteca de componentes para ferramentas compatíveis, e templates para PowerBI.</strong>

                    <p><strong>(OpenXBI) Open - New UX for BI -</strong> É um conceito que se refere à criação de experiências de usuário (UX) mais abertas e colaborativas para Business Intelligence (BI). Em outras palavras, significa que os componentes para BI devem ser projetados para permitir uma maior interação e participação dos usuários em todo o processo de análise de dados.</p>

                    <h2>Visão</h2>
                    <p>Como uma plataforma de componentes em HTML e CSS, visamos fornecer um conjunto de componentes de interface do usuário (UI) para análise de dados. Esses componentes são projetados para serem flexíveis e altamente personalizáveis, permitindo que os usuários adaptem a interface às suas necessidades específicas.</p>
                    <p>Estilizar componentes em HTML e CSS e permitir a incorporação da linguagem DAX em seu funcionamento são os principais diferenciais que buscamos oferecer aos usuários. Nosso objetivo é fornecer componentes altamente personalizáveis e úteis, ao mesmo tempo em que resolvemos problemas de acessibilidade comuns em soluções de BI.</p>



                    <h2>Principais características</h2>
                    <p><strong>Dinâmismo</strong> - Alguns elementos importantes do PowerBI por exemplo, são um tanto estáticos, e não possuem interatividade agil para trazer novas informações, como por exemplo o "Card ou Cartão", pensando nisso, criamos Cards que possuem interatividade ao passar o mouse por cima, trazendo novas informações ou até mesmo gráficos instantâneamente. </p>
                    <p><strong>Acessibilidade</strong> - Podemos dizer que o PowerBI é uma ferramenta com diversas funções de acessibilidade, mas ainda assim alguns elementos deixam a desejar, principalmente quando se trata de Cards e foco em elementos. Buscamos desenvolver elementos que se destaquem e auxilie na visualização, seja para usuários com dano ocular, tanto para os que fazem muitas apresentações com dashboard.</p>
                    <p><strong>Comentários</strong> - Buscamos comentar as partes mais importante e de modificação em um componentes para auxiliar nossos usuários durante edições ou até mesmo entender o funcionamento do componente.</p>
                    <p><strong>DAX</strong> - Como mencionado essa durante a introdução, incorporar DAX é a principal característica, que buscamos passar o conhecimento aos usuários, é com ela que você vai poder fazer magias com os componentes. Formatar valores, calcular, criar condicionais ou iterar, é algumas das funções que você pode encontrar pré configurada em nossos templates.</p>

                    <h2>Comunidade</h2>
                    <p>Caso tenha dúvidas, sugestões, queira ficar sabendo de novidades sobre novos componentes e templates, junte-se ao nosso Discord.</p>
                    <a href="https://discord.gg/BTgztvKF7E" target={'_blank'} rel="noreferrer">
                        <button>Junte ao nosso Discord

                            <svg aria-hidden="true" role="img" width="32" height="32" viewBox="-2 -7 33 33"><path fill="white" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path></svg>

                        </button>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/openxbi/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button>Siga-nos no LinkedIn

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="white" height="32" viewBox="0 0 276 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path></svg>
                        </button></a>
                </IntroText>
            </IntroductionContent>
        </IntroductionContainer>
    )
}