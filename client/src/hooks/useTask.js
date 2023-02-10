import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiTasks } from "../store/taskSlice";

export function useTask() {
  const {tasks} = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const [selectedTask, setSelectedTask] = useState([]);
  const [isTaskAdded, setIsTaskAdded] = useState(false);

  useEffect(() => {
    dispatch(getApiTasks());
  },[isTaskAdded]);

  const handleTaskAdded = () => {
    setIsTaskAdded(!isTaskAdded);
  }
  const handleSelectedTask = (e) => {
    const { id } = e.target;
    !selectedTask.includes(id)
      ? setSelectedTask([...selectedTask, id])
      : setSelectedTask(selectedTask.filter((item) => item !== id));
  };

  const handleClearSelectedTask = () => {
    setSelectedTask([]);
  }
  return {
    tasks,
    selectedTask,
    handleSelectedTask,
    getApiTasks,
    handleTaskAdded,
    handleClearSelectedTask,
  };
}
