import React from "react";
import Card from "./card";
import house from "../assets/house1.jpeg";
import house1 from "../assets/house1.jpeg";
import house2 from "../assets/house2.jpeg";
import house3 from "../assets/house3.jpeg";
import house5 from "../assets/house5.jpeg";
import images from "../assets/images.jpeg";
import imageshouse from "../assets/imageshouse.jpeg";
import imagespop from "../assets/imagespop.jpeg";

const CardContainer =()=>{

    return(
        <>
            <div  className="container houseContainer">
                <h1 style={{justifyContent:"center"}}>Get Your Dream House</h1>
                <div className="row align-items-center justify-content-around">
                    <div className="col-md-4">
                        <Card houseName="Mansion" housePrice="480,000" houseLocation="utawala" houseImage={images}/>
                    </div>
                    <div className="col-md-4">
                    <Card houseName="Hostel" housePrice="300,000" houseLocation="Rongai" houseImage={house1}/>
                    </div>
                    <div className="col-md-4">
                    <Card houseName="BNB" housePrice="250,000" houseLocation="Bururburu" houseImage={house2}/>
                    </div>
                    <div className="col-md-4">
                    <Card houseName="Hotel" housePrice="350,000" houseLocation="Githurai" houseImage={house3}/>
                    </div>
                    <div className="col-md-4">
                        <Card houseName="SQ" housePrice="500,000" houseLocation="Thika" houseImage={imagespop}/>
                    </div>
                    <div className="col-md-4">
                    <Card houseName="Cottage" housePrice="550,000" houseLocation="Donholm" houseImage={imageshouse} />
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default CardContainer;