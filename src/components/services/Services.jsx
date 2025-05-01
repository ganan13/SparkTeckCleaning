import React, { useRef } from 'react';
import './Services.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const servicesData = [
  {
    category: "Residential Cleaning",
    items: [
      "Regular home cleaning (weekly, fortnightly, monthly)",
      "Deep cleaning / Spring cleaning",
      "End of lease / Bond cleaning",
      "Carpet and upholstery cleaning",
      "Window cleaning (interior & exterior)",
      "Oven and appliance cleaning"
    ]
  },
  {
    category: "Commercial Cleaning",
    items: [
      "Office cleaning (daily, weekly, or custom schedules)",
      "Retail store cleaning",
      "Medical and healthcare facility cleaning",
      "School and childcare centre cleaning",
      "Gym and fitness centre cleaning",
      "Common area maintenance (apartment buildings, complexes)"
    ]
  },
  {
    category: "Construction Cleaning",
    items: [
      "Builders final clean",
      "Post-renovation cleaning",
      "Site dust and debris removal",
      "High-pressure cleaning"
    ]
  }
];

function Services() {
  const serviceRefs = useRef([]);

  useGSAP(() => {
    serviceRefs.current.forEach((ref, index) => {
      gsap.from(ref, {
        scrollTrigger: {
          trigger: ref,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.7)"
      });
    });
  });

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Cleaning Services</h2>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              ref={el => serviceRefs.current[index] = el}
            >
              <h3 className="service-category">{service.category}</h3>
              <ul className="service-list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="service-item">
                    <span className="service-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;