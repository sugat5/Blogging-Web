import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string()
    .min(5, "Password is too short")
    .max(12)
    .required("Please enter your password"),
});
