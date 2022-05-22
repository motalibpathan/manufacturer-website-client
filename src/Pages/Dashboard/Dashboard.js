import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile ">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content p-5">
        <p className="mt-2 font-bold">Hello, {user?.displayName}</p>
        <h1 className="text-2xl font-bold mb-2 text-cyan-500">
          Welcome to your Dashboard
        </h1>
        <Outlet />
      </div>
      <div class="drawer-side lg:border-r-4 lg:mr-5 ">
        <label for="dashboard-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {!admin && (
            <>
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li>
                <Link to="review">Add A Review</Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link to="/dashboard">All Orders</Link>
              </li>
              <li>
                <Link to="addProduct">Add Product</Link>
              </li>
              <li>
                <Link to="makeAdmin">Make Admin</Link>
              </li>
              <li>
                <Link to="manageProducts">Manage Product</Link>
              </li>
            </>
          )}
          <li>
            <Link to="profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
