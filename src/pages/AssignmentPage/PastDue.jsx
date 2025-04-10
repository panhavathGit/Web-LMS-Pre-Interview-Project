
const PastDue = () => {
    return (
        <>   
            <div className="text-gray-500 mb-2">
                <h1>Past Due Assignments</h1>
            </div>
            <div className="flex flex-col items-center">
               <img src="https://img.freepik.com/premium-vector/astronaut-cosmonaut-floating-with-nothing-found-error-message-empty-state-ui-element-illustration_22052-4902.jpg" alt="" className="w-128"/>
               <h1 className="font-semibold">There is no past due assignments.</h1>
            </div>
        </>
    );
}
export default PastDue;
