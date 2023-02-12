import { useDispatch, useSelector } from "react-redux";
import { register, getUser } from "../store/userSlice";
import { useCredentials } from "../hooks/useCredentials";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const {
    username,
    password,
    passwordConfirm,
    handlePassword,
    handleUsername,
    handlePasswordConfirm,
    comparePasswords,
  } = useCredentials();

  const { user, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEqualsPassword, setIsEqualsPassword] = useState(true);
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
    if (!comparePasswords()) {
      setIsEqualsPassword(false);
    }
    dispatch(register({ username, password }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-2 rounded-md gap-2"
    >
      <h1 className="border-b-2 p-2 border-zinc-200 mb-2 font-bold">
        Register
      </h1>
      {!isEqualsPassword && (
        <span className="text-white text-xs bg-red-500 rounded-sm p-1 mt-1 mb-2 text-center">
          {"Password doesn't match"}
        </span>
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
        minLength="6"
        required
      />
      <label className="text-xs font-semibold" htmlFor="password">
        Password:
      </label>
      <input
        className="border outline-none px-2 py-1 rounded-md text-sm"
        type="password"
        name="password"
        onChange={handlePassword}
        value={password}
        minLength="6"
        required
      />
      <label className="text-xs font-semibold" htmlFor="password">
        Repeat password:
      </label>
      <input
        className="border outline-none px-2 py-1 rounded-md text-sm mb-4"
        type="password"
        name="password"
        onChange={handlePasswordConfirm}
        value={passwordConfirm}
        minLength="6"
        required
      />
      <button
        className="bg-zinc-800 rounded-md text-white py-1 text-sm"
        type="submit"
      >
        Register
      </button>
    </form>
  );
}

export default Login;
