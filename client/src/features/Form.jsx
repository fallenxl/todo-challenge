import { useContent } from "../hooks/useContent";
import { useDispatch, useSelector } from "react-redux";
import { postApiTask, getApiTasks } from "../store/taskSlice";

function Form() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const {content, handleContentChange, handleContentClear} = useContent();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;
    dispatch(postApiTask({content}, token));
    handleContentClear();
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center justify-center mb-4 border-b pb-4">
      <input
        className="bg-zinc-200 rounded-md px-2 py-1 text-xs outline-none w-2/4"
        type="text"
        id="name"
        name="name"
        onChange={handleContentChange}
        value={content}
        placeholder='"Buy milk, eggs, and bread"'
      />
      <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-1 rounded-md text-xs">Add</button>
    </form>
  );
}
export default Form;
