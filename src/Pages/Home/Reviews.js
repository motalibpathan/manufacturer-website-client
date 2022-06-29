import React, { useState } from "react";
import { useQuery } from "react-query";
import ReactVisibilitySensor from "react-visibility-sensor";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const [visible, setVisible] = useState(false);
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch(`https://spadex-tools.herokuapp.com/review`).then((res) => res.json())
  );
  if (isLoading) {
    <Loading />;
  }
  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => setVisible(isVisible)}
    >
      <div>
        <div className="absolute">
          <img
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/613f1b7f6b62f401d03ab1fa_Fill.svg"
            alt=""
          />
        </div>
        <div className="max-w-[1140px] w-full mx-auto p-5 mt-10 ">
          <h1
            className={`font-title text-3xl font-bold mb-3 duration-[2s] ${
              visible ? "opacity-100 translate-y-0" : "translate-y-8 opacity-0"
            }`}
          >
            What our client say
          </h1>
          <div className="h-2 bg-gray-500 w-full mb-10">
            <div className="h-2 bg-success w-1/5 "></div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 text-center">
            {reviews?.map((review, i) => (
              <div
                key={review._id}
                className="p-5 rounded-md border-2 border-gray-400"
              >
                <p className="font-bold">{review.customerName}</p>
                <p>Rating: {review.rating}</p>
                <div class="rating">
                  <input
                    type="radio"
                    name={`rating-${i}`}
                    class="mask mask-star-2 bg-orange-400"
                    checked={"1" === review.rating}
                    readOnly
                  />
                  <input
                    type="radio"
                    name={`rating-${i}`}
                    class="mask mask-star-2 bg-orange-400"
                    checked={"2" === review.rating}
                    readOnly
                  />
                  <input
                    type="radio"
                    name={`rating-${i}`}
                    class="mask mask-star-2 bg-orange-400"
                    checked={"3" === review.rating}
                    readOnly
                  />
                  <input
                    type="radio"
                    name={`rating-${i}`}
                    class="mask mask-star-2 bg-orange-400"
                    checked={"4" === review.rating}
                    readOnly
                  />
                  <input
                    type="radio"
                    name={`rating-${i}`}
                    class="mask mask-star-2 bg-orange-400"
                    checked={"5" === review.rating}
                    readOnly
                  />
                </div>
                <p>Comments: {review.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default Reviews;
