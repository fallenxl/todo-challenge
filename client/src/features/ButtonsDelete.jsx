import { useSelector } from "react-redux";
function ButtonsDelete({handleDeleteSelected, selectedTask}) {
    const {tasks} = useSelector((state) => state.task);
  return (
    <div className="flex justify-between mb-4 border-b py-4">
      <h2 className="font-bold">
        Task List{" "}
        <span className="font-thin text-sm">{`All(${tasks.length})`}</span>
      </h2>
      <div className="flex items-center justify-center gap-2">
        <button className="bg-blue-500 hover:bg-blue-600 justify-self-end self-center text-white px-6 py-1 rounded-md text-xs">
          Delete all
        </button>
        {selectedTask.length > 0 && (
          <button
            onClick={handleDeleteSelected}
            className="bg-blue-500 hover:bg-blue-600 justify-self-end self-center text-white px-6 py-1 rounded-md text-xs"
          >
            {`Delete selected (${selectedTask.length})`}
          </button>
        )}
      </div>
    </div>
  );
}

export default ButtonsDelete;
