import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducrer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { token: action.payload, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);

    dispatch({ type: "signup", payload: response.data.token });

    //navigate to main flow
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with Sign Up",
    });
  }
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
  { token: null, errorMessage: "" }
);
