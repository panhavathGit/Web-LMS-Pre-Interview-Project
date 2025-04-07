import React from "react";
import Logo from '../assets/logo.svg';
const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-amber-50">
            <h1>©Copyright 2023. All Rights Reserved.</h1>
            <img src={Logo} alt="snoopedu-logo" className="mt-3" />
        </div>
    );
}

export default Footer;