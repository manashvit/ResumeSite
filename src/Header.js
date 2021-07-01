import { useEffect, useState } from "react"
import { CgMenuGridR ,CgClose} from 'react-icons/cg'
function Header() {
    const [activeLink, changeLink] = useState('homeDiv')
    const [openMenu, changeMenu] = useState(false)
    const linkArray = [
        { title: 'Home', linkDiv: 'homeDiv' },
        { title: 'About Me', linkDiv: 'aboutDiv' },
        { title: 'Skills', linkDiv: 'skillsDiv' },
        { title: 'Qualifications', linkDiv: 'qualDiv' },
        { title: 'Portfolio', linkDiv: 'workDiv' },
        { title: 'Contact', linkDiv: 'contactDiv' }
    ]

    useEffect(()=>{
        let elm=document.getElementsByClassName(activeLink)[0]
        elm.scrollIntoView({behavior:'smooth'})
    },[activeLink])

    const handleLink=(linkDiv)=>{
        changeMenu(false)
        changeLink(linkDiv)
    }
    return (
        <div className="cstHead" >
            <div>Hola !</div>
            <div className="cstNavMenu" onClick={()=>changeMenu(!openMenu)}>
                {!openMenu?<CgMenuGridR />:<CgClose/>}
            </div>
            <div className={"cstNav "+(openMenu?'open':'')}>
                {linkArray.map((link, index) => <span key={index} onClick={() => handleLink(link.linkDiv)} className={activeLink === link.linkDiv ? 'active' : ''}> {link.title} </span>)}
            </div >
        </div>
    );
}

export default Header;