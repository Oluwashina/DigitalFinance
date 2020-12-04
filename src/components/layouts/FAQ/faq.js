import React from 'react'
import Navbar from '../../Navbar/navbar'
import Header from '../Header/header'
import {faqData} from '../../../data.js'

const Faq = () =>{

    return(
        <>
            <Navbar />
            <Header title="Frequently Asked Question" />

             {/* section faq queations and answers */}
             <section>
              <div className="container" style={{padding: '70px 30px'}}>

                  {/* FAQ mapping */}
                  {faqData.map((user) => (
                    <div key={user.id} className="row mb-4">
                    <div className="col-lg-5 ">
                   <h6 className="faq_question">{user.question}</h6>
                    </div>
                    <div className="col-lg-7">
                    <p className="faq_answer">{user.answer}</p>
                    </div>
                </div>
                  ))}             
              
              </div>
          </section>
        </>
    )
}

export default Faq;