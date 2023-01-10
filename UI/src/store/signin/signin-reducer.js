import { APILoadingStatus } from "../constants";
import { SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILED } from "./signin-actions";

const initialSigninState = {
  loadingState: APILoadingStatus.NOT_STARTED,
};

export const SigninReducer = (
  state = initialSigninState,
  { type, payload }
) => {
  switch (type) {
    case SIGNIN:
      return { ...state, loadingState: APILoadingStatus.STARTED };
    case SIGNIN_SUCCESS:
      return { ...state, loadingState: APILoadingStatus.SUCCESS, ...payload };
    case SIGNIN_FAILED:
      return {
        ...state,
        loadingState: APILoadingStatus.FAILED,
        error: payload,
      };
    default:
      return state;
  }
};
