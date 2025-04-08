import React from 'react'
import Program1 from "../../assets/program1.png"
import Program2 from "../../assets/program2.png"
import Program3 from "../../assets/program3.png"
const OurProgram = () => {
  return (
    <>
        <div>
            <h1 className='font-semibold text-4xl ml-40 p-10'>Our Programs</h1>
        </div>
        <div className='flex justify-center gap-20 p-8'>
            <img src={Program3} alt="" className='w-80 h-80 rounded-lg'/>
            <img src={Program1} alt="" className='w-80 h-80 rounded-lg'/>
            <img src={Program2} alt="" className='w-80 h-80 rounded-lg'/>
        </div>
    </>
  )
}

export default OurProgram
