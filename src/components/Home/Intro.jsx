import React from 'react'
import Banner1 from '../../assets/Banner-1.jpg';
const Intro = () => {
  return (
    <div className='grid grid-cols-2 items-center p-15'>
        <div className="text-5xl">
            We provide ed-tech solutions, curriculums, and educators training for effective STEAM learning in the classroom.
        </div>
        <div>
            <img src={Banner1} alt="STEAM banner" className="w-full h-auto rounded-lg" />
        </div>

    </div>
  )
}

export default Intro;
