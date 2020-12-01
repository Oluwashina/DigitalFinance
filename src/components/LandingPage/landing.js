import React from 'react'
// import Navbar from '../Navbar/navbar'
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import SectionFour from './sectionFour';
import SectionFive from './sectionFive'
import SectionSix from './sectionSix'
import Back from '../BackToTopBtn/backtotop'

const Landing = () =>{
    return(
        <div>
            <Back />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </div>
    )
}

export default Landing;