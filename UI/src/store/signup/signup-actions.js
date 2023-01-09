import axios from "axios";

 export const SIGNUP = "SIGNUP";
 export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
 export const SIGNUP_FAILED = "SIGNUP_FAILED";

export const triggerSignup = (data) => {
  return async (dispatch) => {
    dispatch({ type: SIGNUP });
    try {
      const response = await axios.post("/signup", data);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data});
    } catch (error) {
      console.log(error);
      dispatch({ type: SIGNUP_FAILED, payload: error });
    }
  };
};
