import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { APILoadingStatus } from "../store/constants";
import { triggerSignin } from "../store/signin/signin-actions";
import { useNavigate } from "react-router";

function Signin() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const signinState = useSelector((state) => state.signin);
  useEffect(() => {
    if (signinState.loadingState === APILoadingStatus.SUCCESS) {
      alert("Sign in success");
      navigate("/");
    } else if (signinState.loadingState === APILoadingStatus.FAILED) {
      alert("Sign in failed please enter valid details");
    }
  },[signinState]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      dispatch(triggerSignin(value));
      console.log(value);
    },
  });

  return (
    <div className="bg">
      <div className="Signup-App">
        <h1>Sign in</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="email"
            type={"text"}
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
            className="input-box"
          ></input>
          <input
            name="password"
            type={"password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            className="input-box"
          ></input>

          <button type="submit" className="signup-btn">
            Sign in
          </button>

          <p>
            Dont have an account?{" "}
            <Link className="link" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Signin;
