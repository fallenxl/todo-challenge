import Form from "../features/Form";
import TaskList from "../features/TaskList";
import { useTask } from "../hooks/useTask";
import { useContent } from "../hooks/useContent";

function Home() {
  const { tasks, selectedTask, handleSelectedTask, handleTaskAdded } =
    useTask();
  const { content, handleContentChange, handleContentClear } = useContent();

  return (
    <main>
      <Form
        content={content}
        handleContentChange={handleContentChange}
        handleTaskAdded={handleTaskAdded}
        handleContentClear={handleContentClear}
      />
      <TaskList
        selectedTask={selectedTask}
        handleSelectedTask={handleSelectedTask}
      />
    </main>
  );
}

export default Home;
