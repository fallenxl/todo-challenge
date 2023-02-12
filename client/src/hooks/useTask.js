import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export function useTask() {
  const { tasks } = useSelector((state) => state.task);

  let selectedTask = tasks
    .map((task) => {
      if (task.done) {
        return task.id;
      }
    })
    .filter((task) => task);


  const handleClearSelectedTask = () => {
    selectedTask = null;
  };
  return {
    selectedTask,
    handleClearSelectedTask,
  };
}
