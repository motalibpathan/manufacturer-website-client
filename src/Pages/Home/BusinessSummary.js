import {
  faChartSimple,
  faScrewdriverWrench,
  faUserCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BusinessSummary = () => {
  return (
    <div className="md:container mx-auto p-5 mt-5">
      <h1 className="text-3xl font-bold mb-3">Our Business Summary</h1>
      <div className="h-2 bg-gray-500 w-full mb-10">
        <div className="h-2 bg-success w-1/5 "></div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full shadow-lg">
        <div className="stat text-center">
          <div className="text-success">
            <FontAwesomeIcon className="text-6xl" icon={faUsers} />
          </div>
          <div className="stat-title text-2xl">We served</div>
          <div className="stat-value text-6xl text-orange-500">100+</div>
          <div className="stat-desc text-2xl">Customers</div>
        </div>

        <div className="stat text-center">
          <div className="text-success">
            <FontAwesomeIcon className="text-6xl" icon={faChartSimple} />
          </div>
          <div className="stat-title text-2xl">About</div>
          <div className="stat-value text-6xl text-rose-500">120M+</div>
          <div className="stat-desc text-2xl">Annual revenue</div>
        </div>

        <div className="stat text-center">
          <div className="text-success mb-2">
            <FontAwesomeIcon className="text-6xl" icon={faScrewdriverWrench} />
          </div>
          <div className="stat-title text-2xl">We have</div>
          <div className="stat-value text-6xl text-sky-500">50+</div>
          <div className="stat-desc text-2xl">Tools</div>
        </div>

        <div className="stat text-center">
          <div className="text-success mb-2">
            <FontAwesomeIcon className="text-6xl" icon={faUserCheck} />
          </div>
          <div className="stat-title text-2xl">We have</div>
          <div className="stat-value text-6xl text-pink-500">33K+</div>
          <div className="stat-desc text-2xl">Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
