import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    userIsLoading: false,
    userIsFailed: false,
    userIsLoggedIn: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    userIsLoading(state, action) {
      state.userIsLoading = true;
      state.userIsFailed = false;
      state.userIsLoggedIn = false;
    },
    userIsFailed(state, action) {
      state.userIsFailed = true;
      state.userIsLoading = false;
      state.userIsLoggedIn = false;
    },
    userIsLoggedIn(state, action) {
      state.userIsLoggedIn = true;
      state.userIsFailed = false;
      state.userIsLoading = false;
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  setToken,
  userIsFailed,
  userIsLoggedIn,
  userIsLoading,
} = userSlice.actions;

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        dispatch(setUser(response.data));
        dispatch(setToken(response.data.token));
        localStorage.setItem("jwt", response.data.token);
      }
    } catch (error) {
      dispatch(userIsFailed());
    }
  };
export const register =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        { username, password }
      );
      if (response.status === 201) {
        dispatch(setUser(response.data));
        dispatch(setToken(response.data.token));
        localStorage.setItem("jwt", response.data.token);
      }
    } catch (error) {
      dispatch(userIsFailed());
    }
  };

export const getUser = (token) => async (dispatch) => {
  try {
    dispatch(userIsLoading());
    const response = await axios.get("http://localhost:3000/api/auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      console.log(response.data);
      dispatch(setUser(response.data.user));
      dispatch(setToken(token));
    }
  } catch (error) {
    dispatch(userIsFailed());
  }
};

export const logout = () => async (dispatch) => {
  dispatch(setUser(null));
  dispatch(setToken(null));
  localStorage.removeItem("jwt");
};
