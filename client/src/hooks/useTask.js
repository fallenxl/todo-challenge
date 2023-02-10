import { useState } from "react";
export function useTask(initialValue = "") {
  const [task, setTask] = useState(initialValue);
  const [selectedTask, setSelectedTask] = useState([]);
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleSelectedTask = (e) => {
    const { id } = e.target;
    !selectedTask.includes(id)
      ? setSelectedTask([...selectedTask, id])
      : setSelectedTask(selectedTask.filter((item) => item !== id));
  };
  return {
    task,
    selectedTask,
    handleTaskChange,
    handleSelectedTask,
  };
}
