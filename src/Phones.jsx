import React from "react";
import "./Phones.css";
import phn1 from "./images/iPhone 12/iphones-1-img.png";
import phn2 from "./images/iPhone 12/iphones-2-img.png";

function Phones() {
  return (
    <div className="phones-root">
      <h1>iPhones</h1>
      <div className="phones">
        <img className="img1" src={phn1} alt="phn1" />
        <img className="img2" src={phn2} alt="phn2" />
      </div>
    </div>
  );
}

export default Phones;
