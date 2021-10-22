import React from "react";
import "./Hero.css";
import one from "./images/slideshow/section-1-bg-1.jpg";
import two from "./images/slideshow/section-1-bg-2.jpg";
import three from "./images/slideshow/section-1-bg-3.jpg";
import four from "./images/slideshow/section-1-bg-4.jpg";
import five from "./images/slideshow/section-1-bg-5.jpg";

function Hero() {
  return (
    <div className="hero-root" id="hero">
      {/* Nav Bar */}
      <nav className="nav-bar">
        <div className="logo">
          <i class="fab fa-apple fa-3x"></i>
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
