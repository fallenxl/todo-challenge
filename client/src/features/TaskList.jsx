import Task from "./Task";
import { useTask } from "../hooks/useTask";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiTasks, deleteApiTasks } from "../store/taskSlice";
import ButtonsDelete from "./ButtonsDelete";
import EmptyTasks from "../components/EmptyTasks";
import LoadingTasks from "../components/Loading/LoadingTasks";

function TaskList() {
  const dispatch = useDispatch();
  const { tasks, isLoading } = useSelector((state) => state.task);
  const { selectedTask, handleSelectedTask, handleClearSelectedTask } =
    useTask();
  const hasTasks = tasks.length > 0;

  useEffect(() => {
      dispatch(getApiTasks());
  }, []);

  const handleDeleteSelected = () => {
    dispatch(deleteApiTasks({ selectedTask }));
    handleClearSelectedTask();
  };
  return (
    <section className="px-2">
  
      {hasTasks ? (
        <>
          <ButtonsDelete
            handleDeleteSelected={handleDeleteSelected}
            selectedTask={selectedTask}
          />
          <ul className="mb-4">
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                handleSelected={handleSelectedTask}
              />
            ))}
          </ul>
        </>
      ) : (
        isLoading ? <LoadingTasks /> : <EmptyTasks />
      
      )}
    </section>
  );
}
export default TaskList;
