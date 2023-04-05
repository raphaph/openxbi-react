import { useContext, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import { CodeAreaContainer, CodingContainerStyle, CodingStyle, CodingSyntax, PreviewContainer, PreviewFooter, PreviewTitle } from "./styles";
import { AppContext } from "../../context/AppContext";
import { PreviewComponent } from "../PreviewComponent";

const defaultCode = `<div class='card'>
<strong class='card-title'>Component Preview</strong>
<p class='card-content'>Edit your component</p>
</div>

<style>
* {
margin: 0;
border-box: box-sizing;
}

.card-title {
color: purple;
}
</style>`

export function CodeArea() {
    const [code, setCode] = useState(defaultCode);
    const { themeValue, user } =
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
                        <button>Save (Soon)</button>
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
            </CodingContainerStyle>
        </CodeAreaContainer>

    );
}

