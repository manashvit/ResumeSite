import { useDispatch, useSelector } from 'react-redux';
import { goUpSection } from '../store/headerSlice';
import { BsArrowRight } from 'react-icons/bs';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Qualifications from './Qualifications';
import Work from './Work';
import Contact from './Contact';
import { ToastContainer } from 'react-toastify';

const findActiveLink = (links) => {
  return links.find((link) => link.active).linkDiv
}

const goToLink = (type) => {
  let link = ''
  switch (type) {
    case 'linkedin': link = "https://www.linkedin.com/in/sachin-vashist"; break;
    case 'mail': link = "mailto: sachinvashist82@gmail.com"; break;
    case 'github': link = "https://github.com/ErSachinVashist"; break;
    case 'fb': link = "https://www.facebook.com/vashist82"; break;
    case 'insta': link = "https://www.instagram.com/vashist797"; break;
    case 'twitter': link = "https://twitter.com/sachinvashist82"; break;
    default://
  }
  window.open(link, '_blank', 'noopener,noreferrer')
}

function Main() {
  const dispatch = useDispatch(),
    links = useSelector(state => state.headerLinks.links);

  return (
    <div className="mainDiv">
      <button className={'cstbtn backBtn ' + (findActiveLink(links) !== 'homeDiv' && 'showUpBtn')} onClick={() => dispatch(goUpSection())}>
        <BsArrowRight size={50} />
      </button>
      <Home goToLink={goToLink} />
      <About />
      <Skills />
      <Qualifications />
      <Work />
      <Contact goToLink={goToLink} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        className="cstToaster"
      />
    </div>
  );
}

export default Main;