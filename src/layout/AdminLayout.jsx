import Sidebar from "./AuthSidebar.jsx";
import TopBar from "./AuthTopBar.jsx";

const AdminLayout = ({ children, onSelectPage }) => {
    return (
        <div className="flex h-screen">
            {/* we have two side (side bar and top bar so should use flex) */}
            {/* 1st side */}
            <Sidebar onSelect={onSelectPage} />
            {/* 2nd side */}
            {/* we use col because the second side have two elment stack on each other  */}
            <div className="flex-1 flex flex-col overflow-auto dark:text-white dark:bg-slate-700">
                <TopBar />
                <div className="p-3 dark:bg-gray-700 min-h-screen dark:text-white">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;