import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductRow = ({ product, index }) => {
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
        <button className="py-2 px-4 border rounded-md bg-red-50">
          {" "}
          <FontAwesomeIcon className="mr-2" icon={faTrashCan} /> Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
