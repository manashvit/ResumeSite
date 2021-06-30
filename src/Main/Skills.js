import cloudImg from '../assets/images/cloud.png'
import databaseImg from '../assets/images/database.png'
import deviceImg from '../assets/images/device.png'
import devopsImg from '../assets/images/devops.png'
import linuxImg from '../assets/images/linux.png'
import reactimg from '../assets/images/react.png'
import { SiMicrosoftsharepoint, SiNodeDotJs } from 'react-icons/si'

function Skills() {
  return (
    <div className="skillsDiv">
      <div className='divHeading'>
        Skills
      </div>
      <div>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur
      </div>

      <div className='skillsCircle'>
        <div className="circle-border">
          <div className="circle">
            Client<br />Management
          </div>
        </div>
        <div className="circle-border">
          <div className="circle">
            Team<br /> Management
          </div>
        </div>
        <div className="circle-border">
          <div className="circle">
            Agile<br /> Development
          </div>
        </div>
        <div className="circle-border">
          <div className="circle">
            Process <br />Adaptability
          </div>
        </div>
        <div className="circle-border">
          <div className="circle">
            Learning <br />Management
          </div>
        </div>
      </div>
      <div className='skillsCard'>
        <div>
          <div>
            <img src={reactimg} alt="img" />
            <p>Web Development</p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </div>
        </div>
        <div>
          <div>
            <SiNodeDotJs />
            <p>Web Development</p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </div>
        </div>
        <div>
          <div>
            <SiMicrosoftsharepoint />
            <p>Web Development</p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </div>
        </div>
        <div>
          <div>
            <img src={deviceImg} alt="img" />
            <p>Web Development</p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </div>
        </div>
        <div>
          <div>
            <img src={cloudImg} alt="img" />
            <p>Web Development</p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </div>
        </div>
        <div>
          <div>
            <img src={databaseImg} alt="img" />
            <p>Web Development</p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </div>
        </div>
        <div>
          <div>
            <img src={devopsImg} alt="img" />
            <p>Web Development</p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </div>
        </div>
        <div>
          <div>
            <img src={linuxImg} alt="img" />
            <p>Web Development</p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;