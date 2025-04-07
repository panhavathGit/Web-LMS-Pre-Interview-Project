import React from 'react'
import SchoolTransformation from "../assets/schooltransformation.png"
import Makerspace from "../assets/Makerspace.png"
import Competencies from "../assets/competencies.png"

const Program = () => {
  return (
    <div className='bg-green-50 grid grid-col-3'>
        <div className='flex flex-1/3 items-center'>

            <div className="grid grid-cols-1 p-20 border-r border-r-gray-200">
                <div className="flex flex-row gap-5 items-end ">
                    <img src={Makerspace} alt="" className='w-10 h-10'/>
                    <h1 className='text-2xl font-semibold'>Makerspace</h1>
                </div>
                <p className='mb-10 mt-8'>Students and Educators, join us in the makerspace to turn every ideas into tangible prototype and projects that will spark your innovative and entrepreneurial journey.</p>
                <div>
                    <button className="px-3 py-2 border border-green-500 bg-transparent text-black rounded">Learn more...</button>
                </div>
            </div>

            <div className="grid grid-cols-1 p-20 border-r border-r-gray-200">
                <div className="flex flex-row gap-5 items-center ">
                    <img src={Competencies} alt="" className='w-10 h-10'/>
                    <h1 className='text-2xl font-semibold'>Compentencies Based Curriculum</h1>
                </div>
                <p className='mb-10 mt-8'>Turn our ICT class into an interactive and explorative learning experience that build essential skills for future readiness with our students centric project based curriculum.</p>
                <div>
                    <button className="px-3 py-2 border border-green-500 bg-transparent text-black rounded">Learn more...</button>
                </div>
            </div>

            <div className="grid grid-cols-1 p-20 border-r border-r-gray-200">
                <div className="flex flex-row gap-5 items-center ">
                    <img src={Makerspace} alt="" className='w-10 h-10'/>
                    <h1 className='text-2xl font-semibold'>School Digital Transformation</h1>
                </div>
                <p className='mb-10 mt-8'>Building capacity for educators and school leadership to lead sustainable digital transformation initiative in school with focus on community building and building environment for future leanring.</p>
                <div>
                    <button className="px-3 py-2 border border-green-500 bg-transparent text-black rounded">Learn more...</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Program;
