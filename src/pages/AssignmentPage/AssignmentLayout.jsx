import React from 'react'

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

