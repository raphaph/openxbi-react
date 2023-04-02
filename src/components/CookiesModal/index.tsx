import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { CookiesContainer } from './styles'

export function CookiesModal() {

    const { setCookiesAccept } = useContext(AppContext)

    function CookiesAccept() {
        localStorage.setItem('cookies-accept', 'accept')
        setCookiesAccept('accept')
    }

    return (
        <CookiesContainer>
            <div>
                <strong>🍪 Este site utiliza cookies.</strong>
                <p>Nós utilizamos cookies para melhorar a experiência de navegação dos usuários. Ao utilizar o site você concorda com o armazenamento de preferências do usuários e perfil conectado:</p>
                <li>Preferência de tema</li>
                <li>Dados do perfil conectado</li>
                <button onClick={() => CookiesAccept()}>Aceitar</button>
            </div>
        </CookiesContainer>
    )
}