import React from 'react'
import Instagram from '../assets/instagram.svg';
import Linkedin from '../assets/linkedin.svg';
import Facebook from '../assets/facebook.svg';
export const ContactUs = () => {
  return (
    <>
    <div className='container mx-auto bg-blue-50 p-8 rounded-xl mt-10 mb-20'>

        <h1 className='text-2xl font-bold'>Contact Us</h1>
        <h1 className='mb-8'>Contact us for consultancy and partnership</h1>

        <div className='grid grid-cols-3 gap-3'>
            {/* Email Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-amber-100 transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-4">Email</h2>
                <p className="text-gray-600">poumsocheata@gmail.com</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-amber-100 transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-4">Phone Number</h2>
                <p className="text-gray-600">(+855) 99 272 524</p>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-amber-100 transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-4">Address</h2>
                <p className="text-gray-600">189, Preah Ang Yukanthor Street (19), Phnom Penh, Cambodia.</p>
            </div>
        </div>
        <h1 className='text-xl text-center font-bold mt-8'>Follow us</h1>
        <div className="flex justify-center gap-3 mt-5">
            <img src= {Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />

        </div>
    </div>
    </>
  )
}
