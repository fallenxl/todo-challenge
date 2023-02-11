import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../store/userSlice";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
    dispatch(register({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col border p-2 rounded-md gap-2">
      <label htmlFor="username">Username:</label>
      <input
        className="border outline-none px-2 py-1 rounded-md text-sm"
        type="text"
        name="username"
        onChange={handleChange}
        value={username}
      />
      <label htmlFor="password">Password:</label>
      <input
        className="border outline-none px-2 py-1 rounded-md text-sm"
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <button className="bg-zinc-800 rounded-md text-white py-1" type="submit">
        Register
      </button>
    </form>
  );
}

export default Login;
