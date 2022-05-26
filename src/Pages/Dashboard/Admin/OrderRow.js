import {
  faCircleCheck,
  faTruckFast,
  faWallet,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const OrderRow = ({ index, order, setDeletingOrder, refetch }) => {
  const {
    _id,
    status,
    productImg,
    email,
    orderQuantity,
    unitPrice,
    productName,
  } = order;

  const handleOrderShipped = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/updateOrder/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Status updated");
        }
      });
  };

  return (
    <tr className="text-left">
      <th className="p-5 border">{index + 1}</th>
      <td className="p-5 border">
        <img width={60} src={productImg} alt="" />
      </td>
      <td className="p-5 border">{productName} </td>
      <td className="p-5 border">{email} </td>
      <td className="p-5 border">{orderQuantity} </td>
      <td className="p-5 border">${orderQuantity * unitPrice} </td>
      <td className="p-5 border">
        {status === "pending" && (
          <>
            <button
              onClick={() => handleOrderShipped(_id)}
              className="btn btn-outline btn-sm btn-success"
            >
              <FontAwesomeIcon className="mr-2" icon={faTruckFast} /> Shipped
              Order
            </button>
          </>
        )}
        {status === "approved" && (
          <>
            <span className="badge badge-success badge-lg">
              <FontAwesomeIcon className="mr-2" icon={faCircleCheck} /> Approved
            </span>
          </>
        )}
        {!status && (
          <div>
            <span className="cursor-default badge badge-lg badge-warning  mb-2">
              <FontAwesomeIcon className="mr-2" icon={faWallet} /> Unpaid
            </span>
            <br />
            <label
              htmlFor="order-delete-modal"
              className="cursor-pointer btn btn-sm btn-error btn-outline "
              onClick={() => setDeletingOrder(order)}
            >
              <FontAwesomeIcon className="mr-2" icon={faXmark} /> Cancel
            </label>
          </div>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
