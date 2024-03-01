import React, { useEffect } from "react";
import HomeImage from "../../components/HomeImage/HomeImage";
import Products from "../../components/Products/Products";
import SpecialProducts from "../../components/SpecialProducts/SpecialProducts";
import Slider from "../../components/Slider/Slider";
import News from "../../components/News/News";
import { shopData, productsData } from "../../data";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <HomeImage />
      <Products />
      <SpecialProducts />
      <Slider />
      <News />
    </div>
  );
};

export default Home;
