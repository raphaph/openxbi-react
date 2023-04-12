import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { CookiesContainer } from './styles'

export function CookiesModal() {

    const { setCookiesAccept, languageSelect } = useContext(AppContext)

    function CookiesAccept() {
        localStorage.setItem('cookies-accept', 'accept')
        setCookiesAccept('accept')
    }

    return (
        <CookiesContainer>
            {languageSelect === 'pt' ?
                <div>
                    <strong>🍪 Este site utiliza cookies.</strong>
                    <p>Nós utilizamos cookies para melhorar a experiência de navegação dos usuários. Ao utilizar o site você concorda com o armazenamento de preferências do usuários e perfil conectado:</p>
                    <li>Preferência de tema</li>
                    <li>Dados do perfil conectado</li>
                    <li>Métricas de uso (Google Analytics)</li>
                    <button onClick={() => CookiesAccept()}>Aceitar</button>
                </div> :
                <div>
                    <strong>🍪 This site uses cookies.</strong>
                    <p>We use cookies to improve the browsing experience for users. By using the site, you agree to the storage of user preferences and connected profile:</p>
                    <li>Theme preference</li>
                    <li>Connected profile data</li>
                    <li>Usage metrics (Google Analytics)</li>
                    <button onClick={() => CookiesAccept()}>Accept</button>
                </div>
            }
        </CookiesContainer>
    )
}