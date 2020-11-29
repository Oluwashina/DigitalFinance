import React from 'react'
import {Link} from 'react-router-dom'


const SectionSix = () =>{
    return(
        <>
         <section>
                <div className=" section_loan">
                    <div className="loan_bg" >
                        <div className="row row_def">
                            <div className="col-lg-6 loan_heading">
                                <h1 style={{lineHeight: '52px', color: '#fff', fontWeight: 500}}>Getting quick loans <br/> just got easier</h1>
                                <p className="mt-4 faq_answer" style={{color: '#fbfbfb'}}>Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon.</p>
                                {/* <!-- link to download - appstore and playstore --> */}
                                <div className="mt-5" style={{display: 'flex'}}>
                                    <a href="https://google.com"><img alt="appstore" src="img/appstore.png" className="img-fluid playstore" /></a> 
                                    <a href="https://google.com"><img alt="playstore" src="img/googlestore.png" className="img-fluid ml-2 playstore" /></a> 
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-center">
                                    <img alt="loan" src="img/loans.png" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- footer --> */}
            <div className="left_column" style={{backgroundColor: 'rgba(179, 179, 179, 0.3)'}}>
                <nav className="navbar navbar-expand-lg navbar-light">
                 <Link className="navbar-brand" to="/">
                        <img src="img/logo.png" className="d-inline-block align-top" alt="" loading="lazy" />
                    </Link>
                    </nav>
                </div>
        </>
    )
}

export default SectionSix;