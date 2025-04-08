import React from "react";
import Logo from "../assets/logo.svg";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white-600 text-black p-4 flex justify-between items-center bg-amber-50">
    <img src={Logo} alt="snoopedu-logo" />
    <div className="space-x-10">
        <Link smooth to="/#mission" className="hover:underline font-bold">About us</Link>
        <Link smooth to="/#programs" className="hover:underline font-bold">Programs</Link>
        <Link smooth to="/#contact" className="hover:underline font-bold">Contact</Link>
    </div>
    <div className="bg-teal-500 p-2 rounded-lg">
        <button className="text-lg font-bold w-50 text-white">Login to Snoopedu</button>
    </div>
    
  </nav>
);
export default Navbar   