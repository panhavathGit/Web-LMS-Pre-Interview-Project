import { useState } from "react";

export const AssignmentNav = ({ onSelect }) => {
    const menuItems = [
        { id: "upcomming", name: "Upcomming"},
        { id: "pastdue", name: "Past due"},
        { id: "assignmentcompleted", name: "Completed"},
    ];
    const [active, setActive] = useState("upcomming");

    return (
        <>
        <div className="border-b-4 border-sky-800 w-fit">
            <ul className="flex space-x-8">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            setActive(item.id);
                            onSelect(item.id);
                        }}
                        className={`flex items-center cursor-pointer h-10 ${
                            active === item.id
                                ? "text-teal-600 font-semibold dark:bg-slate-700"
                                : "dark:text-white"
                        }`}
                    >
                        <p className="flex items-center gap-3">
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
        </>
  
    );
};
