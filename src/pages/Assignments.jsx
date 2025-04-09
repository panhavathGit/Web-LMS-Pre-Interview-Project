import { Link } from "react-router-dom";
const Assignments = () => {
    return (
        <>
            <div className="flex flex-row gap-8 ">
                <Link to="/upcoming">Upcoming</Link>
                <Link to="/past-due">Past Due</Link>
                <Link to="/completed">Completedddd</Link>
            </div>
         
        </>      
    );
};

export default Assignments;