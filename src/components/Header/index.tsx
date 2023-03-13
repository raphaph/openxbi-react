import { SunDim } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { HeaderContainer, HeaderSideRight, SeparatorRightSide } from './styles'

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
    <HeaderContainer variant={themeValue}>
      <NavLink to="/">
        <img
          src={`./src/assets/${themeValue === 'dark' ? 'logo-dark2' : 'logo-light2'
            }.svg`}
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
          <NavLink to="/services" title="services">
            Services
          </NavLink>
          <NavLink to="/documentations" title="docs">
            Docs
          </NavLink>
        </nav>
        <SeparatorRightSide variant={themeValue}></SeparatorRightSide>
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
