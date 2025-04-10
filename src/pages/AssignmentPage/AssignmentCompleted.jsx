import React from 'react'
import { AssignmentTile } from '../../components/Dashboard/AssignmentTile'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AssignmentCompleted = () => {
  return (
    <>
      <div className="text-gray-500 mb-2">
        <h1>Assignment Completed</h1>
      </div>
      <AssignmentTile assignmentTitle={"Scratch project"} deadline={"submitted at 02 April"} icon={<FontAwesomeIcon icon={faCircleCheck} className="text-green-500 text-xl" />}></AssignmentTile>
      <AssignmentTile assignmentTitle={"Quiz"} deadline={"submitted at 31th Match"} icon={<FontAwesomeIcon icon={faCircleCheck} className="text-green-500 text-xl" />}></AssignmentTile>
      <AssignmentTile assignmentTitle={"Mircobit Lesson1"} deadline={"submitted at 28th Match"} icon={<FontAwesomeIcon icon={faCircleCheck} className="text-green-500 text-xl" />}></AssignmentTile>
    </>
  )
}
