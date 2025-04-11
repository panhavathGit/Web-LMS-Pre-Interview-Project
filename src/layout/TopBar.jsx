import React from "react";
import Logo from "../assets/logo.svg";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white-600 text-black p-4 flex justify-between items-center bg-amber-50">
    <Link to="/">
        <img src={Logo} alt="snoopedu-logo" />
    </Link>
    <div className="ml-25 space-x-10">
        <Link smooth to="/#mission" className="hover:underline font-bold">About us</Link>
        <Link smooth to="/#programs" className="hover:underline font-bold">Programs</Link>
        <Link smooth to="/#contact" className="hover:underline font-bold">Contact</Link>
        {/* <Link smooth to="/dashboard" className="hover:underline font-bold">Dashboard</Link> */}
    </div>
    <Link to = "/login">
      <div className="bg-teal-500 p-2 rounded-lg">
          <button className="text-lg font-bold w-50 text-white hover:text-black transition-colors">Login to Snoopedu</button>
      </div>
    </Link>
    
  </nav>
);
export default Navbar   