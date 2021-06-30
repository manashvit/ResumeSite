import { useState } from 'react';
import {FaMobileAlt,FaGooglePlusG,FaLinkedinIn} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';

function Home() {
  const [showHire,handleHire]=useState(false)
  return (
    <div className={"homeDiv "+(showHire?'addHire':'')}>
      <div>
        <p>I'm Sachin</p>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        <button className='cstbtn' onClick={()=>handleHire(!showHire)}>
          Hire Me
        </button>
      </div>
      <div>
        <p className='iconsDiv'>
          <span><FaLinkedinIn /></span>
          <span><FaGooglePlusG /></span>
          <span><FaMobileAlt /></span>
          <span><FiGithub /></span>
        </p>
        <div style={{lineHeight:1.5}}>I’m eager to receive your feedback...<br/><b>Thank You :)</b>  </div>
        <button className='cstbtn' onClick={()=>handleHire(!showHire)}>
          Back
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Home;