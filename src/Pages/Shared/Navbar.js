import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = React.useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setUser(user);
    });
  }, [user, setUser]);

  if (loading) {
    return <Loading />;
  }
  const menuIcon = (
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
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  );
  const menuItems = (
    <>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faUserCircle} />
              {user?.auth?.currentUser?.displayName}
            </span>
          </li>
          <li>
            <button className="font-bold" onClick={() => signOut(auth)}>
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar border-b-2 border-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            {menuIcon}
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {menuItems}{" "}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case font-bold lg:text-2xl text-md"
        >
          <span className="text-success">Spadex </span> Tools
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex font-bold">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-ghost drawer-button lg:hidden"
        >
          {menuIcon}
        </label>
      </div>
    </div>
  );
};

export default Navbar;
