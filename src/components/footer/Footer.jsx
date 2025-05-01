import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Footer.css';

gsap.registerPlugin(useGSAP);

function Footer({setPopup}) {
  useGSAP(() => {
    gsap.from(".footer-content", {
      scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h3 className="footer-logo">SPARKTECH CLEANING</h3>
          <p className="footer-motto">Growing with You – The Best Customer Service in Perth</p>
          <div className="social-icons">
            <motion.a 
              href="#" 
              whileHover={{ y: -5 }}
              className="social-icon"
            >
              <FaFacebook />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -5 }}
              className="social-icon"
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -5 }}
              className="social-icon"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>9 Puncheon St, Langford WA 6147</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>0452 158 969</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>info@sparktechcleaning.com</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h4>Quick Links</h4>
          <ul className="quick-links">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#contact" onClick={() => setPopup(true)}>Get a Quote</a></li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h4>Newsletter</h4>
          <p>Subscribe for cleaning tips and special offers</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SPARKTECH CLEANING. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;