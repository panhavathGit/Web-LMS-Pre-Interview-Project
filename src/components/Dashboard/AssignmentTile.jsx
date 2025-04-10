import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const AssignmentTile = ({assignmentTitle,deadline,icon}) => {
  return (
      <div className="grid grid-cols-1 mb-2">
        <div className="rounded-lg border-2 p-3 border-amber-200 w-full flex justify-between">
        <div>
          <h1 className="">{assignmentTitle}</h1>
          <h3 className="italic">{deadline}</h3>
        </div>
        <div>
            {/* <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 text-xl" />  */}
            {icon && (
            <div className="text-green-500 text-xl">
                {icon}
            </div>
            )}
        </div>
          
        </div>
      </div>
  );
};
