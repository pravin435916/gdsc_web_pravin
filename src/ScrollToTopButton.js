import React, { useState } from 'react';
import './Home.css'
import { AiOutlineArrowUp } from 'react-icons/ai';
const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top of the window
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });

  return (
    <div className="scroll-to-top-button">
      {showButton && (
        <button onClick={scrollToTop} className="scroll-button">
         <AiOutlineArrowUp/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
