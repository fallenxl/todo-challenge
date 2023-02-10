
function Task({ task, handleSelected }) {
  return (
    <li
      className="grid grid-cols-8 grid-rows-1 place-content-center items-center
     px-1 py-3 border-b"
    >
      <input type="checkbox" id={task.id} onChange={handleSelected} className="w-4 h-4 " />
      <span className="col-start-2 col-end-7 sm:col-end-8">
        {task.description}
      </span>
      <button className="col-start-8 col-end-9 bg-zinc-800 hover:bg-zinc-700 justify-self-end self-center  text-white px-6 py-1 rounded-md text-xs">
        Delete
      </button>
    </li>
  );
}
export default Task;
