import React from 'react'
import gsap from 'gsap';
import './Navbar.css'
import QuotePopup from '../forms/Quote-form';

function Navbar({title = "Title", subTitle = "", logoPath = "", subLinks = []}) {
    
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
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar