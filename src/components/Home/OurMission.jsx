import React from "react";

const OurMission = () => {
  return (
    <div className="bg-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2">
            {/* Title and Description */}
            <h2 className="text-3xl font-bold mb-4">Our mission</h2>
            <div className="grid grid-rows-2">
                <p className="text-lg max-w-3xl mx-auto mb-12">
                To bring interactive learning experiences in digital literacy and
                computer science to schools through empowering educators, developing
                robust learning curriculum, and leveraging on education technology.
                </p>
                {/* Stats */}
                <div className="flex flex-col md:flex-row justify-center gap-12 mb-16">
                    <div>
                        <h3 className="text-3xl font-bold text-cyan-700">200</h3>
                        <p className="text-sm mt-1">Educators</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-cyan-700">8000</h3>
                        <p className="text-sm mt-1">Students</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-cyan-700">100</h3>
                        <p className="text-sm mt-1">Classrooms</p>
                    </div>
                </div>
            </div>
        </div>


        {/* CTA Box */}
        {/* use items-center to align item vertically */}
        <div className="bg-orange-50 py-10 px-4 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg font-semibold text-center">
            Want to start coding class at your school or workplace?
          </p>
          <button className="border border-green-700 text-green-700 px-6 py-2 rounded hover:bg-green-700 hover:text-white transition-colors duration-300">
            Partner with Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
