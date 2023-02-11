import { useState } from "react";
export function useCredentials(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    return {
        username,
        password,
        handleUsername,
        handlePassword
    }
}