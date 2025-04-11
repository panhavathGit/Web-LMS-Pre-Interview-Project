import { useState, useEffect } from "react";
import AdminLayout from "../layout/AdminLayout.jsx";
import Courses from "./Courses.jsx";
import Overview from "./Overview.jsx";
import { AssignmentPageStorage } from "./AssignmentPage/AssignmentPageStorage.jsx";
import { LoginPage } from "./LoginPage.jsx";

const Dashboard = () => {
    const [selectedPage, setSelectedPage] = useState("overview");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in
        const loggedInStatus = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(loggedInStatus === "true");
    }, []);

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

    // If not logged in, show the Login page
    if (!isLoggedIn) {
        return <LoginPage />;
    }

    return (
        <>
            <AdminLayout onSelectPage={setSelectedPage}>{renderPage()}</AdminLayout>
        </>
    );
        
}

export default Dashboard;
