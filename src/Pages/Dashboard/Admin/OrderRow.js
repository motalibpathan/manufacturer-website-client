import {
  faLock,
  faTruckFast,
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
    userName,
    email,
    orderQuantity,
    unitPrice,
    productName,
  } = order;
  console.log(order);
  const handleOrderShipped = (id) => {
    console.log(id);
    fetch(`https://spadex-tools.herokuapp.com/updateOrder/${id}`, {
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
      <td className="p-5 border">{userName}</td>
      <td className="p-5 border">{email} </td>
      <td className="p-5 border">
        {status === "approved" && (
          <span className="bg-green-100 py-1 px-2 rounded-full">
            <span class="w-2 h-2 bg-green-600 rounded-full inline-block mr-2"></span>
            <span className="text-green-600 uppercase">{status}</span>
          </span>
        )}
        {status === "pending" && (
          <>
            <span className="bg-yellow-100 py-1 px-2 rounded-full">
              <span class="w-2 h-2 bg-yellow-600 rounded-full inline-block mr-2"></span>
              <span className="text-yellow-600 uppercase">{status}</span>
            </span>
          </>
        )}
        {!status && (
          <>
            <span className="bg-red-100 py-1 px-2 rounded-full">
              <span class="w-2 h-2 bg-red-600 rounded-full inline-block mr-2"></span>
              <span className="text-red-600 uppercase">Unpaid</span>
            </span>
          </>
        )}
      </td>
      <td className="p-2 border">${orderQuantity * unitPrice} </td>
      <td className="p-2 border text-center">
        {status === "approved" && (
          <>
            <span>
              <FontAwesomeIcon icon={faLock} />
            </span>
          </>
        )}
        {status === "pending" && (
          <>
            <button
              onClick={() => handleOrderShipped(_id)}
              className="btn btn-outline btn-sm btn-success"
            >
              <FontAwesomeIcon icon={faTruckFast} />
            </button>
          </>
        )}
        {!status && (
          <div>
            <label
              htmlFor="order-delete-modal"
              className="cursor-pointer btn btn-sm btn-error btn-outline "
              onClick={() => setDeletingOrder(order)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </label>
          </div>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
