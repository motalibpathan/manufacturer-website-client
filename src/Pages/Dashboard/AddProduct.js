import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_STORE_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const product = {
            name: data.name,
            image: result.data.url,
            description: data.description,
            minQuantity: data.minQuantity,
            quantity: data.quantity,
            unitPrice: data.unitPrice,
          };
          fetch(`http://localhost:5000/product`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product Added");
                reset();
              } else {
                toast.error("Failed to add product");
              }
            });
        }
      });
  };
  return (
    <div className=" p-5 rounded-md border-2 border-gary-100">
      <h1 className="text-2xl font-bold mb-2">Add a product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:w-4/5">
        <div className="w-full md:flex md:space-x-5 my-5">
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text font-bold">Product Title</span>
            </label>
            <input
              type="text"
              placeholder="Product name"
              class="input input-bordered border-2 border-success w-full "
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text font-bold">Product Image</span>
            </label>
            <input
              type="file"
              class="input input-bordered border-2 border-success w-full pt-1"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text font-bold">Product Description</span>
          </label>
          <textarea
            class="textarea border-success w-full border-2"
            placeholder="Description"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          ></textarea>
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <div className="w-full md:flex md:space-x-5 my-5">
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text font-bold">Minimum Order Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Minimum Quantity"
              class="input input-bordered border-2 border-success  w-full "
              {...register("minQuantity", {
                required: {
                  value: true,
                  message: "Minimum quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.minQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minQuantity.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text font-bold">Available Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              class="input input-bordered border-2 border-success  w-full "
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.quantity.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text font-bold">Per Unit Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              class="input input-bordered border-2 border-success w-full "
              {...register("unitPrice", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.unitPrice?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.unitPrice.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <input
          className="px-7 py-3 bg-success text-white rounded-md mt-3 cursor-pointer"
          type="submit"
          value={"Add Product"}
        />
      </form>
    </div>
  );
};

export default AddProduct;
