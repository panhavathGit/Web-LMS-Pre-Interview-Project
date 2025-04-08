import React from "react";
import FounderMessage from "../components/Home/FounderMessage.jsx";
import { ContactUs } from "../components/Home/ContactUs.jsx";
import OurMission from "../components/Home/OurMission.jsx";
import Program from "../components/Home/Program.jsx";
import OurProgram from "../components/Home/OurProgram.jsx";
import Intro from "../components/Home/Intro.jsx";
import Navbar from "../layout/TopBar.jsx";
import Footer from "../layout/footer.jsx";

const Homepage = () => {
    return (
        <>
        <Navbar />
            <div className="w-full">
                <Intro />
                <div id="mission"><OurMission /></div>
                <div id="programs"><OurProgram /></div>
                <div><Program/></div>
                <div id="founder"><FounderMessage /></div>
                <div id="contact"><ContactUs /></div>
            </div>
        <Footer/>
        </>
    );
  };
  

export default Homepage;