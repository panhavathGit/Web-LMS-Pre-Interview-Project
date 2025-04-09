import React from 'react'

import { AssignmentNav } from './AssignmentNav';

export const AssignmentLayout = ({children, onSelectAssignment}) => {
    return(
        <>
            <div className="ml-3">
                <AssignmentNav onSelect = {onSelectAssignment}/>
                <div className='mt-5'>
                    {children}
                </div>
            </div>
        </>
    );
}

