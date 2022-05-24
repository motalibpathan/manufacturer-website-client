import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AllOrders from "./Pages/Dashboard/AllOrders";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyReviews from "./Pages/Dashboard/MyReviews";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />}></Route>
          <Route path="review" element={<MyReviews />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route
            path="allOrders"
            element={
              <RequireAdmin>
                <AllOrders />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </UserContext.Provider>
  );
}

export default App;
