import React from 'react';
import Header from "../components/Header/Header.jsx";
import {Outlet} from "react-router";
import "../index.css"
const MainLayout = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
        </>
    );
};

export default MainLayout;