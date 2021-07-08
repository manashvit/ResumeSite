import AboutImg from '../assets/images/aboutImg.jpg';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { makeActive } from '../store/headerSlice';

function About() {
  const dispatch=useDispatch();
  return (
    <div className="aboutDiv">
      <div>
        <img src={AboutImg} alt="img" />
      </div>
      <div>
        <div className='divHeading' style={{ alignItems: 'flex-start' }}>
          About Me
        </div>
        <div>
          Six Sigma GB certified Full Stack Web Developer working as Assistant Manager in GENPACT, India with a total experience of 5 years and currently looking forward to growing my career in FrontEnd or Backend Development. Skilled in UI and APIs development on MERN Stack along with adequate hands-on experience in Cloud Computing (AWS) and Dev-Ops technologies.
          <br />
          <br />
          Not just Technical skills but team skills, quick qdaptability, composed nature, and continuous learning attitude constitutes the basic foundation of my career which helped me to achieve various Organisation-Wide recognizations including "Rising Star or the quarter 2020" and "Operational Excellence Award".
          <br />
          <br />
          <i><ImQuotesLeft /> &nbsp;  Big Ambitions and subtle steps &nbsp;<ImQuotesRight /></i>
        </div>
        <div>
          <button className='cstbtn' onClick={()=>dispatch(makeActive('skillsDiv'))}>
            View Skills
          </button>
          <button className='cstbtn diffBtn'>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;