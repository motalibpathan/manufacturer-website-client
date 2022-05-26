import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch(`https://spadex-tools.herokuapp.com/review`).then((res) => res.json())
  );
  if (isLoading) {
    <Loading />;
  }
  return (
    <div className="md:container mx-auto p-5 mt-10">
      <h1 className="text-3xl font-bold mb-3">What our clients say</h1>
      <div className="h-2 bg-gray-500 w-full mb-10">
        <div className="h-2 bg-success w-1/5 "></div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {reviews?.map((review) => (
          <div
            key={review._id}
            className="p-5 rounded-md border-2 border-gray-400"
          >
            <p className="font-bold">{review.customerName}</p>
            <p>Rating: {review.rating}</p>
            <p>Comments: {review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
