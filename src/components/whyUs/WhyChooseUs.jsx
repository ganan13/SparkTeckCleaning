import React from 'react';
import { FaCheckCircle, FaClock, FaCalendarAlt, FaHeadset, FaShieldAlt, FaDollarSign, FaBell } from 'react-icons/fa';
// import { motion, MotionConfig } from 'framer-motion';
// import { motion } from "motion/react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './WhyChooseUs.css';

gsap.registerPlugin(useGSAP);

const features = [
  {
    icon: <FaClock size={40} />,
    title: "Quick & Simple Booking",
    description: "Booking your clean has never been easier! Fill out our quick online form in under a minute and get notified by SMS or email when your quote is ready."
  },
  {
    icon: <FaCalendarAlt size={40} />,
    title: "Flexible Scheduling – No Lock-In Contracts",
    description: "We understand that life changes – that's why we offer flexible one-off cleans with the option to move to a regular schedule later. You're always in control, with easy cancellations or rescheduling available with 48-hour notice."
  },
  {
    icon: <FaHeadset size={40} />,
    title: "Friendly, Responsive Support",
    description: "As a growing startup, we pride ourselves on personal service. Our team is here to support you every step of the way – fast responses, real solutions, and genuine care."
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Reliable & Professional",
    description: "We come fully prepared – police-cleared, insured, and equipped with everything we need to get the job done right."
  },
  {
    icon: <FaDollarSign size={40} />,
    title: "Honest, Upfront Pricing",
    description: "No surprises here! Our pricing is transparent, with no hidden fees or sneaky add-ons. What you see is what you pay."
  },
  {
    icon: <FaBell size={40} />,
    title: "Helpful Reminders",
    description: "Never miss an appointment – we'll send you helpful SMS and email reminders before each clean so everything runs smoothly."
  }
];

function WhyChooseUs() {
  useGSAP(() => {
    gsap.from(".why-choose-us-title", {
      scrollTrigger: {
        trigger: ".why-choose-us",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.from(".feature-item", {
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      delay: 0.3,
      ease: "back.out(1.2)"
    });
  });

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="why-choose-us-title">Why Choose Us</h2>
        <p className="why-choose-us-subtitle">Discover the SparkTech Cleaning difference</p>
        
        <div className="features-grid">
            {features.map((feature, index) => (
                <div key={index} className="feature-item">
                <div className="feature-icon">
                    {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;