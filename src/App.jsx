import { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import QuoteForm from './components/forms/Quote-form'
import { imagePaths, titleConfigs } from './Configurations/common-configs'
import Carousel from './components/carousel/Carousel'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const navRef = useRef(null)
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.carouselContainer',
      start: 'bottom 100%',
      end: 'bottom 50%',
      scrub: true,
      onUpdate: (self) => {
        const opacity = self.progress.toFixed(2);
        const padding = 30 - (25 * self.progress);
        const color = `rgb(${Math.floor(255 - 255 * self.progress)}, ${Math.floor(255 - 255 * self.progress)}, ${Math.floor(255 - 255 * self.progress)})`;

        gsap.set(navRef.current, {
          backgroundColor: `rgba(255,255,255,${opacity})`,
          padding: padding
        });

        gsap.set(navRef.current.querySelectorAll('.nav-link:not(:hover)'), {
          color: color
        });

      },
    });
  })
  return (
    <>
    <div>
      <div className='navBarEnclosure' ref={navRef}>
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
      <div className='carouselContainer'>
        <Carousel/>
      </div>
      <QuoteForm/>
    </div>
      
    </>
  )
}

export default App
