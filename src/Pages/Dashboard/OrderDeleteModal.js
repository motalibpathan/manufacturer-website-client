import React from "react";
import { toast } from "react-toastify";

const OrderDeleteModal = ({ deletingOrder, setDeletingOrder, refetch }) => {
  const { _id, productImg, orderQuantity, unitPrice, productName, productId } =
    deletingOrder;

  const handleDeleteOrder = (id) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ productId, orderQuantity }),
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          toast.error("Failed to delete");
        }
        return res.json();
      })
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Successfully delete!");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="order-delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-3">Confirm Delete?</h3>
          <div className="flex">
            <img width={60} src={productImg} alt="" />
            <div className="ml-3">
              <p>{productName}</p>
              <p>Order quantity: {orderQuantity}</p>
              <p>Total amount: ${orderQuantity * unitPrice}</p>
            </div>
          </div>
          <div className="modal-action">
            <label
              onClick={() => setDeletingOrder(null)}
              htmlFor="order-delete-modal"
              className="btn btn-error"
            >
              Cancel
            </label>
            <label
              onClick={() => handleDeleteOrder(_id)}
              htmlFor="order-delete-modal"
              className="btn btn-success"
            >
              Confirm
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeleteModal;
