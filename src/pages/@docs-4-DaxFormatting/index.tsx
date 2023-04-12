import { NavDocumentation } from '../../components/NavDocumentation'
import { AppContext } from '../../context/AppContext'
import { DaxContent, DaxFormattingContainer, DaxText, SyntaxHighlighterDAX, TableContainer } from './styles'
import { useContext, useEffect } from 'react'
import {
    coldarkDark,
    coldarkCold,
} from 'react-syntax-highlighter/dist/esm/styles/prism'

export function DaxFormatting() {
    document.title = 'OpenXBI | Dax Formatting'
    const { themeValue, languageSelect } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <DaxFormattingContainer variant={themeValue}>
            <NavDocumentation />
            <DaxContent>
                <DaxText>
                    {languageSelect === 'pt' ? <>
                        <h1>Formatando valores</h1>
                        <p>Quando importamos um componente e atribuimos valores de medidas e variáveis DAX a ele, podemos nos deparar com erro de exibição, seja trabalhando com porcentagem, moedas ou decimais, exemplo: ponto e vírgulas invertidos, simbolo da moeda inadequado a região, etc.</p>
                        <p>Para resolvermos essa questão, é importante conhecermos e sabermos como aplicar a função <strong>FORMAT</strong> da linguagem DAX, ela nos permite formatar nossas variáveis para que seja exibida como deveriam.</p>
                        <p><strong>{'FORMAT(<value>, <format_string> [, <locale_name>])'}</strong> - Converte um valor em texto de acordo com o formato especificado.</p>

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
                            {'FORMAT( 12345.67, "General Number")'}
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
                            {'FORMAT( 12345.67, "Standard", "pt-BR")'}
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
                            {'FORMAT( 0.67, "Percent")'}
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
                            {'FORMAT( 12345.67, "Scientific")'}
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
                            {'FORMAT( dt"2020-12-15T12:30:59", "Short Date", "pt-BR")'}
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
                            {'FORMAT( dt"2020-12-15T12:30:59", "Long Time", "pt-BR")'}
                        </SyntaxHighlighterDAX>
                        <small>resultado: 12:30:59 PM </small>
                        <p>Caso queria acessar a documentação completa <a href="https://learn.microsoft.com/pt-br/dax/format-function-dax" target={'_blank'} rel="noreferrer">clique aqui</a>. </p>
                    </> :
                        <>
                            <h1>Formatting Values</h1>
                            <p>When we import a component and assign DAX variable and measure values to it, we may encounter display errors while working with percentages, currencies, or decimals. For example, inverted semicolons, inappropriate currency symbols for the region, etc.</p>
                            <p>To solve this issue, it's important to know and understand how to apply the <strong>FORMAT</strong> function in the DAX language, which allows us to format our variables to be displayed as they should.</p>
                            <p><strong>{'FORMAT(<value>, <format_string> [, <locale_name>])'}</strong> - Converts a value into text according to the specified format.</p>
                            <TableContainer variant={themeValue}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Not Formatted</th>
                                            <th>Format</th>
                                            <th>Formatted</th>
                                            <th>Region</th>
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
                            <hr />
                            <h3>See practical examples below:</h3>
                            {/* General Number */}

                            <p><strong>General Number</strong> (displays a number without formatting)</p>
                            <SyntaxHighlighterDAX
                                variant={themeValue}
                                language="dax"
                                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                                showLineNumbers
                                wrapLines
                            >
                                {'FORMAT( 12345.67, "General Number")'}
                            </SyntaxHighlighterDAX>
                            <small>result:</small> 12345.67

                            {/* Currency */}

                            <p><strong>Currency</strong> (displays the value of a currency according to the specified region)</p>
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
                            <small>result 1: $ 12,345.67</small><br />
                            <small>result 2: R$ 12.345,67</small>
                            {/* Standard */}

                            <p><strong>Standard</strong> (adds punctuation to the number according to the specified region)</p>
                            <SyntaxHighlighterDAX
                                variant={themeValue}
                                language="dax"
                                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                                showLineNumbers
                                wrapLines
                            >
                                {'FORMAT( 12345.67, "Standard", "pt-BR")'}
                            </SyntaxHighlighterDAX>
                            <small>result: 12.345,67</small>
                            {/* Percent */}

                            <p><strong>Percent</strong> (formats a decimal or integer number to a percentage)</p>
                            <SyntaxHighlighterDAX
                                variant={themeValue}
                                language="dax"
                                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                                showLineNumbers
                                wrapLines
                            >
                                {'FORMAT( 0.67, "Percent")'}
                            </SyntaxHighlighterDAX>
                            <small>result: 67%</small>
                            {/* Scientific */}

                            <p><strong>Scientific</strong> (displays a number in scientific notation with two decimal places)</p>
                            <SyntaxHighlighterDAX
                                variant={themeValue}
                                language="dax"
                                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                                showLineNumbers
                                wrapLines
                            >
                                {'FORMAT( 12345.67, "Scientific")'}
                            </SyntaxHighlighterDAX>
                            <small>result: 1.23E+04</small>
                            {/* Date Format */}

                            <p><strong>Date Format</strong> (formats a date according to the specified region)</p>
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
                            <small>Result 1: 12/15/2020 12:30:59</small><br />
                            <small>Result 2: 15/12/2020 12:30:59</small><br />
                            <small>Result 3: 15/12/2020 12:30:59 AM</small><br />
                            <small>Result 4: 12/15/2020 12:30:59</small>
                            {/* Short Date */}
                            <p><strong>Short Date</strong> (displays a date using the short date format of your current culture.)</p>
                            <SyntaxHighlighterDAX
                                variant={themeValue}
                                language="dax"
                                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                                showLineNumbers
                                wrapLines
                            >
                                {'FORMAT( dt"2020-12-15T12:30:59", "Short Date", "pt-BR")'}
                            </SyntaxHighlighterDAX>
                            <small>Result: 15-12-2020 </small>

                            {/* Long Time */}
                            <p><strong>Long Time</strong> (displays a time using the long time format of your current culture. Typically includes hours, minutes, seconds.)</p>
                            <SyntaxHighlighterDAX
                                variant={themeValue}
                                language="dax"
                                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                                showLineNumbers
                                wrapLines
                            >
                                {'FORMAT( dt"2020-12-15T12:30:59", "Long Time", "pt-BR")'}
                            </SyntaxHighlighterDAX>
                            <small>Result: 12:30:59 PM </small>
                            <p>If you want to access the complete documentation <a href="https://learn.microsoft.com/pt-br/dax/format-function-dax" target={'_blank'} rel="noreferrer">click here</a>.</p>
                        </>
                    }
                </DaxText>
            </DaxContent>


        </DaxFormattingContainer>
    )
}