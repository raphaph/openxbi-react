import { NavLink } from "react-router-dom";
import { NavigationContainer } from "./styles";

export function NavDocumentation() {
    return (
        <NavigationContainer>
            <strong>Visão Geral</strong>
            <nav>
                <NavLink to={"/docs/introduction"}>Introdução</NavLink>
                <NavLink to={"/docs/getting-started"}>Primeiros Passos</NavLink>

            </nav>
            <strong>Inteligência com DAX</strong>
            <nav>
                <NavLink to={"/docs/embedding-dax"}>Incorporando DAX</NavLink>
                <NavLink to={"/docs/dax-formating"}>Formatando valores</NavLink>
                <NavLink to={"/docs/iterating-with-dax"}>Iterando com DAX</NavLink>
            </nav>

        </NavigationContainer>

    )
}