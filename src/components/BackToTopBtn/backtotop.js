import React, {useState} from 'react';



function ScrollButton(){

    const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

    return(
        <>
            <div className="to-top-container to-top-right">
                <a href="#" id="toTop" style={{display: showScroll ? 'flex' : 'none'}}>
                    <span className="mdi mdi-chevron-up" onClick={scrollTop} style={{fontSize: 26, color: '#fff'}}></span>
                </a>
            </div>
        </>
    )
}

export default ScrollButton;