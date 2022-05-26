import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import Overview from "./Overview";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <BusinessSummary />
      <Reviews />
      <Overview />
      <Contact />
    </div>
  );
};

export default Home;
