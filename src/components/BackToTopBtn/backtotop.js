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
                    <span className="mdi mdi-chevron-up" onClick={scrollTop}  id="toTop" style={{fontSize: 26, color: '#fff', cursor: 'pointer', display: showScroll ? 'flex' : 'none'}}></span>
            </div>
        </>
    )
}

export default ScrollButton;