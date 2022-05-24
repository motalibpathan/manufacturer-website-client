import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, description, image, unitPrice, minQuantity, quantity } =
    product;
  return (
    <div className="group p-3 border border-gray-400 rounded relative">
      <div
        className="w-full h-[300px] bg-cover bg-no-repeat bg-fit"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center center",
        }}
      ></div>
      <h1 className="font-semibold my-2 group-hover:text-red-500 text-xl duration-500">
        {name}
      </h1>
      <p className="mb-3">{description}</p>
      <p className="font-semibold">Minimum Order Quantity : {minQuantity}</p>
      <p className="font-semibold mb-2">Available Quantity: {quantity}</p>
      <p className="text-xl font-semibold text-error mb-10">
        Price: ${unitPrice}
      </p>
      <button
        onClick={() => navigate(`purchase/${_id}`)}
        className="w-full bg-success py-2 absolute bottom-0 left-0 font-bold hover:bg-red-500 duration-500"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
