import { useEffect,useState } from "react"

function Header() {
    const [activeLink,changeLink]=useState('homeDiv')
    const linkArray=[
        {title:'Home',linkDiv:'homeDiv'},
        {title:'About Me',linkDiv:'aboutDiv'},
        {title:'Skills',linkDiv:'skillsDiv'},
        {title:'Qualifications',linkDiv:'qualDiv'},
        {title:'Portfolio',linkDiv:'workDiv'},
        {title:'Contact',linkDiv:'contactDiv'}
    ]

    useEffect(()=>{
        let elm=document.getElementsByClassName(activeLink)[0]
        elm.scrollIntoView({behavior:'smooth'})
    },[activeLink])

    return (
        <div className="cstHead" >
            <div>Hola !</div>
            <div className="cstNav">
                {linkArray.map((link,index)=><span key={index} onClick={()=>changeLink(link.linkDiv)} className={activeLink===link.linkDiv?'active':''}> {link.title} </span>)}
            </div >
        </div>
    );
}

export default Header;