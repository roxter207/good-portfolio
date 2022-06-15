import React from "react";
import Product from "../product/Product";
import "./productlist.css";
import { products } from "../../data";

export default function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire</h1>
        <p className="pl-desc">
          “I wondered if that was how forgiveness budded; not with the fanfare
          of epiphany, but with pain gathering its things, packing up, and
          slipping away unannounced in the middle of the night.” Khaled
          Hosseini, “The Kite Runner”
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} />
        ))}
      </div>
    </div>
  );
}
