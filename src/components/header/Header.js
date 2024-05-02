import React from "react";
import headerLogo from "../../assets/images/header/logo.svg";
import shop from "../../assets/images/header/shop.svg";
import hero from "../../assets/images/header/hero.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <p className="header__top">Free Shipping on US Orders Over $60</p>
      <nav className="navbar container">
        <ul className="header__list df">
          <li className="header__item">
            <a href="#">Shop</a>
          </li>
          <li className="header__item">
            <a href="#">The Edit</a>
          </li>
          <li className="header__item">
            <a href="#">Our Story</a>
          </li>
          <li className="header__item">
            <a href="#">Reviews</a>
          </li>
        </ul>
        <div className="header__logo">
          <img src={headerLogo} alt="" />
        </div>
        <div className="header__btns df">
          <button>Account</button>
          <div className="header__btn__info df">
            <img src={shop} alt="" />
            <span>0</span>
          </div>
        </div>
      </nav>
      <div className="hero"></div>
      <div className="hero__box">
        <h3 className="hero__desc">Ready To Get Drenched?</h3>
        <h2 className="hero__title">Meet Monsoon Moisture Mask</h2>
        <button className="hero__btn">SHOP NOW</button>
      </div>
    </header>
  );
}
export default Header;
