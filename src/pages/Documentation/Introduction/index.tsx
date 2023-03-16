import { useContext } from "react";
import { NavDocumentation } from "../../../components/NavDocumentation";
import { AppContext } from "../../../context/AppContext";
import { IntroductionContainer } from "./styles";

export function Introduction() {

    const { themeValue } = useContext(AppContext)

    return (
        <IntroductionContainer variant={themeValue}>
            <NavDocumentation />
            <div></div>
        </IntroductionContainer>
    )
}