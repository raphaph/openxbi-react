import { createContext, ReactNode, useEffect, useState } from 'react'
type themeValueType = 'light' | 'dark' | null


interface ContentDataProps {
  id: string
  name: string
  path: string
  type: string
  creator: string
  description: string
}

interface AppContextType {
  contentsNames: string[]
  themeValue: themeValueType
  setThemeValue: any
  clickedContent: string
  setClickedContent: any
  cookiesAccept: string
  setCookiesAccept: any
  contentData: ContentDataProps
  setContentData: any
}



interface AppContextProviderProps {
  children: ReactNode
}

export const AppContext = createContext({} as AppContextType)

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [themeValue, setThemeValue] = useState<themeValueType>(null)
  const [contentsNames, setContentsNames] = useState<string[]>([])
  const [clickedContent, setClickedContent] = useState('')
  const [cookiesAccept, setCookiesAccept] = useState('')
  const [contentData, setContentData] = useState<ContentDataProps>({
    id: '',
    name: '',
    path: '',
    type: '',
    creator: '',
    description: '',
  })


  useEffect(() => {
    const currentTheme: any = localStorage.getItem('theme')

    if (currentTheme === null) {
      setThemeValue('light')
      localStorage.setItem('theme', 'light')
    } else {
      setThemeValue(currentTheme)
    }

    const loadFiles = async () => {
      const files = await import.meta.glob('/src/components/@Contents/*.html')
      const all_files = Object.keys(files)
      setContentsNames(all_files)
    }

    loadFiles()
  }, [])

  return (
    <AppContext.Provider
      value={{
        themeValue,
        setThemeValue,
        contentsNames,
        clickedContent,
        setClickedContent,
        cookiesAccept,
        setCookiesAccept,
        contentData,
        setContentData
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
