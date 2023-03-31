import { List, MoonStars, SunDim, User, X, SignOut } from 'phosphor-react'
import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { HeaderContainer, HeaderSideRight, MenuButton, MenuVertical, ProfileModal, SeparatorHorizontal, SeparatorRightSide, SunButton, UserAvatarName } from './styles'
import { auth } from '../../services/firebase'
import { GoogleAuthProvider, GithubAuthProvider, signOut } from 'firebase/auth'

export function Header() {

  const { themeValue, setThemeValue, user, setUser, providerName } = useContext(AppContext)
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
          src={`/src/assets/${themeValue === 'dark' ?
            'logo-dark.svg' : 'logo-light.svg'}`}
          alt=""
        />
        <img
          src={`/src/assets/${themeValue === 'dark' ?
            'box-dark.svg' : 'box-light.svg'}`}
          alt=""
        />
      </NavLink>
      <HeaderSideRight>
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
        <SunButton title="changeTheme" onClick={() => changeTheme()}>
          {themeValue === 'light' ?
            <MoonStars
              size={22}
              weight="fill"
              color={'purple'}
            /> :
            <SunDim
              size={22}
              weight="fill"
              color={'orange'}
            />
          }
        </SunButton>
        <UserAvatarName>
          {user === null ? <nav><NavLink to={"/sign-in"}>Sign In</NavLink></nav> :
            <button onClick={signOutModal === 'closed' ? () => { setSignOutModal('open'); setMenuVertical('closed'); } : () => setSignOutModal('closed')}>
              <strong>{user.displayName?.split(' ', 1)}</strong>
              {user.photoURL && <img src={user.photoURL} width={35} />}
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
              <NavLink to={"/sign-in"}>
                Sign In
              </NavLink>
              <SeparatorHorizontal variant={themeValue}></SeparatorHorizontal>
              <button onClick={() => changeTheme()}>
                Alternar tema
              </button>
            </nav>
          </div>
          :
          null
        }
      </MenuVertical>
      {signOutModal === 'closed' ? null :
        <ProfileModal variant={themeValue}>
          <button><a href='https://discord.gg/BTgztvKF7E' target={"_blank"}>Discord</a></button>
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
