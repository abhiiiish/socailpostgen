import React from 'react';
import logo from '../../assest/logo.png'

export default function Navbar() {
  return (
    <>
      <div className='bg-light'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between container flex-nowrap">
            <a className="navbar-brand" href="#"><img src={logo} alt="" width="25%" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" style={{flexGrow:0}} id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="#">Home <span class="sr-only"></span></a>
                  <a class="nav-item nav-link" href="#">Features</a>
                  <a class="nav-item nav-link" href="#">Pricing</a>
                </div>
            </div>
        
        </nav>
        </div> 
    </>
  )
}
