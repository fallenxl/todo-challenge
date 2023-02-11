import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
function Header() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="p-4 mb-4 row-start-1">
      <nav className="flex justify-between items-center">
        <h1 className="font-bold text-lg">
          ToDo<span className="font-thin">Today</span>
        </h1>
        <ul className="flex gap-4">
          <li>
            <div className="flex gap-2 items-center justify-center">
              {!user ? (
                <>
                  <span className="font-bold text-sm">Inicia sesion</span>
                </>
              ) : (
                <>
                  <span className="font-bold text-sm">{user.username}</span>
                  <img
                    className="w-6 h-6 rounded-full border-zinc-800 border-2"
                    src={user.avatar}
                    alt="profile"
                  />
                  <button onClick={handleLogout} className="text-xs bg-zinc-800 rounded-md text-white px-4 py-1">
                    Logout
                  </button>
                </>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
