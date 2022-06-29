import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";

const ProductCard = ({ product }) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { _id, name, description, image, unitPrice, minQuantity, quantity } =
    product;
  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => setVisible(isVisible)}
    >
      <div
        className={`${
          visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        } duration-1000 group rounded relative shadow-xl hover:shadow-2xl`}
      >
        {/* <div
        className="w-full h-[400px] bg-cover bg-no-repeat bg-fit"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center center",
        }}
      ></div> */}
        <div>
          <img src={image} alt="" className="w-full lg:h-[200px] h-[150px]" />
        </div>
        <div className="lg:p-5 p-2">
          <h1 className="font-bold my-4 group-hover:text-emerald-400 lg:text-xl duration-500 text-sm">
            {name}
          </h1>
          <p className="mb-3 lg:text-base hidden lg:block">
            {description.slice(0, 50)}...
          </p>
          <p className="font-semibold border-l-2 border-emerald-500 pl-2 lg:text-base text-xs">
            {" "}
            Minimum Order : {minQuantity}
          </p>
          <p className="font-semibold border-l-2 border-emerald-500 pl-2 mb-2 lg:text-base text-xs">
            Available Quantity: {quantity}
          </p>
          <p className="text-2xl font-bold text-success mb-10">
            Price: ${unitPrice}
          </p>
        </div>
        <button
          onClick={() => navigate(`purchase/${_id}`)}
          className="w-full border-2 border-black lg:py-2 py-1 absolute bottom-0 left-0 font-bold hover:bg-black hover:text-white duration-500"
        >
          Buy Now
        </button>
      </div>
    </ReactVisibilitySensor>
  );
};

export default ProductCard;
