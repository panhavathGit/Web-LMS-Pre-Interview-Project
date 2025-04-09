// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Homepage from "./pages/HomePage";
// import Navbar from "./layout/TopBar";
// import Footer from "./layout/footer.jsx";
// import { LoginPage } from "./pages/LoginPage.jsx";
// import { Dashboard } from "./components/Dashboard/Dashboard.jsx";
// import CustomLayout from "./layout/CustomeLayout.jsx";

// const CustomPage = () => {
//   return (
//     <div>
    
//       <main className="p-8">
//         <h2>Welcome to the new page with a different layout!</h2>
//         <p>This page has its own custom header and footer.</p>
//       </main>
 
//     </div>
//   );  
// };

// export default function App() {
//   return (
//     <Router>
//       {/* <div className="min-h-screen flex flex-col"> */}
//         {/* <Navbar /> */}
//         {/* <main className="flex-grow"> */}
//           <Routes>
//             <Route path="/" element={<Homepage />} />
//             {/* <Route path="/courses" element={<Courses />} /> */}
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/test" element={< Dashboard/>} />
//             <Route path="/dashboard" element={<CustomPage />} />
//           </Routes>
//         {/* </main> */}
//       {/* <Footer/> */}
//       {/* </div> */}
//     </Router>
//   );
// }
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage.jsx";
import Dashboard from "./pages/DashboardPage.jsx";
// import { AssignmentCompleted } from "./pages/AssignmentPage/AssignmentCompleted.jsx";
// import PastDue from "./pages/AssignmentPage/PastDue.jsx";
// import Upcoming from "./pages/AssignmentPage/Upcomming.jsx";
// import { AssignmentPageStorage } from "./layout/AssignmentLayout.jsx";

export default function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={ <Dashboard /> } />
            {/* <Route path="/assignments" element={<AssignmentPageStorage /> }/> */}
        
         
          </Routes>
    </Router>
  );
}
