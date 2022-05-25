import React from "react";

const MyPortfolio = () => {
  return (
    <div className="md:container mx-auto p-5 ">
      <div>
        <h1 className="text-2xl font-semibold">Name: Motalib Pathan</h1>
        <p className="text-xl">Email: motalibpathan11@gmail.com</p>
        <h2 className="my-3 font-bold text-2xl text-success">Education</h2>
        <p>
          Bachelor of Science:{" "}
          <span className="font-bold">Computer Science and Engineering</span>
        </p>
        <p className="font-bold">Southeast University</p>
        <p>Banani, Dhaka, Bangladesh</p>
        <h2 className="my-3 font-bold text-2xl text-success">Skills</h2>
        <p>
          Expertise: HTML, CSS, JavaScript, ES6, Rest API, React, Bootstrap-5,
          Tailwind CSS
        </p>
        <p>Comfortable: Node.js, Mongodb, Express.js, Firebase, Daisyui</p>
        <p>Tools: Git, Github, Heroku, Netlify, VS code, Figma, Photoshop</p>
        <h2 className="my-3 font-bold text-2xl text-success">Projects</h2>
        <a
          className="underline text-blue-500"
          href="https://warehouse-management-85499.web.app/"
        >
          Car Warehouse
        </a>
        <br />
        <a
          className="underline text-blue-500"
          href="https://red-onion-eight.vercel.app/"
        >
          Red Onion
        </a>
        <br />
        <a
          className="underline text-blue-500"
          href="https://my-blog-with-mern.vercel.app/"
        >
          Mern Blog
        </a>
      </div>
    </div>
  );
};

export default MyPortfolio;
