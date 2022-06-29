import React, { useEffect, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import Loading from "../Shared/Loading";
import ProductCard from "./ProductCard";

const Products = () => {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://spadex-tools.herokuapp.com/product?size=8`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="h-[200px] w-full flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="relative">
        <div className="absolute top-0 left-0">
          <img
            width={300}
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/613f1b7f6b62f401d03ab1fa_Fill.svg"
            alt=""
          />
        </div>
        <div className="max-w-[1140px] w-full mx-auto p-5 my-10">
          <ReactVisibilitySensor
            partialVisibility
            onChange={(isVisible) => setVisible(isVisible)}
          >
            <h1
              className={`font-title text-3xl font-bold mb-3 duration-[2s] ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Tools
            </h1>
          </ReactVisibilitySensor>
          <div className="h-2 bg-gray-500 w-full mb-10">
            <div className="h-2 bg-success w-1/5 "></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 lg:gap-5">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
