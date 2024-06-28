import React from "react";
import Card from "./card";

const CardContainer =()=>{

    return(
        <>
            <div  className="container houseContainer">
                <h1 style={{justifyContent:"center"}}>Get Your Dream House</h1>
                <div className="row align-items-center justify-content-around">
                    <div className="col-md-4">
                        <Card houseName="Mansion" housePrice="480,000" houseLocation="utawala"/>
                    </div>
                    <div className="col-md-4">
                    <Card houseName="Hostel" housePrice="300,000" houseLocation="Rongai" />
                    </div>
                    <div className="col-md-4">
                    <Card houseName="BNB" housePrice="250,000" houseLocation="Bururburu"/>
                    </div>
                    <div className="col-md-4">
                    <Card houseName="Hotel" housePrice="350,000" houseLocation="Githurai"/>
                    </div>
                    <div className="col-md-4">
                        <Card houseName="SQ" housePrice="500,000" houseLocation="Thika"/>
                    </div>
                    <div className="col-md-4">
                    <Card houseName="Cottage" housePrice="550,000" houseLocation="Donholm"/>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default CardContainer;