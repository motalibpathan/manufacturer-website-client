import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://spadex-tools.herokuapp.com/product?size=6`)
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
    <div className="md:container mx-auto p-5 my-10">
      <h1 className="text-3xl font-bold mb-3">All Tools</h1>
      <div className="h-2 bg-gray-500 w-full mb-10">
        <div className="h-2 bg-success w-1/5 "></div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
