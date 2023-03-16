import { NavDocumentation } from "../../components/NavDocumentation";
import { AppContext } from "../../context/AppContext";
import { DaxFormatingContainer } from "./styles";
import { useContext } from "react";

export function DaxFormating() {

    const { themeValue } = useContext(AppContext)

    return (
        <DaxFormatingContainer>
            <NavDocumentation />
            <div></div>
        </DaxFormatingContainer>
    )
}