import React from "react";
import FounderPic from "../../assets/Founder_Pic.jpg";

const FounderMessage = () => {
  return (
    <>
    {/* <div className="text-center">
      <h1 className="text-4xl mt-5">Message from the founder</h1>
    </div> */}

    <div className="max-w-7xl mx-auto py-16 px-4">

    <h1 className="text-4xl mb-8">Message from the founder</h1>

      <div className="flex items-center justify-between">
        {/* left */}
        <div className="w-1/2 ml-15">
          <img src={FounderPic} alt="founder-pic" className="w-64 h-64 object-cover rounded-full"/>
        </div>

        {/* right */}
        <div className="w-1/2">
          <h1 className="font-bold">Chansocheata Poum</h1>
          <h1 className="mt-3 mb-3">Thank you for visiting Snoopedu,</h1>
          <p>Our purpose is to make Snoopdu a community for those who 
            dedicate their love for Science, Technology, Engineering, Art, 
            and Mathematics with diverse experiences to improve learning 
            experience for young people who want to 
          </p>

        </div>
      </div>
    </div>
    
    </>
  )
}

export default FounderMessage;
