import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="p-4 mb-4">
      <nav className="flex justify-between items-center">
        <h1 className="font-bold text-lg">
          ToDo<span className="font-thin">Today</span>
        </h1>
        <ul className="flex gap-4">
          <li>
            {/* <NavLink
              className="text-xs border border-zinc-800 px-6 py-1 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700"
              to={"/signin"}
            >
              Sign In
            </NavLink> */}
            <div className="flex gap-2 items-center justify-center">
              <span className="font-bold text-sm">Axl Santos</span>
              <img
              className="w-6 h-6 rounded-full border-zinc-800 border-2"
                src="https://api.dicebear.com/5.x/pixel-art-neutral/svg?seed=Axl"
                alt="profile"
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
