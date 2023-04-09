import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { NavigationContainer } from './styles'
import { AppContext } from '../../context/AppContext'

export function NavDocumentation() {

    const { themeValue } =
        useContext(AppContext)

    return (
        <NavigationContainer variant={themeValue}>
            <strong>Visão Geral</strong>
            <nav>
                <NavLink to={'/docs/introduction'}>Introdução</NavLink>
                <NavLink to={'/docs/getting-started'}>Primeiros Passos</NavLink>
                <NavLink to={'/docs/releases'}>Releases</NavLink>
            </nav>
            <strong>Aplicando Inteligência</strong>
            <nav>
                <NavLink to={'/docs/embedding-dax'}>Incorporando DAX</NavLink>
                <NavLink to={'/docs/dax-formating'}>Formatando valores</NavLink>
                <NavLink to={'/docs/conditional-in-code'}>Utilizando Condicionais</NavLink>
                <NavLink to={'/docs/iterating-with-dax'}>Iterar uma tabela</NavLink>
            </nav>
        </NavigationContainer>

    )
}