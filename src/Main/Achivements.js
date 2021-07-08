import certifiedImg from '../assets/images/certified.png'
import educationImg from '../assets/images/education.png'
import employeeImg from '../assets/images/employee.png'
import successImg from '../assets/images/success.png'
import trainerImg from '../assets/images/trainer.png'
import satisfiedImg from '../assets/images/satisfied.png'
function Achivements() {
  return (
    <>
      <div className='divHeading'>
        Achivements
      </div>

      <div className='achDiv'>
        <div className='achCard'>
          <div style={{ backgroundImage: `url(${certifiedImg})` }} />
          <div>
            GB Certified
          </div>
          <div>
            This is a small description about activement
          </div>
        </div>
        <div className='achCard'>
          <div style={{ backgroundImage: `url(${certifiedImg})` }} />
          <div>
            GB Certified
          </div>
          <div>
            This is a small description about activement
          </div>
        </div>
        <div className='achCard'>
          <div style={{ backgroundImage: `url(${certifiedImg})` }} />
          <div>
            GB Certified
          </div>
          <div>
            This is a small description about activement
          </div>
        </div>
        <div className='achCard'>
          <div style={{ backgroundImage: `url(${certifiedImg})` }} />
          <div>
            GB Certified
          </div>
          <div>
            This is a small description about activement
          </div>
        </div>
        <div className='achCard'>
          <div style={{ backgroundImage: `url(${certifiedImg})` }} />
          <div>
            GB Certified
          </div>
          <div>
            This is a small description about activement
          </div>
        </div>
      </div>
    </>
  );
}

export default Achivements;