import React from "react";
import Modol from "./Modol";
import LandingPage from "./Landingpage";
import { Link } from "react-router-dom";

const NavBar = ()=>{
    return(
        <>
    <nav class="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand">Pata Nyumba</a>
        <Modol/>
        <form className="d-flex" role="search">

        <Link to="/LandingPage" className="nav-brand">LandingPage</Link>
        <Link to="/App" className="nav-brand">Home</Link>
        
        <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit" style={{color:'white',border:'1px solid'}}>
              Search
            </button>
         </form>
        </div>
    </nav>
        </>
    )
}
export default NavBar;