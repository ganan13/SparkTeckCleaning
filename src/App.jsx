import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import QuoteForm from './components/forms/Quote-form'
import { imagePaths, titleConfigs } from './Configurations/common-configs'
import ResNavbar from './components/navbar/ResNavbar'
import * as Popper from "@popperjs/core"

function App() {

  return (
    <>
    <div>
      {/* <ResNavbar title={titleConfigs.navbarTitle} subTitle={titleConfigs.subTitle} logoPath={imagePaths.navbarLogo}/> */}
      <Navbar 
        title={titleConfigs.navbarTitle} 
        subTitle={titleConfigs.subTitle} 
        logoPath={imagePaths.navbarLogo} 
        subLinks={[
          {
            to: "#",
            title: "Home"
          },
          {
            to: "#",
            title: "About Us"
          },
          {
            to: "#",
            title: "Contact Us"
          },
        ]}
      />
      <QuoteForm/>
    </div>
      
    </>
  )
}

export default App
