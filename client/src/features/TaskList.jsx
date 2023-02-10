import Task from "./Task";
import { useTask } from "../hooks/useTask";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiTasks, deleteApiTasks } from "../store/taskSlice";
import ButtonsDelete from "./ButtonsDelete";

function TaskList() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);
  const { selectedTask, handleSelectedTask, handleClearSelectedTask } =
    useTask();

  useEffect(() => {
    dispatch(getApiTasks());
  }, []);

  const handleDeleteSelected = () => {
    dispatch(deleteApiTasks({ selectedTask }));
    handleClearSelectedTask();
  };

  return (
    <section className="px-2">
      {tasks.length > 0 && (
        <ButtonsDelete
          handleDeleteSelected={handleDeleteSelected}
          selectedTask={selectedTask}
        />
      )}
      <ul className="mb-4">
        {tasks.map((task) => (
          <Task key={task.id} task={task} handleSelected={handleSelectedTask} />
        ))}
      </ul>
    </section>
  );
}
export default TaskList;
