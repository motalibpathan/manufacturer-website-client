import React from "react";

const AddProduct = () => {
  return (
    <div className="bg-gray-50 p-5 rounded-md">
      <h1 className="text-2xl font-bold mb-2">Add a product</h1>
      <form className="lg:w-4/5">
        <div className="w-full md:flex md:space-x-5 my-5">
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text font-bold">Product Title</span>
            </label>
            <input
              type="text"
              placeholder="Product name"
              name="name"
              class="input input-bordered border-2 input-success w-full "
            />
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text font-bold">Product Image</span>
            </label>
            <input
              type="file"
              name="img"
              class="input input-bordered border-2 input-success w-full pt-1"
            />
          </div>
        </div>

        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text font-bold">Product Description</span>
          </label>
          <textarea
            class="textarea textarea-accent w-full border-2"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="w-full md:flex md:space-x-5 my-5">
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text font-bold">Minimum Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Minimum Quantity"
              name="name"
              class="input input-bordered border-2 input-success w-full "
            />
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text font-bold">Available Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Minimum Quantity"
              name="number"
              class="input input-bordered border-2 input-success w-full "
            />
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text font-bold">Per Unit Price</span>
            </label>
            <input
              type="text"
              placeholder="Minimum Quantity"
              name="number"
              class="input input-bordered border-2 input-success w-full "
            />
          </div>
        </div>
        <input
          className="px-7 py-3 bg-cyan-500 text-white rounded-md mt-3 cursor-pointer"
          type="submit"
          value={"Add Product"}
        />
      </form>
    </div>
  );
};

export default AddProduct;
