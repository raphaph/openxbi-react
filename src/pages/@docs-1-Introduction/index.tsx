import { NavDocumentation } from "../../components/NavDocumentation";
import { IntroductionContainer, IntroductionContent, IntroText } from "./styles";

import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from "react";
import { DiscordLogo } from "phosphor-react";

export function Introduction() {
    document.title = 'OpenXBI | Introduction'
    const { themeValue } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <IntroductionContainer variant={themeValue}>
            <NavDocumentation />
            <IntroductionContent>
                <IntroText>
                    <h1>Introdução</h1>
                    <strong>Biblioteca de componentes para ferramentas compatíveis, e templates para PowerBI.</strong>

                    <p><strong>(OpenXBI) Open New UX for BI -</strong> É um conceito que se refere à criação de experiências de usuário (UX) mais abertas e colaborativas para Business Intelligence (BI). Em outras palavras, significa que os componentes para BI devem ser projetados para permitir uma maior interação e participação dos usuários em todo o processo de análise de dados.</p>

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
                    <button>
                        <DiscordLogo size={25} color="white" />
                        <a href="https://discord.gg/BTgztvKF7E" target={"_blank"}>Junte ao nosso Discord</a>
                    </button>

                </IntroText>
            </IntroductionContent>
        </IntroductionContainer>
    )
}