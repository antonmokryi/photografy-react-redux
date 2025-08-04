import React from 'react';
import {useSelector} from "react-redux";
import {selectMenu} from "../../features/headerMenu/headerMenuSlice.js";
import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem.jsx";
import HeaderLogo from "./HeaderLogo/HeaderLogo.jsx";
import style from './styleHeader.module.css'


const Header = () => {
    const menu = useSelector(selectMenu)
    return (
        <header className={style.header}>
            <div className={`${style.headerContainer}`}>
                <HeaderLogo/>
                <nav>
                    <ul>
                        {menu.map(item => (
                            <HeaderMenuItem key={item.id} item={item}/>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;