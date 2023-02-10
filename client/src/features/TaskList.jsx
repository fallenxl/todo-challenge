import Task from "./Task"

function TaskList(){
return (
    <section className="p-2">
        <h2 className="">Task List</h2>
        <ul>
            <Task/>
            <Task/>
            <Task/>
        </ul>
    </section>
)
}
export default TaskList