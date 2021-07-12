import { useState } from 'react';
import { FaMobileAlt, FaGooglePlusG, FaLinkedinIn,FaFileAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { makeActive } from '../store/headerSlice';

function Home(props) {
  const [showHire, handleHire] = useState(false),
    dispatch = useDispatch(),
    { goToLink } = props;

  return (
    <div className={"homeDiv " + (showHire ? 'addHire' : '')}>
      <div>
        <p>I'm Sachin</p>
        <div>Enthusiastic Full stack Web Developer</div>
        <button className='cstbtn' onClick={() => handleHire(!showHire)}>
          Hire Me
        </button>
        <button className='cstbtn diffBtn' onClick={() => dispatch(makeActive('aboutDiv'))}>
          About me
        </button>
      </div>
      <div>
        <p className='iconsDiv'>
          <span className='hoverTitle'><FaMobileAlt />
            <b>+918860496464</b>
          </span>
          <span onClick={() => goToLink('linkedin')}><FaLinkedinIn /></span>
          <span onClick={() => goToLink('mail')}><FaGooglePlusG /></span>
          <span onClick={() => goToLink('resume')}><FaFileAlt /></span>
        </p>
        <div style={{ lineHeight: 1.5 }}>I’m eager to receive your feedback...<br /><b>Thank You :)</b>  </div>
        <button className='cstbtn' onClick={() => handleHire(!showHire)}>
          Back
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Home;