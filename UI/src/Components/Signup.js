import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { triggerSignup } from "../store/signup/signup-actions";
import { Link } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      dispatch(triggerSignup(value));
      console.log(value);
    },
  });

  return (
    <div className="Signup-App">
      <h1>Sign up now</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="email"
          type={"text"}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email" className="input-box"
        ></input>
         <input
          name="password"
          type={"password"}
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password" className="input-box"
        ></input>

        <button type="submit" className="signup-btn">Sign up</button>
        <hr />

        <p>
          Do you have an account? <Link className="link">Sign in</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
