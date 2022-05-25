import React, { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../App";

const MyReviews = () => {
  const [user] = useContext(UserContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const rating = event.target.rating.value;
    const description = event.target.description.value;
    const review = {
      rating,
      description,
      customerName: user.displayName,
      email: user.email,
    };
    console.log(review);
    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Your review added!");
          event.target.reset();
        }
      });
  };
  return (
    <div>
      <h1 className="font-2xl font-bold mb-5">Add a Review</h1>
      <form onSubmit={handleAddReview} className="p-5 bg-white w-full">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Pick a rating</span>
          </label>
          <select name="rating" class="select select-bordered">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
            name="description"
            class="textarea textarea-bordered h-24"
            placeholder="Description"
          ></textarea>
        </div>

        <input
          type="submit"
          value={"Add a review"}
          className="btn btn-success mt-5"
        />
      </form>
    </div>
  );
};

export default MyReviews;
