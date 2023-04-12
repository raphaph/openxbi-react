import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { NavigationContainer } from './styles'
import { AppContext } from '../../context/AppContext'
import { CaretRight } from 'phosphor-react'

export function NavDocumentation() {

    const { themeValue, languageSelect } =
        useContext(AppContext)

    return (

        <NavigationContainer variant={themeValue}>
            <strong>{languageSelect === 'pt' ? 'Visão Geral' : 'Overview'}</strong>
            <nav>
                <NavLink to={'/docs/introduction'}>{languageSelect === 'pt' ? 'Introdução' : 'Introduction'}<CaretRight weight='bold' /> </NavLink>
                <NavLink to={'/docs/getting-started'}>{languageSelect === 'pt' ? 'Primeiros Passos' : 'Getting Started'} <CaretRight weight='bold' /></NavLink>
                <NavLink to={'/docs/releases'}>Releases <CaretRight /></NavLink>
            </nav>
            <strong>{languageSelect === 'pt' ? 'Aplicando Inteligência' : 'Applying Intelligence'}</strong>
            <nav>
                <NavLink to={'/docs/embedding-dax'}>{languageSelect === 'pt' ? 'Incorporando DAX' : 'Embedding DAX'} <CaretRight weight='bold' /></NavLink>
                <NavLink to={'/docs/dax-formating'}>{languageSelect === 'pt' ? 'Formatando valores' : 'Formatting Values'} <CaretRight weight='bold' /></NavLink>
                <NavLink to={'/docs/conditional-in-code'}>{languageSelect === 'pt' ? 'Uso de condicionais' : 'Using Conditionals'} <CaretRight weight='bold' /></NavLink>
                <NavLink to={'/docs/iterating-with-dax'}>{languageSelect === 'pt' ? 'Iterar uma tabela' : 'Iterating a table'} <CaretRight weight='bold' /></NavLink>
            </nav>
        </NavigationContainer>

    )
}