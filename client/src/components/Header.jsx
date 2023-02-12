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
                  <span className="font-bold text-xs">
                    Organiza mejor tu dia, crea tareas diarias 😎
                  </span>
                </>
              ) : (
                <>
                  <span className="font-bold text-sm">{user.username}</span>
                  <img
                    className="w-6 h-6 rounded-full border-zinc-800 border-2"
                    src={user.avatar}
                    alt="profile"
                  />
                  <button
                    onClick={handleLogout}
                    className="border text-xs rotate-180 px-4 py-1 rounded-md hover:bg-gray-100 "
                    title="Logout"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
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
