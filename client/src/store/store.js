import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        task: taskReducer,
        user: userReducer,
    },
});