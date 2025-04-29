import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import QuoteForm from './components/forms/Quote-form'
import { imagePaths, titleConfigs } from './Configurations/common-configs'

function App() {

  return (
    <>
    <div>
      <Navbar title={titleConfigs.navbarTitle} subTitle={titleConfigs.subTitle} logoPath={imagePaths.navbarLogo}/>
      <QuoteForm/>
    </div>
      
    </>
  )
}

export default App
