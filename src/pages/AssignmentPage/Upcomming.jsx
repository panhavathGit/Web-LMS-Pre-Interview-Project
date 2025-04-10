import { AssignmentTile } from "../../components/Dashboard/AssignmentTile";
const Upcoming = () => {
    return (
        <>  
            <div className="mb-2">
                <h1 className="text-gray-500">Upcoming Assignments</h1>
            </div>
            <AssignmentTile assignmentTitle={"Question and Answer"} deadline={"tomorrow at 11:59pm"}></AssignmentTile>
            <AssignmentTile assignmentTitle={"Presentation submission"} deadline={"12th April"}></AssignmentTile>
        </>
    );
}

    
export default Upcoming;
