import { List, MoonStars, SunDim, User, X, SignOut, Plus } from 'phosphor-react'
import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { HeaderContainer, HeaderSideRight, MenuButton, MenuVertical, ProfileModal, SeparatorHorizontal, SeparatorRightSide, SunButton, UserAvatarName } from './styles'
import { auth } from '../../services/firebase'
import { GoogleAuthProvider, GithubAuthProvider, signOut } from 'firebase/auth'
import logoDark from '../../assets/logo-dark.svg'
import logoLight from '../../assets/logo-light.svg'
import boxDark from '../../assets/box-dark.svg'
import boxLight from '../../assets/box-light.svg'
import { LanguageSelect } from '../LanguageSelect'

const blank_default = `<div class='container'>
    <p style="color: gray">Hello World</p>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
* {
    font-family: 'Inter', sans-serif;
} 
</style>`

export function Header() {

  const { themeValue, setCreateOrEdit, setThemeValue, user, setUser, providerName, setLanguageSelect, languageSelect, setCode } = useContext(AppContext)
  const [menuVertical, setMenuVertical] = useState<string>('closed')
  const [signOutModal, setSignOutModal] = useState<string>('closed')

  function changeTheme() {
    if (themeValue === 'light') {
      setThemeValue('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setThemeValue('light')
      localStorage.setItem('theme', 'light')
    }
  }

  const navigate = useNavigate();
  const gitProvider = new GithubAuthProvider();
  function logoutGitHub() {
    signOut(auth)
      .then(() => {
        alert('Bye 🖐️ see you later!')
        setUser(null)
        setSignOutModal('closed')
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const googleProvider = new GoogleAuthProvider();
  function logoutGoogle() {
    signOut(auth)
      .then(() => {
        alert('Bye 🖐️ see you later!')
        setUser(null)
        setSignOutModal('closed')
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Teste para colocar a logo Box quando width for menor que 600
  // function getPageWidth() {
  //   return document.documentElement.clientWidth;
  // }

  // window.addEventListener("resize", function () {
  //   var larguraPagina = getPageWidth();
  //   return larguraPagina;
  // });

  return (
    <HeaderContainer variant={themeValue}>
      <NavLink to="/">
        <img
          src={themeValue === 'dark' ?
            logoDark : logoLight}
          alt=""
        />
        <img
          src={themeValue === 'dark' ?
            boxDark : boxLight}
          alt=""
        />
      </NavLink>
      <HeaderSideRight variant={themeValue}>
        <nav>
          <NavLink to="/components" title="components">
            Components
          </NavLink>
          <NavLink to="/templates" title="templates">
            Templates
          </NavLink>
          <NavLink to="/docs/introduction" title="docs">
            Docs
          </NavLink>
        </nav>
        <SeparatorRightSide variant={themeValue} />
        <LanguageSelect />
        <SunButton title="changeTheme" onClick={() => changeTheme()}>
          {themeValue === 'light' ?
            <MoonStars
              size={22}
              weight="fill"
              color={'#6b55f9'}
            /> :
            <SunDim
              size={22}
              weight="fill"
              color={'#FF8C00'}
            />
          }
        </SunButton>

        <UserAvatarName>
          {user === null ? <nav><NavLink to={"/sign-in"}>Sign In</NavLink></nav> :
            <button onClick={signOutModal === 'closed' ? () => { setSignOutModal('open'); setMenuVertical('closed'); } : () => setSignOutModal('closed')}>
              <strong>{user.providerId === 'google.com' ? user.user?.email?.split('@', 1) : user._tokenResponse?.screenName}</strong>
              {user.user.photoURL && <img src={user.user.photoURL} width={35} />}
            </button>
          }
        </UserAvatarName>
        <SeparatorHorizontal variant={themeValue}></SeparatorHorizontal>
        {menuVertical === 'closed' ?
          <MenuButton title="changeTheme" onClick={() => { setMenuVertical('open'); setSignOutModal('closed') }}>
            <List
              size={32}
              weight="bold"
              color={themeValue === 'light' ? 'black' : 'white'}
            />
          </MenuButton>
          : <MenuButton title="changeTheme" onClick={() => setMenuVertical('closed')}>
            <X
              size={32}
              weight="bold"
              color={themeValue === 'light' ? 'black' : 'white'}
            />
          </MenuButton>}
      </HeaderSideRight>

      <MenuVertical variant={themeValue}>
        {menuVertical === 'open' ?
          <div>
            <nav>
              <NavLink to="/components" title="components">
                Components
              </NavLink>
              <NavLink to="/templates" title="templates">
                Templates
              </NavLink>
              <NavLink to="/docs/introduction" title="docs">
                Docs
              </NavLink>
              {user === null ? <NavLink to={"/sign-in"}>Sign In</NavLink> :
                <NavLink to="#" onClick={providerName === 'github.com' ? () => logoutGitHub() : () => logoutGoogle()}>
                  <SignOut size={22} weight="fill" />
                  <p>Sign Out</p>
                </NavLink>}
              <SeparatorHorizontal variant={themeValue}></SeparatorHorizontal>
              <button onClick={() => changeTheme()}>
                Alternar tema
              </button>
              <button onClick={languageSelect === 'pt' ? () => setLanguageSelect('en') : () => setLanguageSelect('pt')}>
                en | pt
              </button>
            </nav>
          </div>
          :
          null
        }
      </MenuVertical>
      {signOutModal === 'closed' ? null :
        <ProfileModal variant={themeValue}>
          <button><NavLink to={"/create-component"} onClick={() => { setCreateOrEdit('create'); setCode(blank_default) }}>
            <Plus size={20} weight='bold' />Create
          </NavLink></button>
          <NavLink to={"/profile"} onClick={() => { setSignOutModal('closed') }}>
            <User size={20} weight="fill" />
            <p>Profile</p>
          </NavLink>
          <button onClick={providerName === 'github.com' ? () => logoutGitHub() : () => logoutGoogle()}>
            <SignOut size={22} weight="fill" />
            <p>Sign Out</p>
          </button>
        </ProfileModal>}
    </HeaderContainer>
  )
}
