import React from 'react'
import './Navbar.css'

function Navbar({title = "Title", subTitle = "", logoPath = "", subLinks = []}) {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: '#e3f2fd00', padding: '30px'}} data-bs-theme="light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div><img src={logoPath} alt="Logo" width="40" className="d-inline-block align-text-top"/></div>
                    <div className='navTitleGroup'>
                        <div className='navTitle'>{title}</div>
                        <div className='navSubTitle'>{subTitle}</div>
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navBarSubLinkContainer" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center navBarBold">
                        {
                            subLinks.map( link => 
                                <div className='navLink' >
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