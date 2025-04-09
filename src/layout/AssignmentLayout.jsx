import React from 'react'
// import Upcoming from '../pages/AssignmentPage/Upcomming';
// import PastDue from '../pages/AssignmentPage/PastDue';
// import { AssignmentCompleted } from '../pages/AssignmentPage/AssignmentCompleted';
// import { FaBox, FaBookOpen, FaClipboardList } from 'react-icons/fa';
// import { useState } from 'react';

import { AssignmentNav } from './AssignmentNav';

export const AssignmentLayout = ({children, onSelectAssignment}) => {
    return(
        <>
            <div className="flex flex-col">
                <div className="flex flex-row gap-8 ">
             
                    <AssignmentNav onSelect = {onSelectAssignment}/>
                    {children}
                </div>

             
         
            </div>
        </>
    );
}

// export const AssignmentLayout = ({ children, onSelectAssignment }) => {
//     return (
//         <div className="flex h-screen">
//             <AssignmentNav onSelect={onSelectAssignment} />
//             <div className="flex-1 overflow-y-auto p-4">
//                 {children}
//             </div>
//         </div>
//     );
// };

