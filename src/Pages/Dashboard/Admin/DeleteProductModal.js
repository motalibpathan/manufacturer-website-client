import React from "react";
import { toast } from "react-toastify";

const DeleteProductModal = ({
  selectedProduct,
  setSelectedProduct,
  refetch,
}) => {
  const { _id, name } = selectedProduct;

  const handleDeleteProduct = (id) => {
    fetch(`https://spadex-tools.herokuapp.com/product/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
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
      <input
        type="checkbox"
        id="product-delete-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Delete?</h3>
          <p className="py-4">
            Delete <span className="text-success font-bold">{name}</span> ?
          </p>
          <div className="modal-action">
            <label
              onClick={() => setSelectedProduct(null)}
              htmlFor="product-delete-modal"
              className="btn btn-error"
            >
              Cancel
            </label>
            <label
              onClick={() => handleDeleteProduct(_id)}
              htmlFor="product-delete-modal"
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

export default DeleteProductModal;
