import { NavDocumentation } from "../../components/NavDocumentation";
import {
    coldarkDark,
    coldarkCold,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from 'react'
import { IteratingDaxContainer, IteratingText, IterationContent, SyntaxHighlighterIterating } from "./styles";
import { TableContainer } from "../@docs-4-DaxFormatting/styles";
import result from '../../assets/iterating/1.png'


export function IteratingDax() {
    document.title = 'OpenXBI | Iterating With Dax'
    const { themeValue } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <IteratingDaxContainer variant={themeValue}>
            <NavDocumentation />
            <IterationContent>
                <IteratingText>
                    <h1>Iterando uma tabela com DAX</h1>
                    <strong>Este tutorial ensina como repetir uma linhas, iterando uma tebela utilizando CONCATENATEX.</strong>

                    <p>Iterar uma tabela e retornar linhas html pode ser utilizado em diversos casos, como reproduzir uma tabela com muitas linhas em html sem ter que escrever cada linha manualmente,
                        repetir cards para cada título e valor, criar barras laterais ou colunas, repetir objetos dentro de uma tag svg, e muito mais necessidade e criatividade.  </p>

                    <p>Sintaxe do <strong>CONCATENATEX</strong>, que iremos utilizar:</p>
                    <SyntaxHighlighterIterating
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`CONCATENATEX(<table>, <expression>)`}
                    </SyntaxHighlighterIterating>

                    <p>Tabela simples utilizada no exemplo:</p>
                    <TableContainer variant={themeValue}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>adults</td>
                                    <td>21</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>young</td>
                                    <td>14</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>children</td>
                                    <td>7</td>
                                </tr>

                            </tbody>

                        </table>
                    </TableContainer>
                    <p><strong>1ª ETAPA</strong> - Iniciaremos criando uma variavel dentro do componente utilizando CONCATENATEX para iterar a tabela e retornar uma linhas de código.</p>
                    <SyntaxHighlighterIterating
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`Medida =
var iterating_table = CONCATENATEX(age_range, 
"
<div class='card'>
    <p style='font-weight: bold'>" & [Title] & "</p> 
    <p>" & [Count] & "</p>
</div>    
")`}
                    </SyntaxHighlighterIterating>
                    <p>Observe que o primeiro argumento é a tabela [age-range], e o segundo, entre aspas duplas, o código HTML com valores referente as colunas da tabela, o código em questão repetira dentro da variável para cada linha da tabela.</p>

                    <p><strong>2ª ETAPA</strong> - Na segunda etapa iremos incluir a variável dentro do código.</p>
                    <SyntaxHighlighterIterating
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`return
"
<div class='container'>
    "& iterating_table &"
</div>
"`}
                    </SyntaxHighlighterIterating>
                    <p>Neste caso <strong>iterating_table</strong> irá repetir conforme quantidade de linhas que houver na tabela [age_range].</p>

                    <p>Abaixo segue o resultado do código, e a estrutura final do componente (style opcional):</p>
                    <img src={result} alt="" />
                    <SyntaxHighlighterIterating
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`Medida = 

var iterating_table = CONCATENATEX(age_range, "
<div class='card'>
    <p style='font-weight: bold'>" & [Title] & "</p> 
    <p>" & [Count] & "</p>
</div>    
")

return
"
<div class='container'>
    "& iterating_table &"
</div>

<style>
.container {display: flex;}
.card {   
    border-radius: 6px;
    background: #FF8C00;
    margin: 2%;
    padding: 1%;
    width: 150px;
}

p {
    text-align: center;
    color: white;
}
</style>
"`}
                    </SyntaxHighlighterIterating>
                    <p>Neste tutorial você aprendeu uma forma de iterar tabela e html dentro da linguagem DAX.</p>
                    <p>Caso queira acessar a documentação completa sobre <strong>CONCATENATEX</strong>, <a href="https://learn.microsoft.com/pt-br/dax/concatenatex-function-dax" target={"_blank"}>clique aqui</a></p>
                </IteratingText>
            </IterationContent>
        </IteratingDaxContainer>
    )
}