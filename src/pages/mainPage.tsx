import React from 'react'
import Header from './components/header/Header'
import { MainContainer } from './components/main/main.style'
import MainSection from './components/mainSection/MainSection'

export const MainPage = () => {
  return (<MainContainer>
    <Header />
    <MainSection/>
  </MainContainer>
  )
}
