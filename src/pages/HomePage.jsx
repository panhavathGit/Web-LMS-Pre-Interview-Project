import React from "react";
import FounderMessage from "../components/FounderMessage.jsx";
import { ContactUs } from "../components/ContactUs.jsx";
import OurMission from "../components/OurMission.jsx";
import Program from "../components/Program.jsx";
import OurProgram from "../components/OurProgram.jsx";
import Intro from "../components/Intro.jsx";

const Homepage = () => {
    return (
      <div className="w-full">
        <Intro />
        <div id="mission"><OurMission /></div>
        <div id="programs"><OurProgram /></div>
        <div><Program/></div>
        <div id="founder"><FounderMessage /></div>
        <div id="contact"><ContactUs /></div>
      </div>
    );
  };
  

export default Homepage;