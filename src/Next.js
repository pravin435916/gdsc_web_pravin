import React from 'react'
import './Next.css'
import n1 from './img/n1.png'
import n2 from './img/n2.png'
import n3 from './img/n3.png'
import vector from './img/Vector.png'
import v2 from './img/Vector-1.png'
import v3 from './img/Vector-2.png'
import { motion} from 'framer-motion';
function Next() {
  return (
    <>
    <div className="container2">
        <a href="#team">
      <div  
      className="arrow" >
        <img src={vector} alt="" />
        <img src={v2} alt="" />
        <img src={v3} alt="" /> 
      </div></a>
      <h1 id='team'>Get To Know us</h1>
      <motion.div 
      initial={{ x: '100%' }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }} 
      className="box">
        <h1 id='f2'>Our Mission</h1>
        <div className="flex">
        <div className="img">
          <motion.img 
            initial= { { opacity:0 }} 
            whileInView= { { opacity:1 }} 
            transition={{ duration: 1.5, ease: 'easeOut' }} 
            id='imgc'
            src={n1} alt="" />
        </div>
        <div className="content" >
        <p id='f'>Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.</p>
        </div>
        </div>
      </motion.div>

      <motion.div 
       initial={{ x: '-100%' }}
       whileInView={{ x: '0%' }}
       transition={{ duration: 0.3, ease: 'easeOut' }}
       className="box">
        <h1 id='s2'>Our Perspective</h1>
        <div className="flex">
        <div className="content" >
         <p id='s'>We’re a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team.</p>
       </div>
        <div className="img">
        <motion.img
         initial= { { opacity:0 }} 
         whileInView= { { opacity:1 }} 
         transition={{ duration: 1.5, ease: 'easeOut' }} 
          src={n2}
          id='imgc2' alt="" />
        </div>
        </div>
      </motion.div>

      <motion.div 
     initial={{ x: '100%' }}
     whileInView={{ x: '0%' }}
     transition={{ duration: 0.3, ease: 'easeOut' }}
       className="box">
        <h1 id='t2'>What Keeps Us Going</h1>
        <div className="flex">
        <div className="img">
        <motion.img
         initial= { { opacity:0 }} 
         whileInView= { { opacity:1 }} 
         transition={{ duration: 1.5, ease: 'easeOut' }} 
          src={n3} 
          id='imgc' alt="" />
        </div>
        <div className="content" >
            <p id='t'>Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights. The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.</p>
        </div>
      </div>
      </motion.div>
      <div className="circle">
        <div className="cir_in">
        <div className="box1">
          <div className="in_box">
            <motion.span
            >03+</motion.span>
          </div>
          </div>
          <span>Years</span>
        </div>
        <div className="cir_in">
        <div className="box1">
          <div className="in_box">
            <span>10+</span>
          </div>
          </div>
          <span>Events</span>
        </div>
        <div className="cir_in">
        <div className="box1">
          <div className="in_box">
            <span>1k+</span>
          </div>
          </div>
          <span>Community</span>
        </div>
        <div className="cir_in">
        <div className="box1">
          <div className="in_box">
            <span>200+</span>
          </div>
          </div>
          <span>Attendees</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Next