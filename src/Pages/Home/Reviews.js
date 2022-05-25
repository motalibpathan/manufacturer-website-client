import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch(`http://localhost:5000/review`).then((res) => res.json())
  );
  if (isLoading) {
    <Loading />;
  }
  return (
    <div className="md:container mx-auto p-5 text-center">
      <h1 className="text-3xl font-bold mb-5">What our clients say</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {reviews.map((review) => (
          <div className="p-5 rounded-md border-2 border-gray-400">
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
