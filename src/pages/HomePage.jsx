import React from "react";
import FounderMessage from "../components/FounderMessage.jsx";
import { ContactUs } from "../components/ContactUs.jsx";
import OurMission from "../components/OurMission.jsx";
import Program from "../components/Program.jsx";
import OurProgram from "../components/OurProgram.jsx";
import Intro from "../components/Intro.jsx";

const Homepage = () => {
    return(
        <>
        <div className="w-full">
            <Intro/>
            <OurMission/>
            <OurProgram/>
            <Program/>
            <FounderMessage />
            <ContactUs/>
        </div>
        </>
    )

}

export default Homepage;