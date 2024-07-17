import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "./schema";
import NavBar from "./Navbar";
import app from "../firebaseconfig";
import { getDatabase, ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const onSubmit = async () => {
        const db = getDatabase(app);
        const newDocRf = ref(db, `patanyumba/users/${values.username}`);
        const docSnap = await get(newDocRf)
        if (docSnap.exists()) {
            //check password
            let userArray = Object.values(docSnap.val())
            if (userArray[0].password == values.password) {
                alert("Login Successful")
                setSubmitting(false)
                navigate("/app")
            }
        } else {
            alert("User does not exist")
        }

    }

    const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched } = useFormik({
        initialValues: {
            username: "",
            password: "",

        },
        validationSchema: loginSchema,
        onSubmit
    })
    return (
        <>
            <NavBar />
            <div className="container">
                <br />
                <br />
                <br />
                <div className="form-area col-md-7">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="username">User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                placeholder="Username"
                                style={errors.username && touched.username ? { borderColor: "#FC8181" } : {}}
                            />
                            {errors.username && touched.username ? <p className="error-message">{errors.username}</p> : ""}
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                style={errors.password && touched.password ? { borderColor: "#FC8181" } : {}}
                                placeholder="Password" />
                            {errors.password && touched.password ? <p className="error-message">{errors.password}</p> : ""}
                        </div>
                        <br />
                        <button disabled={isSubmitting} className="btn btn-info" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;