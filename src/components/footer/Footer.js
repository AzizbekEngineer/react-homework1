import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top df">
        <div className="footer__left df">
          <ul className="footer__list">
            <li className="footer__item">Sustainability</li>
            <li className="footer__item">Contact Us</li>
            <li className="footer__item">FAQ</li>
            <li className="footer__item">Careers</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">Privacy Policy</li>
            <li className="footer__item">CA Privacy Rights</li>
            <li className="footer__item">Terms of Use</li>
            <li className="footer__item">Newsletter</li>
          </ul>
        </div>
        <div className="footer__right">
          <h3>ONLY GOOD HAIR DAES AHEAD—AND 10% OFF YOUR FIRST ORDER</h3>
          <form action="" className="footer__form">
            <input type="text" />
            <button className="footer__btn">SUBSCRIBE</button>
          </form>
          <p className="footer__desc">
            Want to shop in person? Swing by our showroom. M-F, 10am-2pm 5051 E
            Indigo St, Suite 105, Mesa, AZ 85205
          </p>
        </div>
      </div>
      <hr />
      <p className="footer__by">© 2021dae . All rights reserved.</p>
    </footer>
  );
}
export default Footer;
