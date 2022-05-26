import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <BusinessSummary />
      <Reviews />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Home;
