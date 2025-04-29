import React from 'react'
import './Navbar.css'

function Navbar({title = "Title", subTitle = "", logoPath = ""}) {
  return (
    <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div><img src={logoPath} alt="Logo" width="40" className="d-inline-block align-text-top"/></div>
                    <div className='navTitleGroup'>
                        <div className='navTitle'>{title}</div>
                        <div className='navSubTitle'>{subTitle}</div>
                    </div>
                </a>
            </div>
        </nav>
    </>
  )
}

export default Navbar