import React from "react";
import { useQuery } from "react-query";

const AllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/order`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  return (
    <div>
      <h1>All orders {orders?.length}</h1>
    </div>
  );
};

export default AllOrders;
