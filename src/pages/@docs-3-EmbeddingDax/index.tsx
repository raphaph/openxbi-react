import { NavDocumentation } from "../../components/NavDocumentation";

import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from 'react'
import { EmbeddingContent, EmbeddingDaxContainer, EmbeddingText } from "./styles";

export function EmbeddingDax() {
    document.title = 'OpenXBI | Embedding Dax'
    const { themeValue } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <EmbeddingDaxContainer variant={themeValue}>
            <NavDocumentation />
            <EmbeddingContent>
                <EmbeddingText>
                    <h1>Incorporando DAX ao código</h1>
                </EmbeddingText>
            </EmbeddingContent>
        </EmbeddingDaxContainer>
    )
}