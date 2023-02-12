import { useContent } from "../hooks/useContent";
import { useDispatch, useSelector } from "react-redux";
import { postApiTask, getApiTasks } from "../store/taskSlice";

function Form() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const { content, handleContentChange, handleContentClear } = useContent();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;
    dispatch(postApiTask({ content }, token));
    handleContentClear();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 items-center justify-center mb-4 border-b pb-4 p-2"
    >
      <input
        className="bg-zinc-200 rounded-md px-2 py-1 text-md outline-none w-4/5 sm:text-sm"
        type="text"
        id="name"
        name="name"
        onChange={handleContentChange}
        value={content}
        placeholder='"Buy milk, eggs, and bread"'
      />
      <button className="flex items-center gap-2 border hover:bg-green-500 hover:text-white px-6 py-2 sm:py-1 rounded-md text-xs">
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
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </form>
  );
}
export default Form;
