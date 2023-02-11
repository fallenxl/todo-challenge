import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

function Auth(){
    const [isLogin, setIsLogin] = useState(true);

    return (
        <main>
            <button onClick={() => setIsLogin(true)}>Login</button>
            <button onClick={() => setIsLogin(false)}>Register</button>
            {isLogin ? <Login /> : <Register />}
        </main>
    )
}
export default Auth;