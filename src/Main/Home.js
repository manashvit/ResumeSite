import { useState } from 'react';
import {FaMobileAlt,FaGooglePlusG,FaLinkedinIn} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { makeActive } from '../store/headerSlice';

function Home() {
  const [showHire,handleHire]=useState(false);
  const dispatch=useDispatch();

  const goToLink=(type)=>{
    let link=''
    switch(type){
      case 'linkedin': link="https://www.linkedin.com/in/sachin-vashist";break;
      case 'mail': link="mailto: sachinvashist82@gmail.com";break;
      default://
    }
    window.open(link,'_blank','noopener,noreferrer')
  }

  return (
    <div className={"homeDiv "+(showHire?'addHire':'')}>
      <div>
        <p>I'm Sachin</p>
        <div>Enthusiastic Full stack Web Developer</div>
        <button className='cstbtn' onClick={()=>handleHire(!showHire)}>
          Hire Me
        </button>
        <button className='cstbtn diffBtn' onClick={()=>dispatch(makeActive('aboutDiv'))}>
          About me
        </button>
      </div>
      <div>
        <p className='iconsDiv'>
        <span className='hoverTitle'><FaMobileAlt/>
            <b>+918860496464</b>
          </span>
          <span onClick={()=>goToLink('linkedin')}><FaLinkedinIn/></span>
          <span onClick={()=>goToLink('mail')}><FaGooglePlusG/></span>
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