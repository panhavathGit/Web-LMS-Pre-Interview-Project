import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Navbar from "./layout/TopBar";
import Footer from "./layout/footer.jsx";
const Dashboard = () => (
  <div className="p-8 grid gap-4 grid-cols-1 md:grid-cols-3">
    <div className="bg-white shadow rounded p-4">Profile Overview</div>
    <div className="bg-white shadow rounded p-4">Enrolled Courses</div>
    <div className="bg-white shadow rounded p-4">Progress Tracker</div>
  </div>
);

const Courses = () => {
  const sampleCourses = [
    { title: "React Basics", desc: "Start building modern web apps." },
    { title: "Advanced JavaScript", desc: "Deep dive into JS concepts." },
    { title: "UI/UX Design", desc: "Design user-centric experiences." },
  ];
  return (
    <div className="p-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {sampleCourses.map((course, idx) => (
        <div key={idx} className="bg-white shadow rounded p-4">
          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
          <p className="mb-2">{course.desc}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded">View Course</button>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
      <Footer/>
      </div>
    </Router>
  );
}
