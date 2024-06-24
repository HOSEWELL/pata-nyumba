import React from "react";
import Modol from "./Modol";

const NavBar = ()=>{
    return(
        <>
    <nav class="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand">Pata Nyumba</a>
        <Modol/>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" style={{backgroundColor:'green', color:'white'}}>Search</button>
         </form>
        </div>
    </nav>
        </>
    )
}
export default NavBar;