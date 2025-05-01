import { useRef, useState } from 'react'
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
  const [navProps, setNavProps] = useState(0)
  const navRef = useRef(null)
  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: '.carouselContainer',
      start: 'bottom 100%',
      end: 'bottom 50%',
      scrub: true,
      onUpdate: (self) => {
        setNavProps(self.progress)
      },
    });
  
    return () => {
      trigger.kill();
    };
  })
  return (
    <>
    <div>
      <div className='navBarEnclosure' ref={navRef}>
        <Navbar 
        title={titleConfigs.navbarTitle} 
        subTitle={titleConfigs.subTitle} 
        logoPath={imagePaths.navbarLogo}
        navProps={navProps} 
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
      <div className='carouselContainer'>
        <Carousel/>
      </div>
      <QuoteForm/>
    </div>
      
    </>
  )
}

export default App
