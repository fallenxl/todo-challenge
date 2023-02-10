import { useContent } from "../hooks/useContent";
import { postApiTask } from "../services/tasks";

function Form({ content, handleContentChange, handleTaskAdded, handleContentClear}) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postApiTask(content);
    handleTaskAdded();
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
      />
      <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-1 rounded-md text-xs">Add</button>
    </form>
  );
}
export default Form;
