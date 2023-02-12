import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login, getUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useCredentials } from "../hooks/useCredentials";

function Login() {
  const { username, password, handlePassword, handleUsername } =
    useCredentials();
  const navigate = useNavigate();

  const { user, token, userIsFailed } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getUser(jwt));
      if (user) {
        navigate("/");
      }
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return alert("Please fill out all fields");
    }
    dispatch(login({ username, password }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-2 rounded-md gap-2"
    >
      <h1 className="border-b-2 p-2 border-zinc-200 mb-2 font-bold">Login</h1>
      {userIsFailed && (
        <span className="text-white text-xs bg-red-500 rounded-sm p-1 mt-1 mb-2 text-center">{userIsFailed}</span>
      )}
      <label className="text-xs font-semibold" htmlFor="username">
        Username:
      </label>
      <input
        className="border outline-none px-2 py-1 rounded-md text-sm"
        type="text"
        name="username"
        onChange={handleUsername}
        value={username}
        required
      />
      <label className="text-xs font-semibold" htmlFor="password">
        Password:
      </label>
      <input
        className="border outline-none px-2 py-1 rounded-md text-sm mb-4"
        type="password"
        name="password"
        onChange={handlePassword}
        value={password}
        required
      />
      <button className="bg-zinc-800 rounded-md text-white py-1" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
