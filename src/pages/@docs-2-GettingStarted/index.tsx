import { NavDocumentation } from "../../components/NavDocumentation";
import { GetStartedContainer } from "./styles";

import { AppContext } from "../../context/AppContext";
import { useContext } from 'react'

export function GettingStarted() {
    document.title = 'OpenXBI | GettingStarted'
    const { themeValue } = useContext(AppContext)

    return (
        <GetStartedContainer variant={themeValue}>
            <NavDocumentation />
            <div></div>
        </GetStartedContainer>
    )
}