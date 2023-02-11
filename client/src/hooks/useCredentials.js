import { useState } from "react";
export function useCredentials(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const comparePasswords = () => {
        return password === passwordConfirm;
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handlePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    }
    return {
        username,
        password,
        passwordConfirm,
        handleUsername,
        handlePassword,
        comparePasswords,
        handlePasswordConfirm
    }
}