import { useSelector, useDispatch } from "react-redux";
import { deleteAllTasks } from "../store/taskSlice";
import { useTask } from "../hooks/useTask";

function ButtonsDelete({ handleDeleteSelected, selectedTask }) {
  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  const handleDeleteAll = () => {
    dispatch(deleteAllTasks(token));
  };
  return (
    <div className="flex justify-between mb-4 border-b py-4">
      <h2 className="font-bold">
        Task List{" "}
        <span className="font-thin text-sm">{`All(${tasks.length})`}</span>
      </h2>
      <div className="flex items-center justify-center gap-2">
        {selectedTask.length > 0 && (
          <button
            onClick={handleDeleteSelected}
            className="flex border hover:bg-green-500 hover:text-white gap-2 justify-self-end self-center px-6 py-1 rounded-md text-xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>

            {`Delete (${selectedTask.length})`}
          </button>
        )}
        <button
          onClick={handleDeleteAll}
          className="flex border hover:bg-red-500 hover:text-white gap-1 justify-self-end self-center px-6 py-1 rounded-md text-xs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          All
        </button>
      </div>
    </div>
  );
}

export default ButtonsDelete;
