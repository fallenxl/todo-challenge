import { createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../config/config";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    userIsLoading: false,
    userIsFailed: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    userIsLoading(state, action) {
      state.userIsFailed = false;
      state.userIsLoading = action.payload;
    },
    userIsFailed(state, action) {
      state.userIsFailed = action.payload;
      state.userIsLoading = false;
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  setToken,
  userIsLoading,
  userIsFailed,
} = userSlice.actions;

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      dispatch(userIsLoading(true));
      const response = await axios.post(apiUrl + "/auth/login", {
        username,
        password,
      });

      if (response.status === 200) {
        dispatch(setUser(response.data));
        dispatch(setToken(response.data.token));
        localStorage.setItem("jwt", response.data.token);
      }
      dispatch(userIsFailed("User not found"));
    } catch (error) {
      dispatch(userIsFailed("User not found"));
    }
  };
export const register =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      dispatch(userIsLoading(true));
      const response = await axios.post(apiUrl + "/auth/register", {
        username,
        password,
      });
      if (response.status === 201) {
        dispatch(setUser(response.data));
        dispatch(setToken(response.data.token));
        localStorage.setItem("jwt", response.data.token);
      }
      dispatch(userIsFailed("User already exists"));
    } catch (error) {
      dispatch(userIsFailed("User already exists"));
    }
  };

export const getUser = (token) => async (dispatch) => {
  try {
    dispatch(userIsLoading(true));
    const response = await axios.get(apiUrl + "/auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      dispatch(setUser(response.data.user));
      dispatch(setToken(token));
    }
    dispatch(userIsFailed("User not found"));
  } catch (error) {
    dispatch(userIsFailed("error while getting user"));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(setUser(null));
  dispatch(setToken(null));
  dispatch(userIsFailed(false));
  localStorage.removeItem("jwt");
};
