import { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
// import QuoteForm from './components/forms/Quote-form'
import Services from './components/services/Services'
import { imagePaths, titleConfigs } from './Configurations/common-configs'
import Carousel from './components/carousel/Carousel'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { RingLoader } from 'react-spinners'
import QuotePopup from './components/forms/Quote-form'
import Footer from './components/footer/footer'
import WhyChooseUs from './components/whyUs/WhyChooseUs'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const navRef = useRef(null)
  const servicesRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [popupOpen, setPopupOpen] = useState(false)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.carouselContainer',
      start: 'bottom 100%',
      end: 'bottom 50%',
      scrub: true,
      onUpdate: (self) => {
        const opacity = self.progress.toFixed(2)
        const padding = 40 - (25 * self.progress)
        const color = `rgb(${Math.floor(255 - 255 * self.progress)}, ${Math.floor(255 - 255 * self.progress)}, ${Math.floor(255 - 255 * self.progress)})`

        gsap.set(navRef.current, {
          backgroundColor: `rgba(255,255,255,${opacity})`,
          padding: padding
        })

        gsap.set(navRef.current.querySelectorAll('.nav-link:not(:hover)'), {
          color: color
        })
      }
    })

    if (!isLoading) {
      gsap.from(servicesRef.current, {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
    }
    console.log(isLoading)
  }, [isLoading])

  return (
    <>
      {isLoading && (
        <div className="carousel-loader" style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          position: 'fixed',
          width: '100vw',
          top: 0,
          left: 0,
          zIndex: 100
        }}>
          <RingLoader size={60} color="#46973D" />
        </div>
      )}
      <div>
        <div className='navBarEnclosure' ref={navRef}>
          <Navbar 
            title={titleConfigs.navbarTitle} 
            subTitle={titleConfigs.subTitle} 
            logoPath={imagePaths.navbarLogo}
            setPopup={setPopupOpen}
            subLinks={[
              {
                to: "#",
                title: "Home"
              },
              {
                to: "#services",
                title: "Services"
              },
              {
                to: "#whyUs",
                title: "Why SparkTech"
              },
              {
                to: "#contact",
                title: "Contact Us"
              },
            ]}
          />
      </div>
      <div className='carouselContainer'>
        <Carousel isLoading={isLoading} setIsLoading={setIsLoading}/>
      </div>
      <div ref={servicesRef} id="services">
        <Services />
      </div>
      <QuotePopup isOpen={popupOpen} setIsOpen={setPopupOpen}/>
      </div>
      <div id="whyUs">
        <WhyChooseUs/>
      </div>
      <div id="contact">
        <Footer setPopup={setPopupOpen}/>
      </div>
      
    </>
  )
}

export default App