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

                    <p>Nossos componentes utilizam linguagem HTML e CSS puro e adaptado para uso direto em medidas DAX no PowerBI. São estilizados de forma que faça sentido para dashboards de negócio, alguns desses componentes podem ser simples e conter apenas foco na acessibilidade e ser úteis em apresentações. Experimente utilizar nossos componentes, modifique-os conforme seu objetivo e aprenda enquanto desenvolve.</p>

                    <h2>Visão</h2>
                    <p>Estilizar componentes em HTML e CSS, e poder incorporar a linguagem DAX ao seu funcionamento é o grande diferencial que buscamos passar aos usuários. Visamos entregar componentes úteis, e que resolvam também problemas de acessibilidade que encontramos no PowerBI.</p>
                    <p>Ao perceber que quanto mais incorporamos medidas e variáveis DAX dentro dos nossos componentes, mais inteligentes esses componentes ficam. Pensando em auxiliar o aprendizado dos nossos usuários, buscamos disponibilizar recursos comentados, templates com componentes pré-configurados com medidas e variaveis DAX, afim de disseminar conhecimento e auxiliar no processo de aprendizado dos nossos usuários.</p>
                    <p>Contudo, nosso objetivo principal é disponibilizar o máximo de componentes e templates para a comunidade, tudo de forma gratuita.</p>

                    <h2>Principais características</h2>
                    <p><strong>Dinâmismo</strong> - Alguns elementos importantes do PowerBI por exemplo, são um tanto estáticos, e não possuem interatividade agil para trazer novas informações, como por exemplo o "Card ou Cartão", pensando nisso, criamos Cards que possuem interatividade ao passar o mouse por cima, trazendo novas informações ou até mesmo gráficos instantâneamente. </p>
                    <p><strong>Acessibilidade</strong> - Podemos dizer que o PowerBI é uma ferramenta com diversas funções de acessibilidade, mas ainda assim alguns elementos deixam a desejar, principalmente quando se trata de Cards e foco em elementos. Buscamos desenvolver elementos que se destaquem e auxilie na visualização, seja para usuários com dano ocular, tanto para os que fazem muitas apresentações com dashboard.</p>
                    <p><strong>Comentários</strong> - Buscamos comentar as partes mais importante e de modificação em um componentes para auxiliar nossos usuários durante edições ou até mesmo entender o funcionamento do componente.</p>
                    <p><strong>DAX</strong> - Como mencionado algumas vezes durante a introdução, incorporar DAX é a principal característica, que buscamos passar o conhecimento aos usuários, é com ela que você vai poder fazer magias com os componentes. Formatar valores, calcular, criar condicionais ou iterar, é algumas das funções que você pode encontrar pré configurada em nossos templates.</p>

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