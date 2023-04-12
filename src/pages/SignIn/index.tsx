import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence } from 'firebase/auth'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { auth } from '../../services/firebase'
import { SignInContainer } from './styles';
import axios from 'axios'
import { User } from 'phosphor-react';

export function SignIn() {
    document.title = 'OpenXBI | Sign In'
    const { themeValue, setUser, setProvider, languageSelect } =
        useContext(AppContext)
    const navigate = useNavigate();

    async function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        try {
            await setPersistence(auth, browserLocalPersistence);

            // A autenticação persistente foi ativada com sucesso
            // Inicia o processo de login com o Google
            const result = await signInWithPopup(auth, provider);
            setUser(result);
            setProvider(result.providerId);

            const apikey = import.meta.env.VITE_AUTH_KEY;

            const response = await axios.get(`https://uxbi.com.br/api/accounts/${result.user.email}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "api-key": `${apikey}`,
                }
            });

            if (response.data.length !== 1) {
                const data = {
                    uuid: result.user.uid,
                    display_name: result.user.displayName,
                    email: result.user.email,
                    provider: result.providerId,
                    photo_url: result.user.photoURL,
                    username: result.user.email?.split('@', 1),
                    created_at: new Date().toISOString()
                };

                await axios.post('https://uxbi.com.br/api/accounts/', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        "api-key": `${apikey}`,
                    }
                });
            }

            navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    }

    async function handleGitHubSignIn() {
        const provider = new GithubAuthProvider();

        try {
            await setPersistence(auth, browserLocalPersistence);

            const result = await signInWithPopup(auth, provider);
            setUser(result);
            setProvider(result.providerId);

            const apikey = import.meta.env.VITE_AUTH_KEY;
            try {
                const response = await axios.get(`https://uxbi.com.br/api/accounts/${result.user.email}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "api-key": `${apikey}`,
                    }
                });
                if (response.data.length !== 1) {
                    const data = {
                        uuid: result.user.uid,
                        display_name: result.user.displayName,
                        email: result.user.email,
                        provider: result.providerId,
                        photo_url: result.user.photoURL,
                        username: result.user.email?.split('@', 1),
                        created_at: new Date().toISOString()
                    };

                    await axios.post('https://uxbi.com.br/api/accounts/', data, {
                        headers: {
                            'Content-Type': 'application/json',
                            "api-key": `${apikey}`,
                        }
                    });
                }
            } catch (error) {
                console.log(error);
            }

            navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <SignInContainer variant={themeValue}>
            <div>
                <User size={35} weight='bold' />
                <h2>SignIn</h2>
                <p>{languageSelect === 'pt' ? `Fazer login com uma conta social é mais prático e seguro.` : `Logging in with a social account is more convenient and secure.`}</p>
                <button type="button" onClick={handleGoogleSignIn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 186.69 190.5"><g transform="translate(1184.583 765.171)"><path clipPath="none" mask="none" d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z" fill="#4285f4" /><path clipPath="none" mask="none" d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z" fill="#34a853" /><path clipPath="none" mask="none" d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z" fill="#fbbc05" /><path d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z" fill="#ea4335" clipPath="none" mask="none" /></g></svg>
                    Login with Google
                </button>
                <button type="button" onClick={handleGitHubSignIn}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="23" height="23" viewBox="0 0 256 256"><path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path></svg>
                    Login with GitHub
                </button>
            </div>
            <small>{languageSelect === 'pt' ? 'Nós não salvamos senhas!' : `We don't save passwords!`}</small>
        </SignInContainer>

    )
}