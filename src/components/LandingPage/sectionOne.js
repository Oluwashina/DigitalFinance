import React from 'react'
import head_bg from './img/head_bg.png'
import {Link, NavLink} from 'react-router-dom'


const SectionOne = () =>{
    return(
        <>
 
        {/* Header section */}
     <div className="row row_def">
         <div className="col-lg-6 column_def">

         <div style={{background: 'rgba(179, 179, 179, 0.1)', height: '100%'}}>
                 <div className="left_column" style={{backgroundColor: '#fff'}}>
                     <nav className="navbar navbar-expand-lg navbar-light" style={{padding: 0}}>
                            <Link className="navbar-brand" to="/">
                                <img src="img/logo.png" className="d-inline-block align-top" alt="" loading="lazy" />
                            </Link>

                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                             <span className="navbar-toggler-icon"></span>
                         </button>

                         <div className="collapse navbar-collapse" id="navbarNav">
                             <ul className="navbar-nav ml-auto  d-sm-block d-lg-none d-md-block">
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
                


              {/* Title section */}
              <div>
                 <div className="hero_contain">
                     <h1 style={{color: '#121212', fontWeight: 500, lineHeight: '52px'}}>Your Pathway to financial future</h1>
                     <p className="mt-4 faq_answer">Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon.</p>

                     <div className="mt-5">
                         <button className="btn btn-create">Create an Account</button>
                     </div>

                     {/* link to download - appstore and playstore */}
                         <div className="mt-4" style={{display: 'flex'}}>
                            <a href="https://google.com"><img alt="" src="img/Appstore.svg" className="img-fluid" /></a> 
                            <a href="https://google.com"><img alt="" src="img/Googleplay.svg" className="img-fluid ml-2" /></a> 
                         </div>

                 </div>
                
             </div>
             </div>
         </div>
         <div className="col-lg-6 column_def d-none d-md-none d-lg-block">
             <div style={{backgroundImage: `url(${head_bg})`, backgroundSize: 'cover',  height: '100%'}}>
                 <div className="">

                 <ul className="menu_list">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/faq" style={{color: '#fff' ,fontWeight: 500}}>FAQs</NavLink>
                    </li>
                    <li className="nav-item px-lg-2">
                        <NavLink className="nav-link" to="/terms" style={{color: '#fff', fontWeight: 500}}>Terms and Conditions</NavLink>
                    </li>
                    
                    <li className="nav-item px-lg-4">
                        <NavLink className="nav-link" to="/" style={{color: '#fff', fontWeight: 500,
                         border: '1px solid #fff', width: 143, height: 44, textAlign: 'center'}}
                         >Sign Up</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link login" to="/" style={{color: '#dd0000', backgroundColor: '#fff',
                        width: 143, height: 44, fontWeight: 500, textAlign: 'center'}}>Login</NavLink>
                    </li>
                </ul>
                     
                 </div>
                

                 <div className="img_hero">
                 <img alt="" src="img/woman.png" className="img-fluid" style={{marginLeft: -80}} />
                 </div>
                 
             </div>
         </div>
        </div>
        </>
    )
}

export default SectionOne;