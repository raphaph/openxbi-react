import { useContext } from "react"
import { AppContext } from "../../../context/AppContext"
import { CodePreviewStyles } from "./styles"

export function PreviewComponent({ code }: any) {
    const { themeValue } =
        useContext(AppContext)

    return (
        <CodePreviewStyles variant={themeValue}>
            <iframe src={code} frameBorder="0" height={375} width={380}></iframe>
        </CodePreviewStyles>
    )
}