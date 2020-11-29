import React from 'react'
import faded_bg from './img/faded_bg.png'


const SectionThree = () =>{
    return(
        <>
          <div className="">
                    <div className="row row_def">
                        <div className="col-lg-7 column_def" style={{backgroundColor: 'rgba(179, 179, 179, 0.1)'}}>
                            <div className="section_simplify">
                                <h1 style={{lineHeight: '52px', color: '#121212', fontWeight: 500}}>Simplified Payments <br /> all in one place</h1>
                                <p className="mt-4 faq_answer">Recharge airtime on any network, pay bills for all your  favourite services and transfer money, all at the lowest possible cost with Carbon.</p>

                                <div className="mt-4" style={{display: 'flex'}}> 
                                    <div className="" style={{background: '#dd0000',color: '#fff', borderRadius: '3px', textAlign: 'center', alignItems: 'center', width: '24px', height: '24px'}}><img alt="arrow" src="img/bi_arrow-right-short.png"  style={{verticalAlign: 'inherit'}} /></div>
                                    <p className="ml-3" style={{color: '#dd0000', fontWeight: 500, fontFamily: 'Futura'}}>Create an Account</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5 column_def">
                            <div style={{backgroundImage: `url(${faded_bg})`, backgroundSize: 'cover'}}>
                                <img alt="phone" src="img/phone.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default SectionThree;