import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch(`http://localhost:5000/product`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="my-2 ">Available products {products?.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Available</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow key={product._id} product={product} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
