import React, { useEffect } from "react";
import "./Signup.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { triggerSignup } from "../store/signup/signup-actions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { APILoadingStatus } from "../store/constants";
import { useNavigate } from "react-router"
import {signupSchema} from "./validation"

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupState = useSelector((store) => store.signup);
  
  useEffect(() => {
    if (signupState.loadingState === APILoadingStatus.SUCCESS) {
      alert("Sign up successful")
      navigate("/")
    } else if (signupState.loadingState === APILoadingStatus.FAILED) {
       alert("User exists, please sign in"); 
       navigate("/signin")
    }
  }, [signupState])
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:signupSchema,
    onSubmit: (value) => {
      dispatch(triggerSignup(value));
      console.log(value);
    },
  });

  return (
    <div className="bg">
      <div className="Signup-App">
        <h1>Sign up</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="email"
            type={"text"}
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
            className="input-box"
          ></input>
          {formik.errors.email && (<div style={{color:"red"}}>{formik.errors.email}</div>)}
          <input
            name="password"
            type={"password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            className="input-box"
          ></input>
          {formik.errors.password && (<div style={{color:"red"}}>{formik.errors.password}</div>)}
          <button type="submit" className="signup-btn">
            Sign up
          </button>
      
          <p>
            Do you have an account? {"   "}
          
            <Link className="link" to="/signin">
                Sign in 
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
