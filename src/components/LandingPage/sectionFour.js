import React from 'react'

const SectionFour = () =>{
    return(
        <>
        <section className="section_invest">  
                <div className="">
                    <div className="row row_def">
                        <div className="col-lg-6">
                            <div class="invest-align">
                                <img alt="phone" src="img/Phone.svg" className="invest_image" /> 
                            </div>
                        </div>
                        <div className="col-lg-6 invest_heading">
                           <h1  style={{lineHeight: '52px', color: '#fff', fontWeight: 500}}>Save, Invest and Grow Automatically</h1>
                           <p className="mt-4 faq_answer" style={{color: '#fff'}}>Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest  possible cost with Carbon.</p>
                           <div className="mt-4" style={{display: 'flex'}}> 
                            <div className="" style={{background: '#fff', color: '#dd0000', borderRadius: '3px', textAlign: 'center', alignItems: 'center', width: '24px', height: '24px'}}><img alt="ffol" src="img/red_arrow.png" className="" style={{verticalAlign: 'inherit'}} /></div>
                            <p className="ml-3" style={{color: '#fff', fontWeight: 500}}>Create an Account</p>
                         </div>
                        </div>
                    </div>
                </div>            
               

            </section>


        </>
    )
}

export default SectionFour;