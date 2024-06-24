import React from "react";
import Card from "./card";

const CardContainer =()=>{

    return(
        <>
            <div  className="container houseContainer">
                <h1 style={{justifyContent:"center"}}>Get Your Dream House</h1>
                <div className="row align-items-center justify-content-around">
                    <div className="col-md-4">
                        <Card/>
                    </div>
                    <div className="col-md-4">
                    <Card/>
                    </div>
                    <div className="col-md-4">
                    <Card/>
                    </div>
                    <div className="col-md-4">
                    <Card/>
                    </div>
                    <div className="col-md-4">
                        <Card/>
                    </div>
                    <div className="col-md-4">
                    <Card/>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default CardContainer;