import React from "react";
import { toast } from "react-toastify";

const DeleteProductModal = ({
  selectedProduct,
  setSelectedProduct,
  refetch,
}) => {
  const { _id, name } = selectedProduct;

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
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
      <input type="checkbox" id="product-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Confirm Delete?</h3>
          <p class="py-4">
            Delete <span className="text-success font-bold">{name}</span> ?
          </p>
          <div class="modal-action">
            <label
              onClick={() => setSelectedProduct(null)}
              htmlFor="product-delete-modal"
              class="btn btn-error"
            >
              Cancel
            </label>
            <label
              onClick={() => handleDeleteProduct(_id)}
              htmlFor="product-delete-modal"
              class="btn btn-success"
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
