import React from 'react';
import faq from './img/faqbg.png'


const Header = (props) =>{
    return(
        <>
             <section style={{backgroundImage: `url(${faq})`, backgroundSize: 'cover'}}>
                 <div className="container">
                    <div style={{paddingTop: 50, paddingBottom: 50}}>
                    <h3 className="text-center text-white">{props.title}</h3>
                    </div>  
                 </div>
             </section>
        </>
    )
}

export default Header;