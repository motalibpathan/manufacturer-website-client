import React, { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const AboutUs = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => setVisible(isVisible)}
    >
      <div className=" bg-gray-900 text-white">
        <div className="max-w-[1140px] w-full mx-auto md:p-10 p-5">
          <h1
            className={`font-title text-3xl font-bold mb-3 duration-[1s] ${
              visible ? "opacity-100 translate-y-0" : "translate-y-8 opacity-0"
            }`}
          >
            About Us
          </h1>
          <div className="h-2 bg-gray-500 w-full mb-10">
            <div className="h-2 bg-success w-1/5 "></div>
          </div>
          <div className="md:flex md:space-x-10 space-y-5">
            <div className="overflow-hidden w-full md:w-1/2">
              <div
                className={`delay-500 w-full ease-out duration-[3s]   ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-80 opacity-0"
                } 
              `}
              >
                <h1 className="text-2xl font-semibold mb-5">
                  About Our Company
                </h1>
                <p className="text-justify my-2">
                  In the manufacturing industry, your credentials are critical.
                  Potential customers look for specific credentials to ensure
                  quality and value from your products and services and your
                  company itself. Your manufacturing company's About Us page is
                  the right place to share this important information.
                </p>
                <p className="text-justify my-2">
                  <span className="font-bold">ISO Certifications:</span> List
                  the specific ISO certifications your company holds. Be sure to
                  follow all ISO promotional rules when publicizing your ISO
                  certifications. There are specific ways a business must refer
                  to their ISO certifications and how you represent them.
                </p>
                <p className="text-justify my-2">
                  <span className="font-bold">Business Status:</span> Does your
                  business hold diverse or small business status? Are you a
                  woman-owned business? If so, list it here.
                </p>
                <p className="text-justify my-2">
                  <span className="font-bold"> Quality Information: </span>{" "}
                  Describe your company's quality policies and processes so your
                  audience recognizes this commitment. Some buyers from big
                  companies only partner with suppliers that hold specific
                  certifications or statuses. Learn more here: How To Become A S
                  Big Companies Choose New Suppliers
                </p>
              </div>
            </div>
            <div className="overflow-hidden w-full md:w-1/2">
              <div
                className={`delay-700 w-full duration-1000   ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-80 opacity-0"
                } 
              `}
              >
                <img
                  src="https://tkpro-demos.envalab.com/18/wp-content/uploads/sites/26/2021/10/wooden-house-structure-construction-site-power-too-X5QBN5X.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default AboutUs;
