import { useState } from "react";
export function useTask(initialValue = "") {
    const [task, setTask] = useState(initialValue);
    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }
    return {
        task,
        handleTaskChange
    }

}