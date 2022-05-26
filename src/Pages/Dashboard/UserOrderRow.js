import {
  faCircleCheck,
  faCreditCard,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserOrderRow = ({ index, order, setDeletingOrder }) => {
  const navigate = useNavigate();
  const {
    _id,
    status,
    productImg,
    email,
    orderQuantity,
    unitPrice,
    productName,
    transactionId,
  } = order;

  return (
    <tr className="text-left">
      <th className="p-5 border">{index + 1}</th>
      <td className="p-5 border">
        <img width={60} src={productImg} alt="" />
      </td>
      <td className="p-5 border">{productName.slice(0, 30) + "..."} </td>
      <td className="p-5 border">{email} </td>
      <td className="p-5 border">{orderQuantity} </td>
      <td className="p-5 border">${orderQuantity * unitPrice} </td>
      <td className="p-5 border">
        {status === "pending" || status === "approved" ? (
          <>
            <span className="badge badge-success">
              <FontAwesomeIcon className="mr-2" icon={faCircleCheck} /> Paid
            </span>
            <p className="mt-2">
              Transaction id: <span className="font-bold">{transactionId}</span>
            </p>
          </>
        ) : (
          <div className="flex flex-col gap-y-3">
            <label
              htmlFor="order-delete-modal"
              className="cursor-pointer btn btn-sm btn-error btn-outline mr-2 w-28"
              onClick={() => setDeletingOrder(order)}
            >
              <FontAwesomeIcon className="mr-2" icon={faXmark} /> Cancel
            </label>
            <button
              onClick={() => navigate(`/dashboard/payment/${_id}`)}
              className="btn btn-sm btn-outline btn-success w-28"
            >
              <FontAwesomeIcon className="mr-2" icon={faCreditCard} /> Pay
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default UserOrderRow;
