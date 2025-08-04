import React from 'react';
import {useSelector} from "react-redux";
import {selectMenu} from "../../features/headerMenu/headerMenuSlice.js";
import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem.jsx";

const Header = () => {
    const menu = useSelector(selectMenu)
    return (
        <header>
            <ul>
                {menu.map(item => (
                    <HeaderMenuItem key={item.id} item={item} />
                ))}
            </ul>
        </header>
    );
};

export default Header;