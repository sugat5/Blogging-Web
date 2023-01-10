import axios from "axios";

export const SIGNIN = "SIGNIN";

export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";

export const SIGNIN_FAILED = "SIGNIN_FAILED";

export const triggerSignin = (data) => {
  return async (dispatch) => {
    dispatch({ type: SIGNIN });

    try {
      const respond =  await axios.post("/signin", data);
      dispatch({ type: SIGNIN_SUCCESS, payload: respond.data });
    } catch (error) {
      dispatch({ type: SIGNIN_FAILED, payload: error });
    }
  };
};
