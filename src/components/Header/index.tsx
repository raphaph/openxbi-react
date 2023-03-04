import { SunDim } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { HeaderContainer, HeaderSideRight } from './styles'

export function Header() {
  const { themeValue, setThemeValue } = useContext(AppContext)

  function changeTheme() {
    if (themeValue === 'light') {
      setThemeValue('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setThemeValue('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={`./src/assets/${
            themeValue === 'dark' ? 'logo-dark' : 'logo-light'
          }.svg`}
          alt=""
        />
      </NavLink>

      <HeaderSideRight>
        <nav>
          <NavLink to="/components" title="components">
            Components
          </NavLink>
          <NavLink to="/" title="components">
            Templates
          </NavLink>
          <NavLink to="/" title="components">
            Services
          </NavLink>
          <NavLink to="/" title="components">
            Docs
          </NavLink>
        </nav>
        <div>|</div>
        <button title="changeTheme" onClick={() => changeTheme()}>
          <SunDim
            size={22}
            weight="fill"
            color={themeValue === 'light' ? 'black' : 'white'}
          />
        </button>
      </HeaderSideRight>
    </HeaderContainer>
  )
}
