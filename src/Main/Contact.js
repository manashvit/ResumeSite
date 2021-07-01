import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaLinkedinIn, FaGlobeAmericas, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
function Education() {
    return (
        <div className="contactDiv">
            <div className='divHeading'>
                Contact Me
            </div>
            <div>
                <div className='contactInfo'>
                    Contact info
                    <table>
                        <tbody>
                            <tr>
                                <td width='15%'><MdLocationOn /></td>
                                <td>New Delhi, India</td>
                            </tr>
                            <tr>
                                <td><MdEmail /></td>
                                <td>sachinvashist82@gmail.com</td>
                            </tr>
                            <tr>
                                <td><IoLogoWhatsapp /></td>
                                <td>+918860496464</td>
                            </tr>
                            <tr>
                                <td><FaGlobeAmericas /></td>
                                <td>sachinvashist.tk</td>
                            </tr>
                        </tbody>
                    </table>
                    Follow Me
                    <p className='iconsDiv'>
                        <span><FaLinkedinIn /></span>
                        <span><FaTwitter /></span>
                        <span><FaFacebookF /></span>
                        <span><FiInstagram /></span>
                    </p>
                </div>
                <div className='contactForm'>
                    <div>
                        <label>name</label>
                        <input type="text" placeholder="Type your name" />
                    </div>
                    <div>
                        <label>phone number</label>
                        <input type="text" placeholder="Type your phone number" />
                    </div>
                    <div>
                        <label>email</label>
                        <input type="email" placeholder="Type your email address" />
                    </div>
                    <div>
                        <label>your message</label>
                        <textarea rows="5" placeholder="Type your message here"></textarea>
                    </div>
                    <button className='cstbtn'>
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Education;