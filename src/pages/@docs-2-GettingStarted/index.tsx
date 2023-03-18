import { NavDocumentation } from "../../components/NavDocumentation";
import { GetStartedContainer } from "./styles";

import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from 'react'

export function GettingStarted() {
    document.title = 'OpenXBI | GettingStarted'
    const { themeValue } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <GetStartedContainer variant={themeValue}>
            <NavDocumentation />
            <div></div>
        </GetStartedContainer>
    )
}