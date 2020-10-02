import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducrer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with Sign Up",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    //try to sign in
    //handle success
    //handle failure
  };
};

const signout = (dispatch) => {
  return ({ email, password }) => {
    //signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducrer,
  { signin, signup, signout },
  { isSignedIn: false, errorMessage: "" }
);
