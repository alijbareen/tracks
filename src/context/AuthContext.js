import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducrer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to signup with email and password
    // if success , modify the state of authentication
    //if fail , show an error message
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
  { isSignedIn: false }
);
