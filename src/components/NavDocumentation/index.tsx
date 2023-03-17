import { NavLink } from "react-router-dom";
import { NavigationContainer } from "./styles";

export function NavDocumentation() {
    return (
        <NavigationContainer>
            <strong>Visão Geral</strong>
            <nav>
                <NavLink to={"/docs/introduction"}>Introdução</NavLink>
                <NavLink to={"/docs/getting-started"}>Primeiros Passos</NavLink>
                <NavLink to={"/docs/dax-formating"}>Formatação DAX</NavLink>
            </nav>
        </NavigationContainer>

    )
}