import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { makeActive } from './store/headerSlice';
import { CgMenuGridR, CgClose } from 'react-icons/cg';

function Header() {
    const [openMenu, changeMenu] = useState(false),
        linkArray = useSelector((state) => state.headerLinks.links),
        dispatch = useDispatch();

    useEffect(()=>{
        dispatch(makeActive())
    },[dispatch])
   
    const handleLink = (linkDiv) => {
        changeMenu(false)
        dispatch(makeActive(linkDiv))
    }

    return (
        <div className="cstHead" >
            <div>Hola !</div>
            <div className="cstNavMenu" onClick={() => changeMenu(!openMenu)}>
                {!openMenu ? <CgMenuGridR /> : <CgClose />}
            </div>
            <div className={"cstNav " + (openMenu ? 'open' : '')}>
                {linkArray.map((link, index) => <span key={index} onClick={() => handleLink(link.linkDiv)} className={link.active ? 'active' : ''}> {link.title} </span>)}
            </div >
        </div>
    );
}

export default Header;