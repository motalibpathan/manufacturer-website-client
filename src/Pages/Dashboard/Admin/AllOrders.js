import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import OrderDeleteModal from "../OrderDeleteModal";
import OrderRow from "./OrderRow";

const AllOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("allOrders", () =>
    fetch(`https://spadex-tools.herokuapp.com/order`, {
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
      <h1 className="text-2xl font-bold mb-5">All Orders</h1>
      <div>
        <div className="overflow-x-auto bg-white">
          <table className="table w-full ">
            <thead className="text-left">
              <tr>
                <th className="capitalize text-md">#</th>
                <th className="capitalize text-md">Customer Name</th>
                <th className="capitalize text-md">Email</th>
                <th className="capitalize text-md">Status</th>
                <th className="capitalize text-md">Total Amount</th>
                <th className="capitalize text-md">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <OrderRow
                  key={order._id}
                  order={order}
                  index={index}
                  setDeletingOrder={setDeletingOrder}
                  refetch={refetch}
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

export default AllOrders;
