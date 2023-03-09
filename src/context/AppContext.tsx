import { createContext, ReactNode, useEffect, useState } from 'react'

type themeValueType = 'light' | 'dark' | null

interface AppContextType {
  contentsNames: string[]
  themeValue: themeValueType
  setThemeValue: any
  clickedContent: string
  setClickedContent: any
}

interface AppContextProviderProps {
  children: ReactNode
}

interface ContentsNameProps {
  contentsNames: []
}

export const AppContext = createContext({} as AppContextType)

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [themeValue, setThemeValue] = useState<themeValueType>(null)
  const [contentsNames, setContentsNames] = useState<string[]>([])
  const [clickedContent, setClickedContent] = useState('')

  useEffect(() => {
    const loadFiles = async () => {
      const files = await import.meta.glob('/src/components/@Contents/*.html')
      const files2 = Object.keys(files)
      setContentsNames(files2)
    }

    loadFiles()
  }, [])

  console.log(contentsNames)

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
    <AppContext.Provider
      value={{
        themeValue,
        setThemeValue,
        contentsNames,
        clickedContent,
        setClickedContent,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
