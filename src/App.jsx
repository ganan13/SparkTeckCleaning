import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import QuoteForm from './components/forms/Quote-form'
import { imagePaths, titleConfigs } from './Configurations/common-configs'
import ResNavbar from './components/navbar/ResNavbar'
import * as Popper from "@popperjs/core"
import Carousel from './components/carousel/Carousel'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.to(".navbar",{
        backgroundColor: '#00000000'
        
    })
})
  return (
    <>
    <div>
      {/* <ResNavbar title={titleConfigs.navbarTitle} subTitle={titleConfigs.subTitle} logoPath={imagePaths.navbarLogo}/> */}
      <div className='navBarEnclosure'>
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
      </div>
      
      <Carousel/>
      <QuoteForm/>
    </div>
      
    </>
  )
}

export default App
