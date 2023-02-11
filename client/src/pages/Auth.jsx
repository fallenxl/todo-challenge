import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <main className="w-4/5 mx-auto border rounded-md p-4">
      {isLogin ? <Login /> : <Register />}
      <div className="flex justify-center gap-2 text-xs font-semibold">
        <button className={isLogin? "border-b-2 border-zinc-800": "p-2"} onClick={() => setIsLogin(true)}>Login</button>
        <button className={!isLogin? "border-b-2 border-zinc-800": "p-2"} onClick={() => setIsLogin(false)}>Register</button>
      </div>
    </main>
  );
}
export default Auth;
