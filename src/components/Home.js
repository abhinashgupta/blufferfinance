import "../css/Home.css";
import "../css/animation.css";
import home_img from "../images/home.svg";
import rippleImg from "../images/ripple.png";
import footImg from "../images/foot.png";
import banner1 from "../images/banner-1.png";
import banner2 from "../images/banner-2.png";
import banner3 from "../images/banner-3.png";
import banner4 from "../images/banner-4.png";
import fish1 from "../images/fish1.png";
import fish2 from "../images/fish2.png";
import btn1 from "../images/btn-1.png";
import btn2 from "../images/btn-2.png";
import medium from "../images/medium.svg";
import whatsapp from "../images/WhatsApp_Image_2023-09-07_at_1.16.45_PM-removebg-preview.png";
import twitter from "../images/icons8-twitterx-100.png";
import telegram from "../images/icons8-telegram-app-100.png";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import about from "./About"
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="home-bg">
      <div className="home">
        <div className="home-box">
          <div className="navbar">
            <h2>
              <img src={whatsapp} height={55} alt="" />
              Blufferfinance
            </h2>
            <div className={`nav-btns ${menuOpen ? "active" : ""}`}>
              <button className="btn">Home</button>
              <button className="btn">Docs</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#about").offsetTop,
                    behavior: "smooth",
                  });
                }}
                className="btn"
              >
                About
              </button>
              <div className="corner">
                <img src={twitter} height={20} alt="" />
                <img src={telegram} height={20} alt="" />
                <img src={medium} height={25} alt="" />
              </div>
            </div>
            <div
              className={`hamburger-menu ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <section className="home-section">
            <div className="home-left">
              <h4 style={{ fontWeight: "bold" }}>
                Slash-Resistant, Fluid Freedom
              </h4>
              <p>Empower Your Verifier</p>
              <button className="home-button button">
                Staking Coming Soon
              </button>
            </div>
            <img src={home_img} />
          </section>
          <div className="images">
            <img src={footImg} className="foot-img" />
            <img src={rippleImg} className="ripple-img" />
            <img src={banner1} className="banner-img1" />
            <img src={banner2} className="banner-img2" />
            <img src={banner3} className="banner-img3" />
            <img src={banner4} className="banner-img4" />
            <img src={fish1} className="fish1-img" />
            <img src={fish2} className="fish2-img" />
          </div>
        </div>
      </div>
      <div className="coming-soon">
        <p className="left">TOTAL ETH STAKED</p>
        <p className="center">Coming Soon</p>
        <div>
          <img src={btn1} className="btn1-img" />
          <img src={btn2} className="btn2-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
