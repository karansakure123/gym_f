import React from 'react';
import "./style/Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://www.mmamatrix.org/img/logo.svg" alt="Logo"  width="180" height="84" className="d-inline-block align-text-top img-fluid" />
         </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-itms active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                  className='nav-itms'
              >
                About
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
 
 TeamAbout</a>
                </li>    
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-itms" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-itms" href="#">
                Contact us
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
