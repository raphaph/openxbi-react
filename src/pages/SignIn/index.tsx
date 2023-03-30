import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { GoogleLogo } from 'phosphor-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { auth } from '../../services/firebase'
import { SignInContainer } from './styles';
import logoDark from '../../assets/box-dark.svg'
import logoLight from '../../assets/box-light.svg'

export function SignIn() {

    const { themeValue, setUser, setProvider } =
        useContext(AppContext)
    const navigate = useNavigate();

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                setProvider(result.providerId)
                navigate("/")

            })
            .catch((error) => {
                console.log(error)
            })

    }

    function handleGitHubSignIn() {
        const provider = new GithubAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                setProvider(result.providerId)
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <SignInContainer variant={themeValue}>
            <div>
                <img src={themeValue === 'light' ? logoLight : logoDark} alt="" width={100} />
                <h2>Acesse sua conta</h2>
                <button type="button" onClick={handleGoogleSignIn}>
                    <GoogleLogo size={23} weight="bold" />
                    Entrar com Google
                </button>
                <button type="button" onClick={handleGitHubSignIn}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="23" height="23" viewBox="0 0 256 256"><path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path></svg>
                    Entrar com GitHub
                </button>
            </div>
        </SignInContainer>

    )
}