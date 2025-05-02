import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WelcomeBanner.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WelcomeBanner = ({popupOpen}) => {
  const containerRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();
  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(textRef.current.children, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.2)"
    });

    gsap.from(buttonRef.current, {
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
      ease: "elastic.out(1, 0.5)"
    });

    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="welcome-banner">
      <div className="banner-content">
        <div ref={textRef} className="text-content">
          <h2>Growing with You – The Best Customer Service in Perth</h2>
          <p>
            Welcome to SparkTech Cleaning, a rising star in Perth's cleaning industry! As a passionate startup, we're proud to offer reliable, affordable, and hassle-free cleaning services tailored to your needs. Whether it's your home, apartment, or rental property, our dedicated team is here to make your space shine. We're growing every day, and so is our commitment to delivering top-notch service. Contact us now to book your first cleaning and grow with us!
          </p>
        </div>
        <button ref={buttonRef} onClick={() => {popupOpen(true)}} className="banner-button">
          Book Your Cleaning
        </button>
      </div>
      <div className="banner-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </div>
  );
};

export default WelcomeBanner;