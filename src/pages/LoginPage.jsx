// import React from 'react'
// import Navbar from "../layout/TopBar.jsx";
// import Footer from "../layout/footer.jsx";

// export const LoginPage = () => {
//   return (
//     <>
//         <Navbar></Navbar>
//         <div className='flex flex-col mt-12'>
//             <div className='flex flex-col items-center'>
//                 <div className='text-2xl font-bold text-black mb-5 mt-5'>
//                     <h1>Login to Snoopedu learning portal</h1>
//                 </div>
//                 <fieldset className="fieldset w-xs border border-base-300 p-4 rounded-box bg-gradient-to-b from-teal-400 to-teal-600 shadow-2xl">
//                     <label className="fieldset-label text-white text-lg">Email</label>
//                     <input type="email" className="input" placeholder="name@example.com" />
                    
//                     <label className="fieldset-label text-white text-lg">Password</label>
//                     <input type="password" className="input" placeholder="your password" />
                    
//                     <button className="btn btn-neutral border-0 mt-4 bg-teal-900 hover:bg-teal-50 hover:text-black">Login</button>
//                 </fieldset>
//             </div>
//         </div>
//         <div>
            
//         </div>
//         <Footer></Footer>
//     </>
//   )
// }

import React from 'react';
import Navbar from "../layout/TopBar.jsx";
import Footer from "../layout/footer.jsx";

export const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-2xl font-bold text-black mb-5">
          <h1>Login to Snoopedu learning portal</h1>
        </div>
        <fieldset className="fieldset w-xs border border-base-300 p-4 rounded-box bg-gradient-to-b from-teal-400 to-teal-600 shadow-2xl">
          <label className="fieldset-label text-white text-lg">Email</label>
          <input type="email" className="input" placeholder="name@example.com" />

          <label className="fieldset-label text-white text-lg">Password</label>
          <input type="password" className="input" placeholder="your password" />

          <button className="btn btn-neutral border-0 mt-4 bg-teal-900 hover:bg-teal-50 hover:text-black">
            Login
          </button>
        </fieldset>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
