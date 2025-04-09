import { useState } from "react";
import AdminLayout from "../layout/AdminLayout.jsx";
import Courses from "./Courses.jsx";
import Overview from "./Overview.jsx";
import { AssignmentPageStorage } from "./AssignmentPage/AssignmentPageStorage.jsx";

const Dashboard = () => {
    const [selectedPage, setSelectedPage] = useState("overview");
    const renderPage = () => {
        switch (selectedPage) {
            case "overview":
                return <Overview />;
            case "courses":
                return <Courses />;
            case "assignments":
                return <AssignmentPageStorage/>;
        }
    };

    return <AdminLayout onSelectPage={setSelectedPage}>{renderPage()}</AdminLayout>;
}

export default Dashboard;
