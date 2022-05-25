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
      <h1 className="text-4xl font-bold mb-3">Our Business Summary</h1>
      <div className="h-2 bg-gray-500 w-full mb-10">
        <div className="h-2 bg-success w-1/5 "></div>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full shadow-lg">
        <div class="stat text-center">
          <div class="text-success">
            <FontAwesomeIcon className="text-6xl" icon={faUsers} />
          </div>
          <div class="stat-title text-2xl">We served</div>
          <div class="stat-value text-6xl text-orange-500">100+</div>
          <div class="stat-desc text-2xl">Customers</div>
        </div>

        <div class="stat text-center">
          <div class="text-success">
            <FontAwesomeIcon className="text-6xl" icon={faChartSimple} />
          </div>
          <div class="stat-title text-2xl">About</div>
          <div class="stat-value text-6xl text-rose-500">120M+</div>
          <div class="stat-desc text-2xl">Annual revenue</div>
        </div>

        <div class="stat text-center">
          <div class="text-success mb-2">
            <FontAwesomeIcon className="text-6xl" icon={faScrewdriverWrench} />
          </div>
          <div class="stat-title text-2xl">We have</div>
          <div class="stat-value text-6xl text-sky-500">50+</div>
          <div class="stat-desc text-2xl">Tools</div>
        </div>

        <div class="stat text-center">
          <div class="text-success mb-2">
            <FontAwesomeIcon className="text-6xl" icon={faUserCheck} />
          </div>
          <div class="stat-title text-2xl">We have</div>
          <div class="stat-value text-6xl text-pink-500">33K+</div>
          <div class="stat-desc text-2xl">Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
