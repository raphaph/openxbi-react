import { useContext, useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import { ButtonNecklace, CodeAreaContainer, CodingContainerStyle, CodingStyle, CodingSyntax, HeaderCoding, LanguageContents, NecklaceContainer, PreviewContainer, PreviewFooter, PreviewTitle } from "./styles";
import { AppContext } from "../../context/AppContext";
import { PreviewComponent } from "../PreviewComponent";
import cssLogo from "../../assets/css.png"
import htmlLogo from "../../assets/html.png"
import { FloppyDisk } from "phosphor-react";
import axios from 'axios'

const card_default = `<div class='card'>
    <strong class='card-title'>Component Preview</strong>
    <p class='card-content'>Edit your component</p>
    <p id='see-preview'>See preview</p>
</div>

<style>
* {
    margin: 0;
    border-box: box-sizing;
}

.card-title {
    color: #721bff;
}

#see-preview {
    color: blue;
}
</style>`

const table_default = `<table>
    <tr>
        <td>Coluna 1</td>
        <td>Coluna 2</td>
        <td>Coluna 3</td>
    </tr>
    <tr>
        <td>Linha 2</td>
        <td>Linha 2</td>
        <td>Linha 2</td>
    </tr>
    <tr>
        <td>Linha 3</td>
        <td>Linha 3</td>
        <td>Linha 3</td>
    </tr>
    <tr>
        <td>Linha 3</td>
        <td>Linha 3</td>
        <td>Linha 3</td>
    </tr>
</table>
<style>
table {
    border-collapse: collapse;
    margin: 20px auto;
    font-size: .875rem;
    color: black;
}

td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
    background-color: #fff;
}

tr:nth-child(even) {
    background-color: #fff;
}

tr:first-child td {
    background: whitesmoke;
    font-weight: bold;
}
</style>`

const chart_default = `<div class="chart">
    <div class="bar" style="height: 50%;"></div>
    <div class="bar" style="height: 75%;"></div>
    <div class="bar" style="height: 25%;"></div>
    <div class="bar" style="height: 90%;"></div>
</div>
<style>
.chart {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    height: 300px;
    width: 300px;
}

.bar {
    width: 40px;
    background-color: orange;
    border-radius: 6px 6px 2px 2px;
}
</style>`

export function CodeArea() {
    const [necklaceSelect, setNecklaceSelect] = useState<any>('html')
    const { themeValue, user, code, setCode, componentName, setComponentName } =
        useContext(AppContext)
    const [typeDefaultCode, setTypeDefaultCode] = useState('card')
    const apiKey = import.meta.env.VITE_AUTH_KEY


    function selectTypeDefaultCode(event: any) {
        setTypeDefaultCode(event.target.value);

        if (event.target.value === 'card') {
            setCode(card_default);
        } else if (event.target.value === 'table') {
            setCode(table_default);
        } else if (event.target.value === 'chart') {
            setCode(chart_default);
        } else if (event.target.value === 'blank') {
            setCode(`<div class='container'></div>`);
        }
    }

    useEffect(() => {
        setCode(code)
    }, [])

    function saveComponent() {
        axios.post('https://uxbi.com.br/api/save-component', {
            username: user.user.uid.substring(0, 22),
            filename: componentName,
            componentContent: code
        }, {
            headers: {
                "api-key": `${apiKey}`,
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }

    function handleInputChange(event: any) {
        setComponentName(event.target.value);
    }

    function validarEntrada(event: any) {
        const tecla = event.key;
        const regex = /^[a-zA-Z0-9\s'_-]+$/;
        const entradaValida = regex.test(tecla);
        if (!entradaValida) {
            event.preventDefault();
        }
    }

    return (
        <CodeAreaContainer variant={themeValue}>
            <CodingContainerStyle>
                <PreviewContainer>
                    <PreviewTitle>
                        <strong>See preview</strong>
                    </PreviewTitle>
                    <PreviewComponent code={code} />
                    <PreviewFooter variant={themeValue}>
                        <input
                            value={componentName}
                            type="text"
                            placeholder="Give your component a name"
                            spellCheck="false"
                            onChange={handleInputChange}
                            onKeyPress={validarEntrada}
                        ></input>
                        <button onClick={componentName === '' ? () => alert('Give your component a name') : () => saveComponent()}><FloppyDisk size={25} /> <p>Save (Soon)</p></button>
                    </PreviewFooter>
                </PreviewContainer>
                <CodingSyntax>
                    <HeaderCoding>
                        <strong>Code here</strong>
                        <select id="select-type" name="select-type" onChange={selectTypeDefaultCode}>
                            <option value="card">Card</option>
                            <option value="table">Table</option>
                            <option value="chart">Chart</option>
                            <option value="blank">Blank</option>
                        </select>
                    </HeaderCoding>
                    <CodingStyle variant={themeValue}>
                        <AceEditor
                            mode="html"
                            theme={themeValue === 'light' ? "xcode" : "monokai"}
                            value={code}
                            onChange={setCode}
                            name="HTML_EDITOR"
                            height="600px"
                            width="100%"
                            fontSize={15}
                            editorProps={{ $blockScrolling: true }}
                            highlightActiveLine={false}
                            defaultValue={code}
                        />
                    </CodingStyle>

                    <p>Using class in most elements avoids conflicts on the page.</p>
                    <p>Remove double quotes for use in DAX.</p>
                </CodingSyntax>
                <NecklaceContainer>
                    <ButtonNecklace language={necklaceSelect}>
                        <strong>Help!</strong>
                        <button onClick={() => setNecklaceSelect('html')}><img src={htmlLogo} height={"25px"} alt="" /> <p>HTML</p></button>
                        <button onClick={() => setNecklaceSelect('css')}><img src={cssLogo} height={"25px"} alt="" /> <p>CSS</p></button>
                    </ButtonNecklace>
                    {necklaceSelect === 'html' ? <small>Alguns elementos comuns do HTML.</small> : <small>Algumas propriedades comuns do CSS e uso de class e id.</small>}
                    {necklaceSelect === 'html' ?
                        <LanguageContents variant={themeValue}>
                            <p><strong>{`<p class="class name">`}</strong> : Atributo utilizado para agrupar elementos.</p>
                            <p><strong>{`<p id="value">`}</strong> : Atributo utilizado para identificar um elemento específico na página, id é unico.</p>
                            <p><code>{`<div>`}</code> : Define uma seção genérica da página.</p>
                            <p><code>{`<p>`}</code> : Define um parágrafo de texto.</p>
                            <p><code>{`<a>`}</code> : Define um link para outra página ou recurso.</p>
                            <p><code>{`<img src=''>`}</code> : Define uma imagem a ser exibida no componente.</p>
                            <p><code>{`<ul>`}</code> : Define uma lista não ordenada.</p>
                            <p><code>{`<ol>`}</code> : Define uma lista ordenada.</p>
                            <p><code>{`<li>`}</code> : Define cada item em uma lista.</p>
                            <p><code>{`<table>`}</code> : Define uma tabela para exibir dados.</p>
                            <p><code>{`<thead>`}</code>: Cria a seção de cabeçalho de uma tabela.</p>
                            <p><code>{`<tbody>`}</code>: Cria a seção de corpo de uma tabela.</p>
                            <p><code>{`<tr>`}</code> : Define uma linha em uma tabela.</p>
                            <p><code>{`<td>`}</code> : Define uma célula em uma tabela.</p>
                            <p><code>{`<form>`}</code> : Define um formulário de entrada de dados do usuário.</p>
                            <p><code>{`<input type='checkbox'>`}</code> : Define um campo de entrada de dados em um formulário.</p>
                            <p><code>{`<button>`}</code> : Define um botão clicável em um formulário ou na página.</p>
                            <p><code>{`<span>`}</code> : Define uma pequena seção de texto ou conteúdo.</p>
                        </LanguageContents> :
                        <LanguageContents variant={themeValue}>
                            <p><strong>.class_name</strong> : Estiliza elementos com a mesma classe.</p>
                            <p><strong>#id</strong> : Estiliza elementos o id específico.</p>
                            <p><strong>background-color</strong> : Define a cor de fundo de um elemento.</p>
                            <p><strong>color</strong> : Define a cor do texto de um elemento.</p>
                            <p><strong>font-size</strong> : Define o tamanho da fonte do texto.</p>
                            <p><strong>font-family</strong> : Define a família de fontes usada para o texto.</p>
                            <p><strong>font-weight</strong> : Define a espessura da fonte do texto.</p>
                            <p><strong>text-decoration</strong> : Define a decoração de texto, como sublinhado, tachado ou sem decoração.</p>
                            <p><strong>text-align</strong> : Define a justificação do texto.</p>
                            <p><strong>padding</strong> : Define o espaçamento interno de um elemento em relação à sua borda.</p>
                            <p><strong>margin</strong> : Define o espaçamento externo de um elemento em relação a outros elementos.</p>
                            <p><strong>border</strong> : Define a borda de um elemento, incluindo sua largura, estilo e cor.</p>
                            <p><strong>border-radius</strong> : Define o raio da borda.</p>
                            <p><strong>width</strong> : Define a largura de um elemento.</p>
                            <p><strong>height</strong> : Define a altura de um elemento.</p>
                            <p><strong>display</strong> : Define como um elemento deve ser exibido, como bloco, inline ou como tabela.</p>
                            <p><strong>.class_name:hover</strong> : Define propriedades ao passar o mouse sobre o elemento.</p>
                            <p><strong>.class_name:hover p</strong> : Define propriedades do elemento filho(p) ao passar o mouse sobre o elemento pai.</p>
                        </LanguageContents>}
                </NecklaceContainer>
            </CodingContainerStyle>
        </CodeAreaContainer>

    );
}

