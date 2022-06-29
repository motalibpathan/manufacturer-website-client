import {
  faChartSimple,
  faScrewdriverWrench,
  faUserCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const BusinessSummary = () => {
  const [visible, setVisible] = useState(false);
  const handleOnChange = (isVisible) => {
    setVisible(isVisible);
  };
  return (
    <ReactVisibilitySensor partialVisibility onChange={handleOnChange}>
      <div className="relative">
        <div className="absolute top-0 right-0">
          <img
            width={300}
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/62331a8e5b10716d0f6bbb2d_bg-blobs.svg"
            alt=""
          />
        </div>
        <div className="max-w-[1140px] w-full mx-auto p-5 mt-5">
          <h1
            className={`font-title text-3xl font-bold mb-3 duration-[2s] ${
              visible ? "opacity-100 translate-y-0" : "translate-y-8 opacity-0"
            }`}
          >
            Business Summary
          </h1>
          <div className="h-2 bg-gray-500 w-full mb-10">
            <div className="h-2 bg-success w-1/5 "></div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full shadow-lg">
            <div className="stat text-center">
              <div className="text-success">
                <FontAwesomeIcon className="text-6xl" icon={faUsers} />
              </div>
              <div className="stat-title text-2xl">We served</div>
              <div className="stat-value text-6xl text-orange-500">
                {visible ? <CountUp start={0} end={100} /> : 100}+
              </div>
              <div className="stat-desc text-2xl">Customers</div>
            </div>

            <div className="stat text-center">
              <div className="text-success">
                <FontAwesomeIcon className="text-6xl" icon={faChartSimple} />
              </div>
              <div className="stat-title text-2xl">About</div>
              <div className="stat-value text-6xl text-rose-500">
                {visible ? <CountUp start={0} end={120} /> : 120}M+
              </div>
              <div className="stat-desc text-2xl">Annual revenue</div>
            </div>

            <div className="stat text-center">
              <div className="text-success mb-2">
                <FontAwesomeIcon
                  className="text-6xl"
                  icon={faScrewdriverWrench}
                />
              </div>
              <div className="stat-title text-2xl">We have</div>
              <div className="stat-value text-6xl text-sky-500">
                {visible ? <CountUp start={0} end={50} /> : 50}+
              </div>
              <div className="stat-desc text-2xl">Tools</div>
            </div>

            <div className="stat text-center">
              <div className="text-success mb-2">
                <FontAwesomeIcon className="text-6xl" icon={faUserCheck} />
              </div>
              <div className="stat-title text-2xl">We have</div>
              <div className="stat-value text-6xl text-pink-500">
                {visible ? <CountUp start={0} end={33} /> : 33}K+
              </div>
              <div className="stat-desc text-2xl">Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default BusinessSummary;
