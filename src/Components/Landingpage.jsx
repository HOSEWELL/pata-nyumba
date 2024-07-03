import React from "react";
import NavBar from "./Navbar";

const LandingPage=()=>{
    return(
        <>
        <NavBar/>
        <div className="landingcontent">
            <h1 className="home">Real estate success turning properties into design</h1>
            <br />
            <p className="homecontent">outsourcing can provide corporate business with several advantages, including <br />cost savings, access to specialized expertise, increased efficiency</p>
            <br />
            <button className="homebutton">Get Started-</button>
        </div>
        

        </>
    )
}
export default LandingPage;