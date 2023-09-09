import React from 'react'
import './Technologies.css'
import android from './img/androiid.png'
import flutter from './img/flutter.png'
import Cloud from './img/cloud.png'
import line from './img/line.png'
import { AiOutlineDown } from 'react-icons/ai';
import { motion } from 'framer-motion';
function Technologies() {
  return (
    <>
    <div className="container3">
        <div className="tech" id='event'>
            <img src={line} alt="" />
            <h1>Technologies</h1>
            <img src={line} alt="" />
        </div>
        <h3>Domains That Excite Us to Collaborate and Teach!</h3>
        <div className="boxes" id='boxes'>
           <motion.div 
           initial= { { opacity:-10 }} 
           whileInView= { { opacity:10 }} 
           transition={{ duration: 1, ease: 'easeOut' }} 
           className="boxx" id='a1'>
            <motion.img 
             
               src={android} alt="" />
            <h2 >ANDROID</h2>
            <span><AiOutlineDown/></span>
           </motion.div>
           <motion.div 
           initial= { { opacity:-10 }} 
           whileInView= { { opacity:10 }} 
           transition={{ duration: 1.5, ease: 'easeOut' }} 
           className="boxx" id='a2'>
            <img src={flutter} alt="" />
            <h2>flutter</h2>
            <span><AiOutlineDown/></span>
           </motion.div>
           <motion.div 
           initial= { { opacity:-10 }} 
           whileInView= { { opacity:10}} 
           transition={{ duration: 2.5, ease: 'easeOut' }} 
           className="boxx" id='a3'>
            <img src={Cloud} alt="" />
            <h2>Cloud</h2>
            <span><AiOutlineDown/></span>
           </motion.div>
        </div>

        <div className="faqs" id='contact'>
            <h1>FAQs</h1>
            <div className="con">
        <details>
        <motion.summary
        initial={{ x: '-100px' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        id='sum'
        >What is GDSC ?</motion.summary>
       <motion.p 
       initial= { { opacity:-10 }} 
       whileInView= { { opacity:10}} 
       transition={{ duration: 1.5, ease: 'easeOut' }} 
       id='r3'> Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
       </motion.p> </details>
           </div>

            <div className="con" >
        <details>
        <motion.summary
        initial={{ x: '-100px' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        id='sum'
        >How can you become a part of GDSC ?</motion.summary>
       <motion.p 
         initial= { { opacity:-10 }} 
         whileInView= { { opacity:10}} 
         transition={{ duration: 1.5, ease: 'easeOut' }} 
       id='g3'>  We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.</motion.p>
        </details>
           </div>
            <div className="con" >
        <details>
        <motion.summary
        initial={{ x: '-100px' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        id='sum'
        >What does a GDSC Lead do?</motion.summary>
       <motion.p 
       initial= { { opacity:-10 }} 
       whileInView= { { opacity:10}} 
       transition={{ duration: 1.5, ease: 'easeOut' }} 
       id='b3'>  A GDSC Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.</motion.p>
        </details>
           </div>
            <div className="con" >
        <details>
        <motion.summary
        initial={{ x: '-100px' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        id='sum'
        >How is DSC related to Google?</motion.summary>
       <motion.p 
       initial= { { opacity:-10 }} 
       whileInView= { { opacity:10}} 
       transition={{ duration: 1.5, ease: 'easeOut' }} 
       id='y3'>A GDSC Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.</motion.p>
        </details>
           </div>
            <div className="con" >
        <details>
        <motion.summary
        initial={{ x: '-100px' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        id='sum'
        >How to reach us?</motion.summary>
       <p id='r3'>Mail us at "dsc.rknec@gmail.com "</p>
        </details>
           </div>
        
        </div>
    </div>
    </>
  )
}

export default Technologies