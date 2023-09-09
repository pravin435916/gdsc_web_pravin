import React,{useState,useEffect} from "react";
import logo from "./img/logo.png";
import h1 from './img/h1.png'
import rope from './img/rope.png'
import plane from './img/plane.png'
import home1 from './img/home1.png'
import { FaBars } from 'react-icons/fa';
import './App.css'
import './Home.css'
function Home() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);
  
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const textColor = isDarkMode ? 'white' : 'black';
  const [isOpen, setIsOpen] = useState(false);
  return (

    <>
    <div className="home">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>GDSC RCOEM</span>
        </div>
        { (menu === false && mobile === true) ? (
            <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={() => setMenu(true)}>
            <FaBars/>
           </div>
        ) : (
         
        <ul id='ul' >
            <li onClick={()=> setMenu(false)} id="li"><a style={{ color: textColor }}  id="a" href="#">Home</a></li>
            <li onClick={()=> setMenu(false)} id="li"><a style={{ color: textColor }} id="a" href="#event">Event</a></li>
            <li onClick={()=> setMenu(false)} id="li"><a  style={{ color: textColor }} href="#team">Team</a></li>
            <li onClick={()=> setMenu(false)} id="li"><a style={{ color: textColor }} href="#alumini">Alumini</a></li>
            <li onClick={()=> setMenu(false)} id="li"><a style={{ color: textColor }}href="#contact">Contact</a></li>
          <li onClick={()=> setMenu(false)} ><label className="switch" >
            <input type="checkbox" id="mode-toggle"/>
            <span onClick={toggleDarkMode} class="slider round"></span>
        </label>  </li>
        </ul>   
         )}
      </div>
      <div className="container">
        <img src={h1} alt="" />
        <img  src={rope} alt="" />
        <img src={plane} alt="" />
        <span id='head2' style={{ color: textColor }}>RCOEM Chapter</span>
        <img src={home1} id="home1" alt="" />
        <p id="para">Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.</p>
        <button id="btn">Join Us</button>
      </div>
      </div>
    </>
  );
}

export default Home;
