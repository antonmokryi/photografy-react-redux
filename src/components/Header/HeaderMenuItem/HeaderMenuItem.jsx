import React from 'react';
import {Link} from "react-router";
const HeaderMenuItem = ({item}) => {
    return (
        <li>
            <Link className="link" to={item.url}>{item.label}</Link>
        </li>
    );
};

export default HeaderMenuItem;