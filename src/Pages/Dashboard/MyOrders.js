import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../../App";
import Loading from "../Shared/Loading";
import OrderDeleteModal from "./OrderDeleteModal";
import UserOrderRow from "./UserOrderRow";

const MyOrders = () => {
  const [user] = useContext(UserContext);
  const [deletingOrder, setDeletingOrder] = useState(null);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["orders", user.email], () =>
    fetch(`http://localhost:5000/order?email=${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Orders</h1>
      <div>
        <div class="overflow-x-auto bg-white">
          <table class="table w-full ">
            <thead className="text-left">
              <tr>
                <th className="capitalize text-md">#</th>
                <th className="capitalize text-md">Image</th>
                <th className="capitalize text-md">Product Name</th>
                <th className="capitalize text-md">Email</th>
                <th className="capitalize text-md">Quantity</th>
                <th className="capitalize text-md">Total Amount</th>
                <th className="capitalize text-md">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <UserOrderRow
                  key={order._id}
                  order={order}
                  index={index}
                  setDeletingOrder={setDeletingOrder}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingOrder && (
        <OrderDeleteModal
          deletingOrder={deletingOrder}
          setDeletingOrder={setDeletingOrder}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default MyOrders;
