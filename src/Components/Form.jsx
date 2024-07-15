import React from "react";
import { useFormik } from "formik";
import { homeFormSchema } from "./schema";
const Form=()=>{
  const onSubmit = () => {
    alert("Congratulations!!!You have completed the application");
   setSubmitting(false)
  }
  const { values, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting,errors,touched } = useFormik({
    initialValues: {
      housesize:"",
      prize:"",
      location:"",
      description:"",
      imageUrl:"",
    },
    validationSchema:homeFormSchema,
    onSubmit
  })
  return(
        <>
  <form onSubmit={handleSubmit}>
    <div class="mb-3">
    <label for="house size" class="form-label">House size</label>
    <input
    type="text"
    class="form-control"
     id="formGroupExampleInput"
     name="housesize"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.housesize}
     placeholder="house size"
     style={errors.housesize?{borderColor:"#FC8181"}: {}}/>
           {errors.housesize && touched.housesize?<p style={{color:"#FC8181"}} className="error-message">{errors.housesize}</p>:""}
    </div>
    <div class="mb-3">
    <label for="formGroupExampleInput2" class="form-label">Budgeted price</label>
    <input
    type="number"
    class="form-control"
    id="formGroupExampleInput2"
    name="prize"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.prize}
    placeholder="budgeted price"
    style={errors.prize?{borderColor:"#FC8181"}: {}}/>
           {errors.prize && touched.prize?<p style={{color:"#FC8181"}}  className="error-message">{errors.prize}</p>:""}
    </div>
    <div class="mb-3">
    <label for="formGroupExampleInput2" class="form-label">Desired location</label>
    <input
    type="text"
    class="form-control"
    id="formGroupExampleInput2"
    name="location"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.location}
    placeholder="desired location"
    style={errors.location?{borderColor:"#FC8181"}: {}}/>
           {errors.location && touched.location?<p style={{color:"#FC8181"}}  className="error-message">{errors.location}</p>:""}
    </div>
    <div class="mb-3">
    <label for="formGroupExampleInput2" class="form-label">Description</label>
    <input
    type="text"
    class="form-control"
    id="formGroupExampleInput2"
    name="description"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.description}
    placeholder="enter description"
    style={errors.description?{borderColor:"#FC8181"}: {}}/>
           {errors.description && touched.description?<p style={{color:"#FC8181"}}  className="error-message">{errors.description}</p>:""}
    </div>
    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Image Url</label>
                        <input
                        type="text"
                        className="form-control"
                        id="imageUrlInput"
                        name="imageUrl"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.imageUrl}
                        style={errors.imageUrl && touched.location ? {borderColor: "rgb(245, 98, 98)"}: {}}
                        />
                        {errors.imageUrl && touched.imageUrl ? <p style={{color:"#FC8181"}}  className="error-message">{errors.imageUrl}</p> : ''}
                    </div>
    <button type="submit" class="btn btn-primary" disabled={isSubmitting}>submit</button>
    </form>
          </>
    )
}
export default Form