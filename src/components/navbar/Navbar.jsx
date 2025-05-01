import React from 'react'
import gsap from 'gsap';
import './Navbar.css'
import QuotePopup from '../forms/Quote-form';

function Navbar({title = "Title", subTitle = "", logoPath = "", subLinks = [], setPopup}) {
    
  return (
    
    <>
        <nav className={`navbar navbar-expand-lg`} data-bs-theme="light">
            <div className="container-fluid">
            <div className="logo-container">
                <a className="navbar-brand" href="#">
                    <div><img src={logoPath} alt="Logo" width="40" className="d-inline-block align-text-top"/></div>
                    <div className='navTitleGroup'>
                    <div className='navTitle'>{title}</div>
                    <div className='navSubTitle'>{subTitle}</div>
                    </div>
                </a>
            </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navBarSubLinkContainer" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center navBarBold">
                        {
                            subLinks.map( (link, key) => 
                                <div key={key} className='navLink' >
                                    <a className="nav-link" href={link.to}>{link.title}</a>
                                </div>
                            )
                        } 
                        <button 
                            onClick={() => setPopup(true)}
                            className="book-now-btn"
                            style={{
                                backgroundColor: '#46973D',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50px',
                                padding: '12px 24px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(70, 151, 61, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar