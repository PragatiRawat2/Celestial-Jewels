import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import Slider from "../../assets/slider/Slider"


export const Shop = () => {
  return (
    <div>
    <Slider/>

    <div className="shop">
      <div className="shopTitle">
        <h1>Celestial Jewels</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    </div>
  );
};
