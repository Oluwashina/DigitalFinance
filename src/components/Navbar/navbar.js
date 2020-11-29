import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () =>{
    return(
        <>
          <div className="container mt-3">

              <nav className="navbar navbar-expand-lg navbar-light pb-4">
                <Link className="navbar-brand" to="/">
                        <img src="img/logo.png" className="d-inline-block align-top" alt="" loading="lazy" />
                    </Link>
                
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item py-md-0 pt-4">
                        <NavLink className="nav-link" to="/faq" style={{color: '#121212' ,fontWeight: 600}}>FAQs</NavLink>
                    </li>
                    <li className="nav-item px-lg-3">
                        <NavLink className="nav-link" to="/terms" style={{color: '#121212', fontWeight: 600}}>Terms and Conditions</NavLink>
                    </li>
                    
                    <li className="nav-item px-lg-4 py-lg-0 py-3">
                        <NavLink className="nav-link" to="/" style={{color: '#990000', fontWeight: 600,
                         border: '1px solid #990000', width: 143, height: 44, textAlign: 'center'}}
                         >Sign Up</NavLink>
                    </li>
                    <li className="nav-item px-lg-1 py-lg-0 py-1">
                        <NavLink className="nav-link login" to="/" style={{color: 'white', backgroundColor: '#dd0000',
                        width: 143, height: 44, fontWeight: 600, textAlign: 'center'}}>Login</NavLink>
                    </li>
                </ul>
            </div>

        </nav>
      </div>
    </>
    )
}

export default Navbar;