import { createContext, ReactNode, useEffect, useState } from 'react'

type themeValueType = 'light' | 'dark' | null

interface AppContextType {
  themeValue: themeValueType
  setThemeValue: any
}

interface AppContextProviderProps {
  children: ReactNode
}

export const AppContext = createContext({} as AppContextType)

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [themeValue, setThemeValue] = useState<themeValueType>(null)

  useEffect(() => {
    const currentTheme: any = localStorage.getItem('theme')

    if (currentTheme === null) {
      setThemeValue('light')
      localStorage.setItem('theme', 'light')
    } else {
      setThemeValue(currentTheme)
    }
  }, [])

  return (
    <AppContext.Provider value={{ themeValue, setThemeValue }}>
      {children}
    </AppContext.Provider>
  )
}
