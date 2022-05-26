import { faUser, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faClipboardCheck,
  faClipboardList,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content py-5 lg:px-10 px-5 bg-gray-100">
        <p className="mt-2 font-bold">Hello, {user?.displayName}</p>
        <h1 className="text-2xl font-bold mb-2 text-success">
          Welcome to your Dashboard
        </h1>
        <Outlet />
      </div>
      <div className="drawer-side shadow-2xl">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-green-100 text-base-content">
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/myOrders">
                  <FontAwesomeIcon icon={faList} /> My Orders
                </Link>
              </li>
              <li>
                <Link to="review">
                  <FontAwesomeIcon icon={faClipboardCheck} /> Add A Review
                </Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link to="/dashboard/allOrders">
                  <FontAwesomeIcon icon={faList} /> All Orders
                </Link>
              </li>
              <li>
                <Link to="addProduct">
                  <FontAwesomeIcon icon={faPlus} /> Add Product
                </Link>
              </li>
              <li>
                <Link to="makeAdmin">
                  <FontAwesomeIcon icon={faUser} /> Make Admin
                </Link>
              </li>
              <li>
                <Link to="manageProducts">
                  <FontAwesomeIcon icon={faClipboardList} /> Manage Product
                </Link>
              </li>
            </>
          )}
          <li>
            <Link to="/dashboard">
              {" "}
              <FontAwesomeIcon icon={faUserCircle} /> My Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
