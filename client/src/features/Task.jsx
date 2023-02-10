function Task(){
    return(
        <li className="grid grid-cols-6 items-center px-1 py-3 border-b">
            <input type="checkbox" className="w-4 h-4" />
            <span className="col-start-2 col-end-6">Task Name</span>
            <button className="bg-zinc-800 hover:bg-zinc-700 justify-self-end self-end text-white px-6 py-1 rounded-md text-xs">Delete</button>
        </li>
    )
}
export default Task