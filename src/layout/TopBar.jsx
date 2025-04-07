import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white-600 text-black p-4 flex justify-between items-center bg-amber-50">
    <img src={Logo} alt="snoopedu-logo" />
    <div className="space-x-10">
      <Link to="/" className="hover:underline font-bold">Home</Link>
      <Link to="/dashboard" className="hover:underline font-bold">Dashboard</Link>
      <Link to="/courses" className="hover:underline font-bold">Courses</Link>
    </div>
    <div className="bg-teal-500 p-2 rounded-lg">
        <button className="text-lg font-bold w-50 text-white">Login to Snoopedu</button>
    </div>
    
  </nav>
);
export default Navbar   