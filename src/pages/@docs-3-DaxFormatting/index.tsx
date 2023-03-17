import { NavDocumentation } from "../../components/NavDocumentation";
import { AppContext } from "../../context/AppContext";
import { DaxContent, DaxFormattingContainer, DaxText, SyntaxHighlighterDAX, TableContainer } from "./styles";
import { useContext } from "react";
import {
    coldarkDark,
    coldarkCold,
} from 'react-syntax-highlighter/dist/esm/styles/prism'

export function DaxFormatting() {
    document.title = 'OpenXBI | Dax Formatting'
    const { themeValue } = useContext(AppContext)

    return (
        <DaxFormattingContainer variant={themeValue}>
            <NavDocumentation />
            <DaxContent>
                <DaxText>
                    <h1>Formatação DAX</h1>
                    <p>Quando importamos um componente e atribuimos valores de medidas e variáveis DAX a ele, podemos nos deparar com erro de exibição, seja trabalhando com porcentagem, moedas ou decimais, exemplo: ponto e vírgulas invertidos, simbolo da moeda inadequado a região, etc.</p>
                    <p>Para resolvermos essa questão, é importante conhecermos e sabermos como aplicar a função <strong>FORMAT</strong> da linguagem DAX, ela nos permite formatar nossas variáveis para que seja exibida como deveriam.</p>
                    <p><strong>{`FORMAT(<value>, <format_string> [, <locale_name>])`}</strong> - Converte um valor em texto de acordo com o formato especificado.</p>

                    <TableContainer variant={themeValue}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Não formatado</th>
                                    <th>Formato</th>
                                    <th>Formatado</th>
                                    <th>Região</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12345.67</td>
                                    <td>Currency</td>
                                    <td>$12,345.67</td>
                                    <td>en-US</td>
                                </tr>
                                <tr>
                                    <td>12345.67</td>
                                    <td>Currency</td>
                                    <td>R$ 12.345,67</td>
                                    <td>pt-BR</td>
                                </tr>
                                <tr>
                                    <td>2020-12-15T12:30:59</td>
                                    <td>BLANK()</td>
                                    <td>12/15/2020 12:30:59</td>
                                    <td>en-US</td>
                                </tr>
                                <tr>
                                    <td>2020-12-15T12:30:59</td>
                                    <td>BLANK()</td>
                                    <td>15/12/2020 12:30:59</td>
                                    <td>pt-BR</td>
                                </tr>
                                <tr>
                                    <td>0.67</td>
                                    <td>Percent</td>
                                    <td>67%</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2020-12-15T12:30:59</td>
                                    <td>Long Time</td>
                                    <td>12:30:59 AM</td>
                                    <td>pt-BR</td>
                                </tr>
                                <tr>
                                    <td>2020-12-15T12:30:59</td>
                                    <td>Short Date</td>
                                    <td>15/12/2020</td>
                                    <td>pt-BR</td>
                                </tr>
                                <tr>
                                    <td>12345.67</td>
                                    <td>Scientific</td>
                                    <td>1.23E+04</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </TableContainer>

                    <hr></hr>
                    <h3>Veja abaixo exemplos práticos:</h3>

                    {/* General Number */}
                    <p><strong>General Number</strong> (exibe um número sem formatação)</p>
                    <SyntaxHighlighterDAX
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`FORMAT( 12345.67, "General Number")`}
                    </SyntaxHighlighterDAX>
                    <small>resultado: 12345.67</small>

                    {/* Currency */}
                    <p><strong>Currency</strong> (exibe o valor da moeda conforme a região indicada)</p>
                    <SyntaxHighlighterDAX
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`FORMAT( 12345.67, "Currency", "pt-BR")
FORMAT( 12345.67, "Currency", "en-US")`}
                    </SyntaxHighlighterDAX>
                    <small>resultado 1: $ 12,345.67</small><br />
                    <small>resultado 2: R$ 12.345,67</small>

                    {/* Standard */}
                    <p><strong>Standard</strong> (adiciona pontuação ao número conforme região)</p>
                    <SyntaxHighlighterDAX
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`FORMAT( 12345.67, "Standard", "pt-BR")`}
                    </SyntaxHighlighterDAX>
                    <small>resultado: 12.345,67</small>

                    {/* Percent */}
                    <p><strong>Percent</strong> (formata um número decimal ou inteiro para porcentagem)</p>
                    <SyntaxHighlighterDAX
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`FORMAT( 0.67, "Percent")`}
                    </SyntaxHighlighterDAX>
                    <small>resultado: 67%</small>

                    {/* Scientific */}
                    <p><strong>Scientific</strong> (exibe um número em notação ciêntífica com dois digitos decimais)</p>
                    <SyntaxHighlighterDAX
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`FORMAT( 12345.67, "Scientific")`}
                    </SyntaxHighlighterDAX>
                    <small>resultado: 1.23E+04</small>

                    {/* Date Format */}
                    <p><strong>Date Format</strong> (formata uma data conforme a região)</p>
                    <SyntaxHighlighterDAX
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`FORMAT( dt"2020-12-15T12:30:59", BLANK(), "en-US" ) 
FORMAT( dt"2020-12-15T12:30:59", BLANK(), "pt-BR" )
FORMAT( dt"2020-12-15T12:30:59", "General Date", "pt-BR" )
FORMAT( dt"2020-12-15T12:30:59", "mm/dd/yyyy", "pt-BR" ) `}
                    </SyntaxHighlighterDAX>
                    <small>resultado 1: 12/15/2020 12:30:59</small><br />
                    <small>resultado 2: 15/12/2020 12:30:59</small><br />
                    <small>resultado 3: 15/12/2020 12:30:59 AM</small><br />
                    <small>resultado 4: 12/15/2020 12:30:59</small>

                    {/* Short Date */}
                    <p><strong>Short Date</strong> (exibe uma data usando o formato de data curta de sua cultura atual.)</p>
                    <SyntaxHighlighterDAX
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`FORMAT( dt"2020-12-15T12:30:59", "Short Date", "pt-BR")`}
                    </SyntaxHighlighterDAX>
                    <small>resultado: 15-12-2020 </small>

                    {/* Long Time */}
                    <p><strong>Long Time</strong> (Exibe uma hora usando o formato de hora longo da cultura atual. Normalmente, inclui horas, minutos, segundos.)</p>
                    <SyntaxHighlighterDAX
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`FORMAT( dt"2020-12-15T12:30:59", "Long Time", "pt-BR")`}
                    </SyntaxHighlighterDAX>
                    <small>resultado: 12:30:59 PM </small>
                    <p>Caso queria acessar a documentação completa <a href="https://learn.microsoft.com/pt-br/dax/format-function-dax" target={"_blank"}>clique aqui</a>. </p>
                </DaxText>
            </DaxContent>


        </DaxFormattingContainer>
    )
}