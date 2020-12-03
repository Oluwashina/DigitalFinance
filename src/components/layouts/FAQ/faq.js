import React from 'react'
import Navbar from '../../Navbar/navbar'
import Header from '../Header/header'

const Faq = () =>{

  const data = [
    { id: 1, 
      question: "What is the major thing?",
      answer: "Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon."
    },
    { 
      id: 2,
      question: "What is the less travel thing?",
      answer: "Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon."
     },
    { id: 3, 
      question: "How is this useful",
      answer: "Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon."   
    },
    { id: 4,
      question: "Is this the best thing for me?",
      answer: "Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon."   
    },
    { id: 5, 
      question: "What is the major purpose of this?",
      answer: "Recharge airtime on any network, pay bills for all your favourite services and transfer money, all at the lowest possible cost with Carbon."   
    }  
  ];

    return(
        <>
            <Navbar />
            <Header title="Frequently Asked Question" />

             {/* section faq queations and answers */}
             <section>
              <div className="container" style={{padding: '70px 30px'}}>

                  {/* FAQ mapping */}
                  {data.map((user) => (
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