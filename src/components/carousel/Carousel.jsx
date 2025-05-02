import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import img1 from '../../assets/carouselImage/image1.png';
import img2 from '../../assets/carouselImage/image2.png';
import img3 from '../../assets/carouselImage/image3.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    image: img1,
    title: 'Sparkling Clean. Naturally Green.',
    description: `Eco-friendly home and office cleaning services you can trust. We go beyond surface shine using <span class="highlight">safe, non-toxic products</span> that protect your family, your team, and the planet. Enjoy <span class="highlight">flexible scheduling</span>, support from a <span class="highlight">trusted local crew</span>, and our <span class="highlight">100% satisfaction guarantee</span>.`
  },
  {
    image: img2,
    title: 'Breathe Easy. Live Clean.',
    description: `We deliver freshness with every swipe <span class="highlight">safely and sustainably</span>. Our professional cleaners bring <span class="highlight">eco-conscious care</span> to every corner of your space, leaving it spotless and serene. With <span class="highlight">pet & child-safe solutions</span>, and the convenience of <span class="highlight">easy online booking</span>, your peace of mind starts here.`
  },
  {
    image: img3,
    title: 'Where Clean Meets Care.',
    description: `Our green cleaning services combine the power of precision with the heart of care. From daily maintenance to deep cleans, we treat your space as if it were our own delivering a <span class="highlight">healthier environment</span>, a <span class="highlight">brighter appearance</span>, and <span class="highlight">transparent pricing</span> that makes sense.`
  }
];

function Carousel({isLoading, setIsLoading}) {
  const totalImages = slides.length;
  const captionRefs = useRef([]);
  var loadedImages = 1

  const handleImgLoad = (id) => {
    loadedImages += 1
    setIsLoading(!(totalImages <= loadedImages))
    console.log(loadedImages)
  }

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        const carousel = document.querySelector('#carouselExampleFade');
        const nextButton = carousel?.querySelector('.carousel-control-next');
        nextButton?.click();
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
            <div className="carousel-content-wrapper">
              <img
                src={slide.image}
                className="carousel-img"
                alt={`slide ${idx + 1}`}
                loading="eager"
                onLoad={() => handleImgLoad(idx)}
              />
              <div
                className="carousel-caption"
                ref={(el) => (captionRefs.current[idx] = el)}
              >
                <h2>{slide.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: slide.description }}></p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;