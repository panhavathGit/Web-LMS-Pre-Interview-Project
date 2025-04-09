import { useState } from "react";
import { AssignmentLayout } from "./AssignmentLayout.jsx";
import Upcoming from "./Upcomming.jsx";
import PastDue from "./PastDue.jsx";
import { AssignmentCompleted } from "./AssignmentCompleted.jsx";

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