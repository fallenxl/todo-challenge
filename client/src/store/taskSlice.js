import { createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../config/config.js";
import axios from "axios";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    isLoading: true,
    isFailed: false,
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    updateTask: (state, action) => {
      const { id, done } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      state.tasks[index].done = done;
    },
    setTasksIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setTasksIsFailed: (state, action) => {
      state.isFailed = action.payload;
    },
  },
});

export default taskSlice.reducer;
export const { setTasks, setTasksIsFailed, setTasksIsLoading, updateTask } =
  taskSlice.actions;

export const getApiTasks = (token) => async (dispatch) => {
  try {
    dispatch(setTasksIsLoading(true));
    const { data } = await axios.get(`${apiUrl}/task`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setTasksIsLoading(false));
    dispatch(setTasks(data));
  } catch (error) {
    dispatch(setTasksIsFailed(true));
  }
};

export const postApiTask =
  ({ content }, token) =>
  async (dispatch) => {
    try {
      dispatch(setTasksIsLoading(true));
      await axios.post(
        `${apiUrl}/task`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(getApiTasks(token));
    } catch (error) {
      dispatch(setTasksIsFailed(true));
    }
  };

export const putApiTask = (task, token) => async (dispatch) => {
  try {
    const { id, done } = task;
    const response = await axios.put(
      `${apiUrl}/task/update/${id}`,
      {
        task,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      dispatch(updateTask({ id, done }));
    }
  } catch (error) {}
};

export const deleteApiTask = (id, token) => async (dispatch) => {
  try {
    dispatch(setTasksIsLoading(true));
    await axios.delete(`${apiUrl}/task/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getApiTasks(token));
  } catch (error) {
    dispatch(setTasksIsFailed(true));
  }
};

export const deleteApiTasks =
  ({ selectedTask, token }) =>
  async (dispatch) => {
    try {
      await axios.delete(`${apiUrl}/task/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          tasksId: selectedTask,
        },
      });
      dispatch(getApiTasks(token));
      dispatch(setTasksIsLoading(false));
    } catch (error) {
      dispatch(setTasksIsFailed(true));
    }
  };
export const deleteAllTasks = (token) => async (dispatch) => {
  try {
    dispatch(setTasksIsLoading(true));
    await axios.delete(`${apiUrl}/task/delete/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getApiTasks(token));
    dispatch(setTasksIsLoading(false));
  } catch (error) {
    dispatch(setTasksIsFailed(true));
  }
};
