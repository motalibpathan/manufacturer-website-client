import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductRow = ({ product, index, setSelectedProduct }) => {
  const { image, name, quantity, unitPrice } = product;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img width={80} src={image} alt="" />{" "}
      </td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${unitPrice}</td>
      <td>
        <label
          onClick={() => setSelectedProduct(product)}
          htmlFor="product-delete-modal"
          className="py-2 px-4 border rounded-md bg-red-50 cursor-pointer"
        >
          {" "}
          <FontAwesomeIcon className="mr-2" icon={faTrashCan} /> Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
