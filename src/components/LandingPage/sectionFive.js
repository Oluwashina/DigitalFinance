import React from 'react'


const SectionFive = () =>{
    return(
        <>
         <section>
                <div className="">
                    <div className="row row_def">
                        <div className="col-lg-7 column_def" style={{backgroundColor: 'rgba(179, 179, 179, 0.1)'}}>
                            <div className="section_simplify">
                                <h1 style={{lineHeight: '52px', color: '#121212', fontWeight: 500}}>Getting quick loans <br /> just got easier</h1>
                                <p className="mt-4 faq_answer">Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest  possible cost with Carbon.</p>

                                <div className="mt-4" style={{display: 'flex'}}> 
                                    <div className="" style={{background: '#dd0000', color: '#fff', borderRadius: '3px', textAlign: 'center', alignItems: 'center', width: '24px', height: '24px'}}><img alt="arrow" src="img/bi_arrow-right-short.png" className="" style={{verticalAlign: 'inherit'}} /></div>
                                    <p className="ml-3" style={{color: '#dd0000', fontWeight: 500}}>Create an Account</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5 column_def">
                            <div className="payment_design">

                                <div className="container">
                                
                                    <div className="text-center">
                                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <div>
                                                <p style={{background: '#fff', color: '#0a2e65', borderRadius: '3px', fontWeight: 500, border: '1px solid #dd0000', padding: '15px 15px'}}>N 10,000</p>
                                            </div>
                                            <div className="ml-2">
                                            <p style={{background: '#fff', color: '#0a2e65', borderRadius: '3px', fontWeight: 500, padding: '15px 15px'}}>N 100,000</p>
                                            </div>
                                            <div className="ml-2">
                                                <p style={{background: 'linear-gradient(90deg, #FFF 20.38%, rgba(240, 240, 240, 0) 100.18%)', color: '#0a2e65', borderRadius: '3px', fontWeight: 500, padding:' 15px 15px'}}>N 500,000</p>
                                            </div>
                                        </div>
                                    </div>


                                    {/* <!-- payments --> */}
                                    <div className="text-center mb-2 mt-2">
                                        <img alt="payment 1" src="img/Payment Completed.png" className="img-fluid" />
                                    </div>

                                    {/* <!-- payemnts 2 --> */}
                                    <div className="text-center mb-2">
                                        <img  alt="payment 1"src="img/Payment Completed.png" className="img-fluid" />
                                    </div>
                                    
                                    {/* <!-- payments 3 --> */}
                                    <div className="text-center mb-2">
                                        <img alt="payment 1" src="img/Payment Completed.png" className="img-fluid" />
                                    </div>

                                    {/* <!-- payments 4 --> */}
                                    <div className="text-center">
                                        <img alt="payment 1" src="img/Payment Completed.png" className="img-fluid" />
                                    </div> 

                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionFive;