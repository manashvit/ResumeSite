import AboutImg from '../assets/images/aboutImg.jpg'
function About() {
  return (
    <div className="aboutDiv">
      <div>
        <img src={AboutImg} alt="img" />
      </div>
      <div>
        <div className='divHeading' style={{alignItems:'flex-start'}}> 
          About Me
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.
        </div>
        <div>
          <button className='cstbtn'>
            View Skills
          </button>
          <button className='cstbtn' style={{ background: 'transparent' }}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;