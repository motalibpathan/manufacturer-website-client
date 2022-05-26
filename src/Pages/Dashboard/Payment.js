import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0gIZJBzJH4RBEm0jg4oa3Ii1UZ83YXZWxpSJiFduUHYU9o0eaXIgwSQiRF9HFCGMCKhD8gbBBfyWNcmFFMuyO1003xEYPkQ3"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://spadex-tools.herokuapp.com/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <div>
            <h1 className="text-xl font-bold">Shipping info</h1>
            <p>Customer Name: {order.userName}</p>
            <p>Email: {order.email}</p>
            <p>Address: {order.address}</p>
            <p>Phone: {order.phone}</p>
          </div>
          <div className="flex">
            <img width={60} src={order.productImg} alt="" className="p-1" />
            <div className="ml-3">
              <p className="font-semibold">{order.productName}</p>
              <p>Order quantity: {order.orderQuantity}</p>
              <p className="text-success font-bold">
                Total amount: ${order.orderQuantity * order.unitPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
