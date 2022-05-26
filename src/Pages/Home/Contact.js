import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="md:container mx-auto p-5 my-10">
      <h1 className="text-3xl font-bold mb-3">Contact us</h1>
      <div className="h-2 bg-gray-500 w-full mb-10">
        <div className="h-2 bg-success w-1/5 "></div>
      </div>
      <div className="p-5 w-full bg-gray-50 rounded-md space-y-5">
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
  );
};

export default Contact;
