import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { login, getUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useCredentials } from "../hooks/useCredentials";
function Login() {
  const { username, password, handlePassword, handleUsername } =
    useCredentials();
  const navigate = useNavigate();

  const {user, token}= useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getUser(jwt));
      if (user) {
        navigate("/");
      }
    }
  }, [token]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border p-2 rounded-md gap-2"
    >
      <label htmlFor="username">Username:</label>
      <input
        className="border outline-none px-2 py-1 rounded-md text-sm"
        type="text"
        name="username"
        onChange={handleUsername}
        value={username}
      />
      <label htmlFor="password">Password:</label>
      <input
        className="border outline-none px-2 py-1 rounded-md text-sm"
        type="password"
        name="password"
        onChange={handlePassword}
        value={password}
      />
      <button className="bg-zinc-800 rounded-md text-white py-1" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
