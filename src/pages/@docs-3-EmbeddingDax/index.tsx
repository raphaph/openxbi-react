import { NavDocumentation } from "../../components/NavDocumentation";

import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from 'react'
import { EmbeddingDaxContainer } from "./styles";

export function EmbeddingDax() {
    document.title = 'OpenXBI | Use Dax'
    const { themeValue } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <EmbeddingDaxContainer variant={themeValue}>
            <NavDocumentation />
            <div></div>
        </EmbeddingDaxContainer>
    )
}