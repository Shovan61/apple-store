import React, { useState, useEffect } from "react";
import "./Hero.css";
import one from "./images/slideshow/section-1-bg-1.jpg";
import two from "./images/slideshow/section-1-bg-2.jpg";
import three from "./images/slideshow/section-1-bg-3.jpg";
import four from "./images/slideshow/section-1-bg-4.jpg";
import five from "./images/slideshow/section-1-bg-5.jpg";
import iphone from "./images/iPhone 12/iphone.png";

const arrOfImages = [one, two, three, four, five];

function Hero() {
  const [number, setnumber] = useState(0);

  useEffect(() => {
    if (number > 4) {
      setnumber(0);
    }
  }, [number]);

  useEffect(() => {
    const interval = setInterval(() => {
      changeBackGround();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const changeBackGround = () => {
    setnumber((prev) => {
      return parseInt(prev) + 1;
    });
  };

  console.log(number);
  return (
    <div
      className="hero-root"
      id="hero"
      style={{
        backgroundImage: `url(${arrOfImages[number]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "all 2s ease-in-out",
        transformOrigin: "center",
      }}
    >
      {/* Nav Bar */}
      <nav className="nav-bar">
        <div className="logo">
          <i className="fab fa-apple fa-3x"></i>
        </div>

        <div className="nav-links">
          <a href="#">iPhone12</a>
          <a href="#">MacbookPro</a>
          <a href="#">Watch</a>
          <a href="#">iPod</a>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero-container">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="front-side">
              <img src={iphone} alt="iphone" />
            </div>
            <div className="back-side">
              <i class="fab fa-apple fa-5x"></i>
            </div>
          </div>
        </div>
        <div className="right">
          <h1> &#8592; BEST GIFT</h1>
          <span>"Creativity is just connecting things."</span>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
