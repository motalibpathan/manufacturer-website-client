import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => setVisible(isVisible)}
    >
      <div className="relative">
        <div className="absolute top-0 left-0">
          <img
            width={300}
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/62331a8e5b10716d0f6bbb2d_bg-blobs.svg"
            alt=""
          />
        </div>
        <div className="max-w-[1140px] w-full mx-auto p-5 my-10">
          <h1
            className={`font-title text-3xl font-bold mb-3 duration-[2s] ${
              visible ? "opacity-100 translate-y-0" : "translate-y-8 opacity-0"
            }`}
          >
            Contact Us
          </h1>
          <div className="h-2 bg-gray-500 w-full mb-10">
            <div className="h-2 bg-success w-1/5 "></div>
          </div>
          <div className=" w-full rounded-md space-y-5">
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered input-success border-2 w-full "
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-success border-2 w-full "
            />
            <textarea
              className="textarea input-bordered input-success border-2 w-full"
              placeholder="Message"
              cols={50}
              rows={5}
            ></textarea>
            <button className="btn btn-success w-full text-white">
              <FontAwesomeIcon className="mr-2" icon={faPaperPlane} /> Submit
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <img
            width={300}
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/616ebedf65e7692a9d8e593d_emblem.svg"
            alt=""
          />
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default Contact;
