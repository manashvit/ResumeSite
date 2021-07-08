import { useSelector,useDispatch } from 'react-redux';
import { makeActive } from '../store/headerSlice';

function Skills() {
  const { commSkills, techSkills } = useSelector((state) => state.skillsData),
    dispatch = useDispatch()
  return (
    <div className="skillsDiv">
      <div className='divHeading'>
        Skills
      </div>
      <div>
        My interpersonal skills allowed me to participate effectively as a member of different teams, satisfy customer’s and client’s expectations, make decisions and solve problems with other people, and generally work effectively with team members. It helped me to make and live in less stressful working environment.
      </div>

      <div className='skillsCircle'>
        {commSkills.map((skill, index) =>
          <div key={index} className="circle-border" style={{ background: `linear-gradient(270deg, var(--activeColor) ${skill.score}%, transparent 0%), linear-gradient(10deg, var(--activeColor) 50%, lightgray 50%)` }}>
            <div className="circle">
              {skill.title}
            </div>
          </div>
        )}
      </div>
      <div className='skillsCard'>
        {techSkills.map((skill, index) =>
          <div key={index} >
            <div>
              <img src={skill.icon} alt="img" />
              <p>{skill.title}</p>
              {skill.desp}
            </div>
          </div>
        )}
      </div>
      <button className='cstbtn' onClick={() => dispatch(makeActive('qualDiv'))}>
        My Qualifications
      </button>
      <br/>
    </div>
  );
}

export default Skills;