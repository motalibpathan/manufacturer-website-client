import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, description, image, unitPrice, minQuantity, quantity } =
    product;
  return (
    <div className="group rounded relative shadow-xl hover:shadow-2xl">
      {/* <div
        className="w-full h-[400px] bg-cover bg-no-repeat bg-fit"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center center",
        }}
      ></div> */}
      <div>
        <img src={image} alt="" className="w-full lg:h-[400px] h-[350px]" />
      </div>
      <div className="p-5">
        <h1 className="font-bold my-4 group-hover:text-emerald-400 text-2xl duration-500">
          {name}
        </h1>
        <p className="mb-3">{description}</p>
        <p className="font-semibold border-l-2 border-emerald-500 pl-2">
          {" "}
          Minimum Order Quantity : {minQuantity}
        </p>
        <p className="font-semibold border-l-2 border-emerald-500 pl-2 mb-2">
          Available Quantity: {quantity}
        </p>
        <p className="text-2xl font-bold text-success mb-10">
          Price: ${unitPrice}
        </p>
      </div>
      <button
        onClick={() => navigate(`purchase/${_id}`)}
        className="w-full border-2 border-black py-2 absolute bottom-0 left-0 font-bold hover:bg-black hover:text-white duration-500"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
