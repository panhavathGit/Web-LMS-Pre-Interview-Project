import { useState } from "react";
import { AssignmentLayout } from "./AssignmentLayout";
import Upcoming from "../pages/AssignmentPage/Upcomming.jsx";
import PastDue from "../pages/AssignmentPage/PastDue.jsx";
import { AssignmentCompleted } from "../pages/AssignmentPage/AssignmentCompleted.jsx";

export const AssignmentPageStorage = () => {
    const [selectedAssignment, setSelectedAssignment] = useState("upcomming");
    const renderPage = () => {
        switch (selectedAssignment) {
            case "upcomming":
                return <Upcoming/>;
            case "pastdue":
                return <PastDue />;
            case "assignmentcompleted":
                return <AssignmentCompleted />;
        }
    };

    return <AssignmentLayout onSelectAssignment={setSelectedAssignment}>{renderPage()}</AssignmentLayout>;

}