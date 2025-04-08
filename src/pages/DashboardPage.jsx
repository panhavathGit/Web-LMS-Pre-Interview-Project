import { useState } from "react";
import AdminLayout from "../layout/AdminLayout.jsx";
import Assignments from "./Assignments.jsx";
import Courses from "./Courses.jsx";
import Overview from "./Overview.jsx";

const Dashboard = () => {
    const [selectedPage, setSelectedPage] = useState("overview");
    const renderPage = () => {
        switch (selectedPage) {
            case "overview":
                return <Overview />;
            case "courses":
                return <Courses />;
            case "assignments":
                return <Assignments />;
        }
    };

    return <AdminLayout onSelectPage={setSelectedPage}>{renderPage()}</AdminLayout>;
}

export default Dashboard;
