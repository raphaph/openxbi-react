import { useContext } from "react"
import AceEditor from "react-ace";
import { AppContext } from "../../context/AppContext"
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import { CodingStyle } from "../CodeArea/styles";
import { PreviewComponent } from "../Profile&Create/PreviewComponent";
import { CreateComponentHomeContainer } from "./styles";
import 'react-perfect-scrollbar/dist/css/styles.css'

export function HomeCreateComponent() {
    const { themeValue, code, setCode, languageSelect } = useContext(AppContext)

    function sanitizedCode(code: string) {
        // const actualCode = DOMPurify.sanitize(code)
        const actualCode = code.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace('script', '')
        const htmlString = actualCode
        const encodedHtml = btoa(htmlString)
        const dataUrl = `data:text/html;base64,${encodedHtml}`
        return dataUrl
    }

    return (
        <CreateComponentHomeContainer>
            <h2>Create and Edit your own component</h2>
            <div>
                <PreviewComponent code={sanitizedCode(code)} />
                <CodingStyle variant={themeValue}>
                    <AceEditor
                        mode="html"
                        theme={themeValue === 'light' ? "xcode" : "monokai"}
                        value={code}
                        onChange={setCode}
                        name="HTML_EDITOR"
                        fontSize={14}
                        highlightActiveLine={true}
                        defaultValue={code}
                    />
                </CodingStyle>
            </div>

        </CreateComponentHomeContainer>
    )
}