import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../App";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const [user] = useContext(UserContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [inputQuantity, setInputQuantity] = useState(0);
  const [dataLoading, setDataLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setInputQuantity(data.minQuantity);
        setDataLoading(false);
      });
  }, [id]);

  if (dataLoading) {
    return <Loading />;
  }

  const { _id, name, description, image, unitPrice, minQuantity, quantity } =
    product;

  const onSubmit = (data) => {
    const order = {
      userName: user.displayName,
      email: user.email,
      address: data.address,
      phone: data.phone,
      productId: _id,
      orderQuantity: inputQuantity,
      unitPrice: unitPrice,
      productName: name,
      productImg: image,
    };

    fetch(`http://localhost:5000/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          const newQuantity = product.quantity - parseInt(inputQuantity);
          const newProduct = { ...product };
          newProduct.quantity = newQuantity;
          reset();
          setProduct(newProduct);
          toast.success("Order placed");
        }
      });
  };

  return (
    <div className="lg:w-4/5 w-full mx-auto mt-7">
      <div className="md:flex md:space-x-10 p-5">
        <div className="md:w-2/5   ">
          <img
            className="w-full border border-gray-400 rounded p-5"
            src={image}
            alt=""
          />
        </div>
        <div className="md:w-3/5">
          <div className="p-5 border border-gray-400 rounded">
            <h1 className="text-xl font-bold mt-2">{name}</h1>
            <p className="text-md my-2">{description}</p>
            <p className="font-semibold">
              Minimum Purchase Quantity: {minQuantity}
            </p>
            <p className="font-semibold ">Available Quantity: {quantity}</p>
            <p className="text-success text-2xl font-bold mt-2">
              Price: ${unitPrice}
            </p>
          </div>
          <h1 className="text-xl font-bold my-3">Shipping info</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-5 border border-gray-400 rounded "
          >
            <h1>Name: {user.displayName}</h1>
            <p>Email: {user.email}</p>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full "
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address field is required",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Your Phone"
                className="input input-bordered w-full "
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone is required",
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Order Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered w-full "
                value={inputQuantity}
                onChange={(e) => setInputQuantity(e.target.value)}
              />
              <label className="label">
                {+inputQuantity > +quantity && (
                  <span className="label-text-alt text-red-500">
                    Available quantity is {quantity}
                  </span>
                )}
                {+inputQuantity < +minQuantity && (
                  <span className="label-text-alt text-red-500">
                    Minimum order quantity is {minQuantity}
                  </span>
                )}
              </label>
            </div>
            <input
              disabled={
                +inputQuantity > +quantity || +inputQuantity < +minQuantity
              }
              type="submit"
              className="btn btn-success w-full mt-5"
              value={"Place Order"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
