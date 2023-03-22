import { NavDocumentation } from "../../components/NavDocumentation";
import { GetStartedContainer, StartedContent, StartedText, SyntaxHighlighterStarted } from "./styles";
import {
    coldarkDark,
    coldarkCold,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from 'react'

const card_code = `<div class='align-card'>
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

</style>
    
`
const dax_code = `Medida = 
"
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

</style>
"`
import started1 from '../../assets/getting-started/1.png'
import started2 from '../../assets/getting-started/2.png'
import started3 from '../../assets/getting-started/3.png'
import started4 from '../../assets/getting-started/4.png'
import started5 from '../../assets/getting-started/5.png'
import started6 from '../../assets/getting-started/6.png'
import started7 from '../../assets/getting-started/7.png'
import { NavLink } from "react-router-dom";

export function GettingStarted() {
    document.title = 'OpenXBI | GettingStarted'
    const { themeValue } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <GetStartedContainer variant={themeValue}>
            <NavDocumentation />
            <StartedContent>
                <StartedText>
                    <h1>Primeiros passos</h1>
                    <strong>Um rápido tutorial de como utilizar componentes da OpenXBI.</strong>
                    <p>Conhecimentos em medidas DAX, HTML e CSS podem ser opcionais para utilização dos componentes, porém a modificação e adaptação para o seu dashboard, pode ser necessário conhecimentos mais avançados, lembrando que comentamos pontos principais dos componentes para auxiliar a edição.</p>
                    <h3>Vamos la?</h3>

                    <p>1. Copie o código de um componente a sua escolha em <NavLink to={"/components"}>Componentes</NavLink>.</p>
                    <strong>Neste tutorial utilizamos o componente card-acessibility:</strong>

                    <SyntaxHighlighterStarted
                        variant={themeValue}
                        language="html"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {card_code}
                    </SyntaxHighlighterStarted>

                    <hr />
                    <p>2. Após copiar o código, no seu PowerBI Desktop, na aba Página inicial, clique para adicionar uma <strong>Nova Medida</strong>.</p>
                    <img src={started1} alt="" width="300" />
                    <p color="purple">(É necessário ter uma tabela criada ou importada no seu dashboard, para que Nova Medida esteja disponível, a nova medida criada será adicionada a sua tabela selecionada)</p>

                    <hr />
                    <p>3. Com o editor da nova medida aberto, substitua "Medida" pelo nome desejado para o componente, e entre aspas duplas cole o código do componente copiado. </p>

                    <SyntaxHighlighterStarted
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {dax_code}
                    </SyntaxHighlighterStarted>

                    <hr />
                    <p>4. Para visualizarmos o componente importado, será necessário importar o visual <strong><a href="https://appsource.microsoft.com/en-us/product/power-bi-visuals/WA200001930?exp=ubp8" target={"_blank"}>HTML Content</a></strong> do App Source.</p>
                    <p>Na aba vertical <strong>Visualizações</strong>, clique nos 3 pontos e em “Obter mais visuais”</p>
                    <img src={started2} alt="" width="300" />

                    <p>Procure pelo visual "HTML Content" e clique em “Adicionar”.</p>
                    <img src={started3} alt="" width="450" />

                    <p>O novo visual estará disponível para utilização na barra inferior de visualizações.</p>
                    <img src={started4} alt="" width="150" />

                    <hr />
                    <p>5. Exibindo o componente no dashboard.</p>
                    <p>Com o visual HTML importado, de um clique único nele, um quadro com algumas informações sobre o visual aparecerá na área de exibição do seu dashboard.</p>
                    <img src={started5} alt="" width="300" />
                    <p>Ainda na aba vertical de Visualizações, adicione em "Values" a medida que criamos para o componente nas primeiras etapas.</p>
                    <img src={started6} alt="" width="200" />

                    <p>🎉 Pronto, componente importado.</p>
                    <img src={started7} alt="" width="200" />

                    <p>Caso queira ver mais sobre o visual HTML Content, acesse a documentação no <a href="https://www.html-content.com/">site oficial</a>.</p>
                </StartedText>
            </StartedContent>
        </GetStartedContainer>
    )
}