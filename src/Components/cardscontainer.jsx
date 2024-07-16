import React, {useEffect, useState} from "react";
import Card from "./card";
import house from "../assets/house1.jpeg";
import house1 from "../assets/house1.jpeg";
import house2 from "../assets/house2.jpeg";
import house3 from "../assets/house3.jpeg";
import house5 from "../assets/house5.jpeg";
import images from "../assets/images.jpeg";
import imageshouse from "../assets/imageshouse.jpeg";
import imagespop from "../assets/imagespop.jpeg";
import { getDatabase, ref, get } from "firebase/database";
import app from "../firebaseconfig";


const CardContainer =()=>{

    const [house, setHouse] = useState([]);

    useEffect(()=>{
        async function getData(){
            const db = getDatabase(app);
            const docRef = ref(db, "patanyumba/houses");
            const docSnap = await get(docRef);
            if (docSnap.exists()) {
                let data = Object.values(docSnap.val())
                setHouse(data);
                console.log(data);
            } 
        }

        getData()

    },[])
  
    return(
        <>
            <div  className="container houseContainer">
                <h1 style={{justifyContent:"center"}}>Get Your Dream House</h1>
                <div className="row align-items-center justify-content-around">
                 {
                    house.map((house)=>{
                        return(
                            <Card houseImage={house.image} houseName={house.size} houseLocation={house.location} housePrice={house.prize} />
                        )
                    })
                 }
                </div>
                
            </div>
        </>
    )
}
export default CardContainer;