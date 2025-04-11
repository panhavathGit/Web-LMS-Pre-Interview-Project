import { useState } from "react";
import { FaBox,  FaBookOpen,FaClipboardList } from "react-icons/fa";
import Logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast,ToastContainer } from "react-toastify";

const Sidebar = ({ onSelect }) => {
    const menuItems = [
        { id: "overview", name: "Overview", icon: <FaBox /> },
        { id: "courses", name: "Courses", icon: <FaBookOpen /> },
        { id: "assignments", name: "Assignments", icon: <FaClipboardList /> },
    ];
    const [active, setActive] = useState("overview");

    const handleLogout = async () => {
        try {
          const token = localStorage.getItem("token");
          await axios.post("http://127.0.0.1:8000/api/logout",{}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
          // Clear all user data from localStorage
          localStorage.removeItem("token");
          localStorage.removeItem("user_id");
          localStorage.removeItem("isLoggedIn");
    
          // Redirect to login page
          window.location.href = "/login";

        } catch (error) {
          console.error("Logout failed:", error);
        
          toast.error("Logout failed. Please try again.");
        }
      };

    return (
        <div className="w-64 h-screen md:block hidden shadow-sm">
            <ToastContainer/>
            <div className="flex justify-center items-center mt-5 mb-5">
                <a href="/">
                    <img className="h-20" src={Logo} alt="" />
                </a>
            </div>
            <ul className="space-y-1">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            setActive(item.id);
                            onSelect(item.id);
                        }}
                        className={`flex justify-between items-center cursor-pointer h-14 ${
                            active === item.id
                                ? "text-teal-600 font-semibold dark:bg-slate-700"
                                : "dark:text-white"
                        }`}
                    >
                        <p className="pl-6 flex items-center gap-3">
                            {item.icon} {item.name}
                        </p>
                        {active === item.id && <div className="bg-teal-300 w-1 rounded-md h-14"></div>}
                    </li>
                ))}
                {/* Logout */}
                <li
                onClick={handleLogout}
                className="pl-6 mt-10 cursor-pointer flex items-center gap-3 text-red-600 hover:underline"
                >
                <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
                    Logout
                </li>
            </ul>
        
        </div>
    );
};

export default Sidebar;