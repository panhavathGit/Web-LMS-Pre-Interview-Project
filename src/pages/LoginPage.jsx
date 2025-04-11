import React from 'react';
import Navbar from "../layout/TopBar.jsx";
import Footer from "../layout/footer.jsx";
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
      // setError("");

      try {
          const response = await axios.post("http://127.0.0.1:8000/api/login", {
              email,
              password,
          });

          const userData = response.data.data;
          console.log(userData);

          if (response.data.token) {
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("user_id", response.data.data.id)
              localStorage.setItem("isLoggedIn", "true");

              // Reload the page to reflect login state
              window.location.href = "/dashboard";
          } else {
              // setError("Invalid response from server.");
              toast.error("Invalid response from server.");
          }
      } catch (err) {
          // setError("Invalid email or password.");
          toast.error("Invalid email of password");
      }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <ToastContainer />
        <div className="text-2xl font-bold text-black mb-5">
          <h1>Login to Snoopedu learning portal</h1>
        </div>

        {/* {error && <p className="text-red-500 text-[15px]">{error}</p>} */}

        <fieldset className="fieldset w-xs border border-base-300 p-4 rounded-box bg-gradient-to-b from-teal-400 to-teal-600 shadow-2xl">
          <label className="fieldset-label text-white text-lg">Email</label>
          <input 
            type="email" 
            className="input" 
            placeholder="name@example.com"  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="fieldset-label text-white text-lg">Password</label>

          <input 
            type="password" 
            className="input" 
            placeholder="your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn btn-neutral border-0 mt-4 bg-teal-900 hover:bg-teal-50 hover:text-black" onClick={handleSubmit}>
            Login
          </button>
        </fieldset>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
