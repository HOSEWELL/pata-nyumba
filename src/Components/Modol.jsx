import React from "react";
import Form from "./Form";
const Modol=()=>{

    return(
        <>
 <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Get a House</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Build your house with us!!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="form">
           <Form/>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">submit</button>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default Modol;