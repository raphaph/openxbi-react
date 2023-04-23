import { useContext, useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import { ButtonNecklace, CodeAreaContainer, CodingContainerStyle, CodingStyle, CodingSyntax, HeaderCoding, InputNameComponent, LanguageContents, NecklaceContainer, PreviewContainer, PreviewFooter, PreviewTitle, SaveConfirmContent } from "./styles";
import { AppContext } from "../../context/AppContext";
import { PreviewComponent } from "../Profile&Create/PreviewComponent";
import cssLogo from "../../assets/css.png"
import htmlLogo from "../../assets/html.png"
import { Check, FloppyDisk } from "phosphor-react";
import axios from 'axios'
import DOMPurify from 'dompurify'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const blank_default = `<div class='container'>
    <p style="color: gray">Hello World</p>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
* {
    font-family: 'Inter', sans-serif;
} 

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>`

const card_default = `<div class='card'>
    <strong class='card-title'>Component Preview</strong>
    <p class='card-value'>Edit your component</p>
    <p id='see-preview'>See preview</p>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'); /* import font */
* {
    font-family: 'Inter', sans-serif; /* font */
    margin: 0;
    border-box: box-sizing;
}

.card {
    display: flex;
    flex-direction: column; /* arrange in a column */
    align-items: center; /* center align horizontally */
    justify-content: center; /* vertical alignment */
    height: 100%;
}

.card-title {
    color: #721bff;
}

.card-value {
    color: #666;
}

#see-preview {
    color: blue;
}
</style>`

const table_default = `<table>
    <thead> <!-- header -->
        <tr>
            <th>Coluna 1</th> <!-- column name -->
            <th>Coluna 2</th>
            <th>Coluna 3</th>
        </tr>
    </thead>
    <tbody> <!-- all lines -->
        <tr> <!-- first line -->
            <td>Linha 1</td> <!-- value 1 line 1 -->
            <td>Linha 1</td> <!-- value 2 line 1 -->
            <td>Linha 1</td> <!-- value 3 line 1 -->
        </tr>
        <tr>
            <td>Linha 2</td> <!-- value 1 line 2 -->
            <td>Linha 2</td>
            <td>Linha 2</td>
        </tr>
        <tr>
            <td>Linha 3</td>
            <td>Linha 3</td>
            <td>Linha 3</td>
        </tr>
    </tbody>
</table>
<style>
@import url(
'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
);
* {
    font-family: 'Inter';
}

table {
    border-collapse: collapse;
    margin: 20px auto;
    font-size: .875rem;
    color: black;
}

th {
    background: whitesmoke;
    border-bottom: 2px solid #ddd;
    padding: .5rem;
}

td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: center;
    background-color: #fff;
}

tr:nth-child(even) {
    background-color: #fff;
}

</style>`

const chart_default = `<div class='chart-container'>
    <div class='chart'>
        <div class='bar' style='height: 50%;'>50%</div>
        <div class='bar' style='height: 75%;'>75%</div>
        <div class='bar' style='height: 25%;'>25%</div>
        <div class='bar' style='height: 90%;'>90%</div>
    </div>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
.chart-container {
    font-family: 'Inter', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
}

.chart {
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    height: 200px;
    width: 100%;
}

.bar {
    width: 40px;
    background-color: orange;
    color: white;
    border-radius: 6px 6px 2px 2px;
}
</style>`

export function CodeArea() {
    const [necklaceSelect, setNecklaceSelect] = useState<any>('html')
    const { themeValue, user, code, setCode, languageSelect, componentName, setComponentName, createOrEdit } =
        useContext(AppContext)
    const [typeDefaultCode, setTypeDefaultCode] = useState('card')
    const apiKey = import.meta.env.VITE_AUTH_KEY
    const [saveShowConfirm, setSaveShowConfirm] = useState(false)
    const [typeComponentSave, setTypeComponentSave] = useState('card')

    function selectTypeDefaultCode(event: any) {
        setTypeDefaultCode(event.target.value);

        if (event.target.value === 'card') {
            setCode(card_default);
        } else if (event.target.value === 'table') {
            setCode(table_default);
        } else if (event.target.value === 'chart') {
            setCode(chart_default);
        } else if (event.target.value === 'blank') {
            setCode(blank_default);
        }
    }

    function selectTypeComponentSave(event: any) {
        setTypeComponentSave(event.target.value);

        if (event.target.value === 'card') {
            setTypeComponentSave('card');
        } else if (event.target.value === 'table') {
            setTypeComponentSave('table');
        } else if (event.target.value === 'chart') {
            setTypeComponentSave('chart');
        } else if (event.target.value === 'other') {
            setTypeComponentSave('other');
        } else if (event.target.value === 'slider') {
            setTypeComponentSave('slider');
        } else if (event.target.value === 'toggle') {
            setTypeComponentSave('toggle');
        } else if (event.target.value === 'tooltip') {
            setTypeComponentSave('tooltip');
        }
    }

    function saveComponent(nameString: string) {
        axios.post('https://uxbi.com.br/api/save-component', {
            username: user.user.uid.substring(0, 22),
            filename: nameString,
            componentContent: code
        }, {
            headers: {
                "api-key": `${apiKey}`,
            }
        })
            .then(response => {
                setSaveShowConfirm(true)
                setTimeout(() => {
                    setSaveShowConfirm(false)
                }, 2000)
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
        const regex = /^[a-z0-9\_]+$/;
        const entradaValida = regex.test(tecla);
        if (!entradaValida) {
            event.preventDefault();
        }
    }

    function sanitizedCode(code: string) {
        // const actualCode = DOMPurify.sanitize(code)
        const actualCode = code.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace('script', '').replace('.js', '')
        const htmlString = actualCode;
        const encodedHtml = Buffer.from(htmlString).toString('base64');
        const dataUrl = `data:text/html;charset=utf-8;base64,${encodedHtml}`;
        return dataUrl;
    }

    return (
        <CodeAreaContainer variant={themeValue}>
            <CodingContainerStyle>
                <PreviewContainer>
                    <PreviewTitle>
                        <strong>{languageSelect === 'pt' ? 'Prévia' : 'See preview'}</strong>
                    </PreviewTitle>
                    <PreviewComponent code={sanitizedCode(code)} />
                    <PreviewFooter variant={themeValue}>
                        <InputNameComponent variant={themeValue}>
                            {createOrEdit === 'create' ?
                                <div>
                                    <select id="select-type-name" name="type-name" onChange={selectTypeComponentSave}>
                                        <option value="card">card</option>
                                        <option value="chart">chart</option>
                                        <option value="button">button</option>
                                        <option value="slider">slider</option>
                                        <option value="toggle">toggle</option>
                                        <option value="tooltip">tooltip</option>
                                        <option value="table">table</option>
                                        <option value="other">other</option>
                                    </select>
                                    <input
                                        value={componentName}
                                        type="text"
                                        placeholder="Component name (a-z 0-9 _)"
                                        spellCheck="false"
                                        onChange={handleInputChange}
                                        onKeyPress={validarEntrada}
                                    >
                                    </input>
                                </div>
                                : null}
                        </InputNameComponent>
                        {/* {createOrEdit === 'create' ? <h4>{`${typeComponentSave}-${componentName}`}</h4> : null} */}
                        {createOrEdit === 'create' ?
                            <button onClick={componentName === '' ?
                                () => alert('Give your component a name') :
                                () => saveComponent(`${typeComponentSave}-${componentName}`)}><FloppyDisk size={25} />
                                <p>Save</p>
                            </button> :
                            <button onClick={() => saveComponent(componentName)}>
                                <FloppyDisk size={25} />
                                <p>Save</p>
                            </button>}
                        {saveShowConfirm === true ? <SaveConfirmContent>
                            <Check size={25} weight="bold" />
                            <span>Saved</span>
                        </SaveConfirmContent> : null}

                        {createOrEdit === 'create' ?
                            <div>
                                <p>{languageSelect === 'pt' ? 'A seleção de tipo será adicionada antes do nome.' : 'The type selection is a prefix that will be added before.'}</p>
                                <p>{languageSelect === 'pt' ? 'O uso de um nome já existente substituirá o componente.' : 'Using already existing name will replace the component.'}</p>
                            </div>
                            : null}
                    </PreviewFooter>
                </PreviewContainer>
                <CodingSyntax>
                    <HeaderCoding variant={themeValue}>
                        <strong>{languageSelect === 'pt' ? 'Código aqui' : 'Code here'}</strong>
                        {createOrEdit === 'create' ?
                            <div>
                                <p>Templates</p>
                                <select id="select-type" name="select-type" onChange={selectTypeDefaultCode}>
                                    <option value="blank">Blank</option>
                                    <option value="card">Card</option>
                                    <option value="table">Table</option>
                                    <option value="chart">Chart</option>
                                </select>
                            </div> : null}
                    </HeaderCoding>
                    <CodingStyle variant={themeValue}>
                        <PerfectScrollbar>
                            <AceEditor
                                mode="html"
                                theme={themeValue === 'light' ? "xcode" : "monokai"}
                                value={code}
                                onChange={setCode}
                                name="editor"
                                height="600px"
                                width="100%"
                                fontSize={15}
                                editorProps={{ $blockScrolling: true }}
                                highlightActiveLine={true}
                                defaultValue={code}
                            />
                        </PerfectScrollbar>
                    </CodingStyle>
                    <p>{languageSelect === 'pt' ? 'Utilizar classes nos elementos, evita conflitos no estilo, é opcional.' : 'Using class in most elements avoids conflicts on the component, optional.'}</p>
                    <p>{languageSelect === 'pt' ? 'Remova aspas duplas para utilizar em uma Medida DAX.' : 'Remove double quotes for use in DAX.'}</p>
                </CodingSyntax>
                <NecklaceContainer>
                    <ButtonNecklace language={necklaceSelect}>
                        <button onClick={() => setNecklaceSelect('html')}><img src={htmlLogo} height={"25px"} alt="" /> <p>HTML</p></button>
                        <button onClick={() => setNecklaceSelect('css')}><img src={cssLogo} height={"25px"} alt="" /> <p>CSS</p></button>
                    </ButtonNecklace>
                    {necklaceSelect === 'html' ?
                        <LanguageContents variant={themeValue}>
                            {languageSelect === 'pt' ?
                                <>
                                    <small>Essas são apenas algumas das tags e propriedades html.</small>
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
                                    <p><code>{`<style>`}</code> : Define um bloco de estilos CSS que serão aplicados ao componente.</p>
                                    <p><code>{`<svg>`}</code> : É usada para criar um contêiner para gráficos vetoriais escaláveis.</p>
                                    <p><code>{`<path>`}</code> : É usada para desenhar linhas, curvas e formas complexas.</p>
                                    <p><code>{`<rect>`}</code> : É usada para desenhar retângulos.</p>
                                    <p><code>{`<circle>`}</code> : É usada para desenhar círculos.</p>
                                    <p><code>{`<ellipse>`}</code> : É usada para desenhar elipses.</p>
                                    <p><code>{`<line>`}</code> : É usada para desenhar linhas retas.</p>
                                    <p><code>{`<polygon>`}</code> : É usada para desenhar polígonos com três ou mais lados.</p>
                                    <p><code>{`<text>`}</code> : É usada para adicionar texto a um gráfico SVG.</p>
                                </> :
                                <>
                                    <small>These are just some of the html tags and properties.</small>
                                    <p><strong>{`<p class="class name">`}</strong> : Attribute used to group elements.</p>
                                    <p><strong>{`<p id="value">`}</strong> : Attribute used to identify a specific element on the page, id is unique.</p>
                                    <p><code>{`<div>`}</code> : Defines a generic section of the page.</p>
                                    <p><code>{`<p>`}</code> : Defines a paragraph of text.</p>
                                    <p><code>{`<a>`}</code> : Defines a link to another page or resource.</p>
                                    <p><code>{`<img src=''>`}</code> : Defines an image to be displayed on the component.</p>
                                    <p><code>{`<ul>`}</code> : Defines an unordered list.</p>
                                    <p><code>{`<ol>`}</code> : Defines an ordered list.</p>
                                    <p><code>{`<li>`}</code> : Defines each item in a list.</p>
                                    <p><code>{`<table>`}</code> : Defines a table to display data.</p>
                                    <p><code>{`<thead>`}</code>: Creates the header section of a table.</p>
                                    <p><code>{`<tbody>`}</code>: Creates the body section of a table.</p>
                                    <p><code>{`<tr>`}</code> : Defines a row in a table.</p>
                                    <p><code>{`<td>`}</code> : Defines a cell in a table.</p>
                                    <p><code>{`<form>`}</code> : Defines a user input data form.</p>
                                    <p><code>{`<input type='checkbox'>`}</code> : Defines a data input field in a form.</p>
                                    <p><code>{`<button>`}</code> : Defines a clickable button in a form or on the page.</p>
                                    <p><code>{`<span>`}</code> : Defines a small section of text or content.</p>
                                    <p><code>{`<style>`}</code> : Defines a block of CSS styles that will be applied to the component.</p>
                                    <p><code>{`<svg>`}</code> : Used to create a container for scalable vector graphics.</p>
                                    <p><code>{`<path>`}</code> : Used to draw lines, curves, and complex shapes.</p>
                                    <p><code>{`<rect>`}</code> : Used to draw rectangles.</p>
                                    <p><code>{`<circle>`}</code> : Used to draw circles.</p>
                                    <p><code>{`<ellipse>`}</code> : Used to draw ellipses.</p>
                                    <p><code>{`<line>`}</code> : Used to draw straight lines.</p>
                                    <p><code>{`<polygon>`}</code> : Used to draw polygons with three or more sides.</p>
                                    <p><code>{`<text>`}</code> : Used to add text to an SVG graphic.</p></>
                            }
                        </LanguageContents> :
                        <LanguageContents variant={themeValue}>

                            {languageSelect === 'pt' ?
                                <>
                                    <small>Essas são apenas algumas das propriedades css.</small>
                                    <p><strong>*</strong> : Seleciona e estiliza todos os elementos no componente.</p>
                                    <p><strong>.class_name</strong> : Estiliza elementos com a mesma classe.</p>
                                    <p><strong>.class_name:hover</strong> : Define propriedades ao passar o mouse sobre o elemento.</p>
                                    <p><strong>.class_name:hover p</strong> : Define propriedades do elemento filho(p) ao passar o mouse sobre o elemento pai.</p>
                                    <p><strong>#id</strong> : Estiliza elementos com o id único específico.</p>
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
                                    <p><strong>display: flex</strong> : Cria um contêiner flexível que pode ajustar o tamanho e a posição dos itens de acordo com o espaço disponível.</p>
                                    <p><strong>display: inline | display: block</strong> : Definem se o elemento é exibido dentro de uma linha de texto ou em uma linha separada, respectivamente.</p>
                                    <p><strong>flex-direction</strong> : Define a direção na qual os itens dentro do contêiner flexível são dispostos, 'row' ou 'column'.</p>
                                    <p><strong>justify-content</strong> : Alinha os itens ao longo do eixo principal do contêiner flexível.</p>
                                    <p><strong>align-items</strong> : Alinha os itens ao longo do eixo transversal do contêiner flexível.</p></>
                                :
                                <>
                                    <small>These are just some of the css properties.</small>
                                    <p><strong>*</strong> : Selects and styles all elements within the component.</p>
                                    <p><strong>.class_name</strong> : Styles elements with the same class.</p>
                                    <p><strong>.class_name:hover</strong> : Defines properties when hovering over the element.</p>
                                    <p><strong>.class_name:hover p</strong> : Defines properties of the child element (p) when hovering over the parent element.</p>
                                    <p><strong>#id</strong> : Styles elements with the specific unique id.</p>
                                    <p><strong>background-color</strong> : Defines the background color of an element.</p>
                                    <p><strong>color</strong> : Defines the text color of an element.</p>
                                    <p><strong>font-size</strong> : Defines the font size of text.</p>
                                    <p><strong>font-family</strong> : Defines the font family used for text.</p>
                                    <p><strong>font-weight</strong> : Defines the font weight of text.</p>
                                    <p><strong>text-decoration</strong> : Defines text decoration, such as underline, strike-through, or no decoration.</p>
                                    <p><strong>text-align</strong> : Defines text justification.</p>
                                    <p><strong>padding</strong> : Defines the internal spacing of an element relative to its border.</p>
                                    <p><strong>margin</strong> : Defines the external spacing of an element relative to other elements.</p>
                                    <p><strong>border</strong> : Defines the border of an element, including its width, style, and color.</p>
                                    <p><strong>border-radius</strong> : Defines the radius of the border.</p>
                                    <p><strong>width</strong> : Defines the width of an element.</p>
                                    <p><strong>height</strong> : Defines the height of an element.</p>
                                    <p><strong>display: flex</strong> : Creates a flexible container that can adjust the size and position of items according to the available space.</p>
                                    <p><strong>display: inline | display: block</strong> : Defines whether the element is displayed within a line of text or on a separate line, respectively.</p>
                                    <p><strong>flex-direction</strong> : Defines the direction in which items within the flexible container are arranged, 'row' or 'column'.</p>
                                    <p><strong>justify-content</strong> : Aligns items along the main axis of the flexible container.</p>
                                    <p><strong>align-items</strong> : Aligns items along the cross-axis of the flexible container.</p>
                                </>
                            }
                        </LanguageContents>}
                </NecklaceContainer>
            </CodingContainerStyle>
        </CodeAreaContainer>

    );
}

