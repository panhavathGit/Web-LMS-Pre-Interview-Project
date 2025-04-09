import { useState } from "react";

export const AssignmentNav = ({ onSelect }) => {
    const menuItems = [
        { id: "upcomming", name: "Upcomming"},
        { id: "pastdue", name: "Pastdue"},
        { id: "assignmentcompleted", name: "Completed"},
    ];
    const [active, setActive] = useState("upcomming");

    return (
        <div className="w-64 h-screen md:block hidden shadow-sm">
            <div className="flex justify-center items-center mt-5 mb-5">
                {/* <a href="/">
                    <img className="h-20" src={Logo} alt="" />
                </a> */}
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
            </ul>
        </div>
    );
};