import React from 'react'
import Navbar from '../../Navbar/navbar'
import Header from '../Header/header'

const Faq = () =>{
    return(
        <>
            <Navbar />
            <Header title="Frequently Asked Question" />

             {/* section faq queations and answers */}
             <section>
              <div className="container" style={{padding: '70px 30px'}}>

                  <div className="row">
                      <div className="col-lg-5 ">
                        <h6 className="faq_question">What is the major thing?</h6>
                      </div>
                      <div className="col-lg-7">
                        <p className="faq_answer">Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon.</p>
                      </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-5">
                      <h6 className="faq_question">What is the less travel thing?</h6>
                    </div>
                    <div className="col-lg-7 faq_answer">
                      <p className="faq_answer">Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon.</p>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-5">
                      <h6 className="faq_question">How is this useful?</h6>
                    </div>
                    <div className="col-lg-7 ">
                      <p className="faq_answer">Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon.</p>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-5">
                      <h6 className="faq_question">Is this the best thing for me?</h6>
                    </div>
                    <div className="col-lg-7">
                      <p className="faq_answer">Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon.</p>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-5">
                      <h6 className="faq_question">What is the major purpose of this?</h6>
                    </div>
                    <div className="col-lg-7">
                      <p className="faq_answer">Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon.</p>
                    </div>
                </div>
                
              </div>
          </section>
        </>
    )
}

export default Faq;