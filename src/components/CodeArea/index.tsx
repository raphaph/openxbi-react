import { useContext, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import { ButtonNecklace, CodeAreaContainer, CodingContainerStyle, CodingStyle, CodingSyntax, LanguageContents, NecklaceContainer, PreviewContainer, PreviewFooter, PreviewTitle } from "./styles";
import { AppContext } from "../../context/AppContext";
import { PreviewComponent } from "../PreviewComponent";
import cssLogo from "../../assets/css.png"
import htmlLogo from "../../assets/html.png"
import { FloppyDisk } from "phosphor-react";

const defaultCode = `<div class='card'>
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
    color: purple;
}

#see-preview {
    color: blue;
}
</style>`

export function CodeArea() {
    const [code, setCode] = useState(defaultCode);
    const [necklaceSelect, setNecklaceSelect] = useState<any>('html')
    const { themeValue } =
        useContext(AppContext)


    return (
        <CodeAreaContainer variant={themeValue}>
            <CodingContainerStyle>
                <PreviewContainer>
                    <PreviewTitle>
                        <strong>See preview</strong>
                    </PreviewTitle>
                    <PreviewComponent code={code} />
                    <PreviewFooter>
                        <button><FloppyDisk size={25} /> <p>Save (Soon)</p></button>
                    </PreviewFooter>
                </PreviewContainer>
                <CodingSyntax>
                    <strong>Code here</strong>
                    <CodingStyle variant={themeValue}>
                        <AceEditor
                            mode="html"
                            theme={themeValue === 'light' ? "xcode" : "monokai"}
                            value={code}
                            onChange={setCode}
                            name="HTML_EDITOR"
                            width="100%"
                            fontSize={14}
                            editorProps={{ $blockScrolling: true }}
                            enableBasicAutocompletion={true}
                            highlightActiveLine={false}
                            defaultValue={defaultCode}
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
                            <p><strong>float</strong> : Define como um elemento deve flutuar em relação a outros elementos.</p>
                        </LanguageContents>}
                </NecklaceContainer>
            </CodingContainerStyle>
        </CodeAreaContainer>

    );
}

