import AboutImg from '../assets/images/aboutImg.jpg'

function Work() {
  return (
    <div className="workDiv">
      <div className='divHeading'>
        Work Experience
      </div>
      <div className='workExDesp'>
        <div>
          <span>5</span>
          Years of <br />Experience
        </div>
        <div>
          <span>8</span>
          Satisfied <br />Clients
        </div>
        <div>
          <span>24</span>
          Projects <br />Delivered
        </div>
      </div>
      <div className='workCol'>
        <div className='workCard'>
          <img src={AboutImg} alt="img" />
          <div>
            <p>Javascript Intern</p>
            Honda Car Limited<br />
            JUNE-JULY 2014
          </div>
          <div className='workOverlay'>
            <div>Description </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
        </div>
        <div className='workCard'>
          <img src={AboutImg} alt="img" />
          <div>
            <p>Javascript Intern</p>
            Honda Car Limited<br />
            JUNE-JULY 2014
          </div>
          <div className='workOverlay'>
            <div>Description </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
        </div>
        <div className='workCard'>
          <img src={AboutImg} alt="img" />
          <div>
            <p>Javascript Intern</p>
            Honda Car Limited<br />
            JUNE-JULY 2014
          </div>
          <div className='workOverlay'>
            <div>Description </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
        </div>
        <div className='workCard'>
          <img src={AboutImg} alt="img" />
          <div>
            <p>Javascript Intern</p>
            Honda Car Limited<br />
            JUNE-JULY 2014
          </div>
          <div className='workOverlay'>
            <div>Description </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
        </div>
        <div className='workCard'>
          <img src={AboutImg} alt="img" />
          <div>
            <p>Javascript Intern</p>
            Honda Car Limited<br />
            JUNE-JULY 2014
          </div>
          <div className='workOverlay'>
            <div>Description </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Work;