import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

export const fakeLogin = (payload) => {
  return async (dispatch) => {
    const { email, password } = payload;
    const listUser = await axios.get("http://localhost:3001/user");
    const checkLogin = listUser.data.findIndex(
      (item) => item.email === email && item.password === password
    );
    if (checkLogin >= 0) {
      console.log(listUser);
      dispatch({
        type: LOGIN_SUCCESS,
        payload,
      });
    } else {
      alert("login failure!");
    }
  };
};

