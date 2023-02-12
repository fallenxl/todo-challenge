import Task from "./Task";
import { useTask } from "../hooks/useTask";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiTasks, deleteApiTasks } from "../store/taskSlice";
import ButtonsDelete from "./ButtonsDelete";
import EmptyTasks from "../components/EmptyTasks";
import LoadingTasks from "../components/Loading/LoadingTasks";
import { sortByDate } from "../config/config";

function TaskList() {
  const dispatch = useDispatch();
const {tasks, isLoading } = useSelector((state) => state.task);
  const { token } = useSelector((state) => state.user);
  const { selectedTask, handleSelectedTask, handleClearSelectedTask } =
    useTask();
  const hasTasks = tasks.length > 0;

  useEffect(() => {
      dispatch(getApiTasks(token));
  }, []);

  const handleDeleteSelected = () => {
    dispatch(deleteApiTasks({ selectedTask, token }));
    handleClearSelectedTask();
  };
  return (
    <section className="px-4  sm:px-2">
  
      {hasTasks ? (
        <>
          <ButtonsDelete
            handleDeleteSelected={handleDeleteSelected}
            selectedTask={selectedTask}
          />
          <ul className="mb-4">
            {sortByDate(tasks).map((task) => (
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
