import { List, MoonStars, SunDim, X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { HeaderContainer, HeaderSideRight, MenuButton, MenuVertical, SeparatorHorizontal, SeparatorRightSide, SunButton } from './styles'

export function Header() {

  const { themeValue, setThemeValue } = useContext(AppContext)

  const [menuVertical, setMenuVertical] = useState<string>('closed')

  function changeTheme() {
    if (themeValue === 'light') {
      setThemeValue('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setThemeValue('light')
      localStorage.setItem('theme', 'light')
    }
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
        <SeparatorHorizontal variant={themeValue}></SeparatorHorizontal>
        {menuVertical === 'closed' ?
          <MenuButton title="changeTheme" onClick={() => setMenuVertical('open')}>
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
              <SeparatorHorizontal variant={themeValue}></SeparatorHorizontal>
              <button onClick={() => changeTheme()}>
                Alternar tema
              </button>
            </nav>
          </div>
          :
          <div></div>
        }
      </MenuVertical>
    </HeaderContainer>
  )
}
