import React from "react";

const AboutUs = () => {
  return (
    <div className="md:container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-3">About Us</h1>
      <div className="h-2 bg-gray-500 w-full mb-10">
        <div className="h-2 bg-success w-1/5 "></div>
      </div>
      <div className="md:flex md:space-x-10 space-y-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-5">About Our Company</h1>
          <p className="text-justify my-2">
            In the manufacturing industry, your credentials are critical.
            Potential customers look for specific credentials to ensure quality
            and value from your products and services and your company itself.
            Your manufacturing company's About Us page is the right place to
            share this important information.
          </p>
          <p className="text-justify my-2">
            <span className="font-bold">ISO Certifications:</span> List the
            specific ISO certifications your company holds. Be sure to follow
            all ISO promotional rules when publicizing your ISO certifications.
            There are specific ways a business must refer to their ISO
            certifications and how you represent them.
          </p>
          <p className="text-justify my-2">
            <span className="font-bold">Business Status:</span> Does your
            business hold diverse or small business status? Are you a
            woman-owned business? If so, list it here.
          </p>
          <p className="text-justify my-2">
            <span className="font-bold"> Quality Information: </span> Describe
            your company's quality policies and processes so your audience
            recognizes this commitment. Some buyers from big companies only
            partner with suppliers that hold specific certifications or
            statuses. Learn more here: How To Become A S Big Companies Choose
            New Suppliers
          </p>
        </div>
        <img
          className="w-full md:w-1/2"
          src="https://tkpro-demos.envalab.com/18/wp-content/uploads/sites/26/2021/10/wooden-house-structure-construction-site-power-too-X5QBN5X.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
