import React,{useState,useEffect} from 'react'
import logo from './img/logo.png'
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineInstagram,AiOutlineLinkedin,AiFillHeart } from 'react-icons/ai';
import './footerr.css'
function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const textColor = isDarkMode ? 'white' : 'black';
  return (
    <>
    <div className="foot">
    <div className="container4" id='container4'>
      <div className="logoo">
        <img src={logo} alt="logo" />
        <span>Google Developer Students Club</span>
        <span>RCOEM</span>
      </div>
      <div className="address" id='address'>
        <div className="add">
      <GoLocation id='loc'/><span> Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan,Katol Road,Nagpur- 440013</span> 
      </div>
      <div className="add">
      <HiOutlineMail id='msg'/> <span>dsc.rknec@gmail.com</span> 
      </div>
      </div>
      <div className="links">
        <span>Follow Us :</span>
        <div className="link">
          <div className="icon">
            <span style={{ color: textColor }}><AiOutlineInstagram id='icon'/></span>
            </div>
            <div className="icon">
            <span style={{ color: textColor }}><AiOutlineLinkedin/></span>
            </div>
            <div className="icon">
            <span style={{ color: textColor }}><FaXTwitter/></span>
            </div>
        </div>
      </div>
    </div>
    <span className='hr'>Love to GDSC RCOEM <AiFillHeart id='heart'/></span>
    </div>
    </>
  )
}

export default Footer;