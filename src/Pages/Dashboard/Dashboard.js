import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h1 className="text-2xl font-bold my-2">Welcome to your Dashboard</h1>
        <Outlet />
      </div>
      <div class="drawer-side Lg:border-r-2 lg:mr-5 ">
        <label for="dashboard-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="review">Add A Review</Link>
          </li>
          <li>
            <Link to="profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
