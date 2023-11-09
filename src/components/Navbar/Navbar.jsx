import { Link } from "react-router-dom";
import { MyContextProvider } from "../context/MyContex";
import { useContext } from "react";

const Navbar = () => {
  const { user, handleSignOut } = useContext(MyContextProvider);

  return (
    <div className="sticky top-0 left-0 z-10 bg-base-100  shadow-md">
      <div className="navbar max-w-[1280px] mx-auto  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to='/bookings'>My Bookings</Link>
              </li>
              <li>
                <Link to="/aboute">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">
            Contact Us:+0165789432
          </a>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user.photoURL} />
              ) : (
                <img src="https://i.ibb.co/9YTytjp/profile.png" />
              )}
            </div>
          </label>
          {user ? (
            <button onClick={handleSignOut}>Log out</button>
          ) : (
            <Link to={"/signin"}><button className="w-[80px] h-7 bg-green-300 ">Login</button></Link>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
