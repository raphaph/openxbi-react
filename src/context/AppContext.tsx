import { createContext, ReactNode, useEffect, useState } from 'react'
type themeValueType = 'light' | 'dark' | null

interface ContentDataProps {
  id: string
  name: string
  path: string
  type: string
  creator: string,
  likes: number,
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
  user: any | null
  setUser: any
  providerName: string | null
  setProvider: any
  componentName: string,
  setComponentName: any,
  code: string,
  setCode: any;
  createOrEdit: string;
  setCreateOrEdit: any;
  showModal: boolean;
  setShowModal: any;
  languageSelect: string;
  setLanguageSelect: any;
}



interface AppContextProviderProps {
  children: ReactNode
}

export const AppContext = createContext({} as AppContextType)

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [themeValue, setThemeValue] = useState<themeValueType>(null)
  const [contentsNames, setContentsNames] = useState<string[]>([])
  const [clickedContent, setClickedContent] = useState('')
  const [cookiesAccept, setCookiesAccept] = useState('')
  const [user, setUser] = useState(null);
  const [providerName, setProvider] = useState<string | null>(null)
  const [componentName, setComponentName] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [createOrEdit, setCreateOrEdit] = useState<string>('create')
  const [languageSelect, setLanguageSelect] = useState('en');
  const [contentData, setContentData] = useState<ContentDataProps>({
    id: '',
    name: '',
    path: '',
    type: '',
    creator: '',
    likes: 0,
    description: '',
  })


  useEffect(() => {
    const currentTheme: any = localStorage.getItem('theme')

    if (currentTheme === null) {
      setThemeValue('dark')
      localStorage.setItem('theme', 'dark')
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
        setContentData,
        user,
        setUser,
        providerName,
        setProvider,
        componentName,
        setComponentName,
        code,
        setCode,
        createOrEdit,
        setCreateOrEdit,
        showModal,
        setShowModal,
        languageSelect,
        setLanguageSelect
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
