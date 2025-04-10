import { useState } from "react";
import { FaBox,  FaBookOpen,FaClipboardList } from "react-icons/fa";
import Logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onSelect }) => {
    const menuItems = [
        { id: "overview", name: "Overview", icon: <FaBox /> },
        { id: "courses", name: "Courses", icon: <FaBookOpen /> },
        { id: "assignments", name: "Assignments", icon: <FaClipboardList /> },
    ];
    const [active, setActive] = useState("overview");

    return (
        <div className="w-64 h-screen md:block hidden shadow-sm">
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
                <p className="pl-6 flex items-center gap-3 mt-10">
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-teal-600 text-xl" />
                    <a href="/">Logout</a>
                </p>
            </ul>
        
        </div>
    );
};

export default Sidebar;