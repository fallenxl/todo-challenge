import Form from "../features/Form";
import TaskList from "../features/TaskList";
import { useTask } from "../hooks/useTask";
import { useContent } from "../hooks/useContent";

function Home() {


  return (
    <main>
      <Form
      />
      <TaskList
      />
    </main>
  );
}

export default Home;
