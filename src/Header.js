import { useEffect, useState } from "react"
import { CgMenuGridR, CgClose } from 'react-icons/cg'

const linkArray = [
    { title: 'Home', linkDiv: 'homeDiv' },
    { title: 'About Me', linkDiv: 'aboutDiv' },
    { title: 'Skills', linkDiv: 'skillsDiv' },
    { title: 'Qualifications', linkDiv: 'qualDiv' },
    { title: 'Portfolio', linkDiv: 'workDiv' },
    { title: 'Contact', linkDiv: 'contactDiv' }
]

function Header() {
    const [activeLink, changeLink] = useState('homeDiv')
    const [openMenu, changeMenu] = useState(false)

    const scrollMain=()=>{
        let divs = document.getElementsByClassName("mainDiv")[0].children,
                divsArray = [...divs],
                elm = document.getElementsByClassName(activeLink)[0];
            divsArray.forEach((div)=>{
                console.log(div.className)
                if (div.className.indexOf('awayDiv')===-1)
                div.className+=' awayDiv'
            })    
            elm.scrollIntoView({ behavior: 'smooth' })
            elm.className=activeLink
    }

    // useEffect(scrollMain, [])
    useEffect(scrollMain, [activeLink])

    const handleLink = (linkDiv) => {
        changeMenu(false)
        changeLink(linkDiv)
    }
    return (
        <div className="cstHead" >
            <div>Hola !</div>
            <div className="cstNavMenu" onClick={() => changeMenu(!openMenu)}>
                {!openMenu ? <CgMenuGridR /> : <CgClose />}
            </div>
            <div className={"cstNav " + (openMenu ? 'open' : '')}>
                {linkArray.map((link, index) => <span key={index} onClick={() => handleLink(link.linkDiv)} className={activeLink === link.linkDiv ? 'active' : ''}> {link.title} </span>)}
            </div >
        </div>
    );
}

export default Header;