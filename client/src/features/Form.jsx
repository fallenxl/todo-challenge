import { useTask } from "../hooks/useTask";

function Form() {
  const {task, handleTaskChange} = useTask()
  return (
    <form className="flex gap-2 items-center justify-center mb-4 border-b pb-4">
      <input
        className="bg-zinc-200 rounded-md px-2 py-1 text-xs outline-none w-2/4"
        type="text"
        id="name"
        name="name"
        onChange={handleTaskChange}
        value={task}
      />
      <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-1 rounded-md text-xs">Add</button>
    </form>
  );
}
export default Form;
