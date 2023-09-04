
import Header from './components/header/Header'
import { MainContainer } from './components/main/main.style'
import MainSection from './components/mainSection/MainSection'
import { LangModal } from './components/languagePopUp/langModal'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'


export const MainPage = () => {
  const {i18n} =useTranslation()
  useEffect(() => {
    (window as any).lang.showModal()
  }, [])
  return (<>
    <MainContainer dir={i18n.dir()}>
      <Header />
      <MainSection />
    </MainContainer >
      <LangModal/>
    </>
  )
}
