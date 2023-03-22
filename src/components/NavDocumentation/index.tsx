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
            <strong>Aplicando Inteligência</strong>
            <nav>
                <NavLink to={"/docs/embedding-dax"}>Incorporando DAX</NavLink>
                <NavLink to={"/docs/dax-formating"}>Formatando valores</NavLink>
                <NavLink to={"/docs/conditional-in-code"}>Utilizando Condicionais</NavLink>
                <NavLink to={"/docs/iterating-with-dax"}>Iterando com DAX</NavLink>
            </nav>

        </NavigationContainer>

    )
}