import { NavDocumentation } from "../../components/NavDocumentation";

import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from 'react'
import { IteratingDaxContainer, IteratingText, IterationContent } from "./styles";

export function IteratingDax() {
    document.title = 'OpenXBI | Iterating With Dax'
    const { themeValue } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <IteratingDaxContainer variant={themeValue}>
            <NavDocumentation />
            <IterationContent>
                <IteratingText>
                    <h1>Iterando HTML com DAX</h1>
                </IteratingText>
            </IterationContent>
        </IteratingDaxContainer>
    )
}