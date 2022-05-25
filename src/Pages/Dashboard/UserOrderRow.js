import { faCreditCard, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
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
      <td className="p-5 border">{productName} </td>
      <td className="p-5 border">{email} </td>
      <td className="p-5 border">{orderQuantity} </td>
      <td className="p-5 border">${orderQuantity * unitPrice} </td>
      <td className="p-5 border">
        {status === "pending" || status === "shipped" ? (
          <>
            <span className="border bg-green-50 py-2 px-5 rounded-lg">
              <FontAwesomeIcon className="mr-2" icon={faMoneyBill} /> Paid
            </span>
            <p className="mt-2">
              Transaction id: <span className="font-bold">{transactionId}</span>
            </p>
          </>
        ) : (
          <div>
            <span className="btn btn-error btn-outline mr-2">
              <label
                htmlFor="order-delete-modal"
                className="cursor-pointer"
                onClick={() => setDeletingOrder(order)}
              >
                <FontAwesomeIcon className="mr-2" icon={faCreditCard} /> Cancel
              </label>
            </span>
            <button
              onClick={() => navigate(`/dashboard/payment/${_id}`)}
              className="btn btn-outline btn-success"
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