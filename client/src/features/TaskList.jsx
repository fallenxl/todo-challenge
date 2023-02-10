import { getTasks } from "../services/tasks"; 
import { useTask } from "../hooks/useTask";
import Task from "./Task";
function TaskList() {
  const tasks = getTasks();
  const {selectedTask, handleSelectedTask} = useTask();
  return (
    <section className="px-2">
      <div className="flex justify-between mb-4 border-b py-4">
        <h2 className="font-bold">
          Task List <span className="font-thin text-sm">{`All(${tasks.length})`}</span>
        </h2>
        <div className="flex items-center justify-center gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 justify-self-end self-center text-white px-6 py-1 rounded-md text-xs">
            Delete all
          </button>
          {selectedTask.length > 0 && <button className="bg-blue-500 hover:bg-blue-600 justify-self-end self-center text-white px-6 py-1 rounded-md text-xs">
           {`Delete selected (${selectedTask.length})`}
          </button>}
        </div>
      </div>

      <ul className="mb-4">
        {tasks.map((task) => (
          <Task key={task.id} task={task} handleSelected ={handleSelectedTask}/>
        ))}
      </ul>
    </section>
  );
}
export default TaskList;
