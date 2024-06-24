import React, {useState} from "react";
import house from "../assets/house1.jpeg"

const Card=()=>{
  
  let [houseTitle, setTitle] = useState("Bungalow")
  let [houseLocation, setLocation] = useState("Utawala")
  let [housePrice, setPrice] = useState(100000)
  let [likes, setLikes] = useState(0)

 

  function changePrice(){
    setPrice(400000)
    setLocation("Buruburu")
    setTitle("Cottage")
  }
  function addLikes(){
    setLikes(++likes)
}
    return(
        <>
<div className="card" style={{width: "21rem", marginTop:"10px"}}>
  <img src={house} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{houseTitle}</h5>
    <h6 className="card-title">{housePrice} p.m</h6>
    <h6 className="card-title">Location: {houseLocation}</h6>
    
    <button type="button" class="btn btn-outline-success" onClick={changePrice}>Get A Home</button>
    <button type = "button"class="btn btn-danger"onClick={addLikes}><i class="fa-solid fa-thumbs-up"></i></button><span> Likes: {likes}</span>
  </div>
</div>
        </>
    )
}
export default Card;