import React from "react";
import product1 from "../../assets/images/product/product1.svg";
import product2 from "../../assets/images/product/product2.svg";
import product3 from "../../assets/images/product/product3.svg";
import back from "../../assets/images/product/back.svg";
import next from "../../assets/images/product/next.svg";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__top">
        <div className="container">
          <h3 className="product__title">Pick a Pretty Bottle</h3>
          <div className="product__cards">
            <div className="product__card">
              <div className="product__card__img">
                <img src={product1} alt="" />
              </div>
              <p className="product__desc">The Daedreamer Set</p>
              <p className="product__desc">$49.00</p>
            </div>
            <div className="product__card">
              <div className="product__card__img">
                <img src={product2} alt="" />
              </div>
              <p className="product__desc">The Daedreamer Set</p>
              <p className="product__desc">$49.00</p>
            </div>
            <div className="product__card">
              <div className="product__card__img">
                <img src={product3} alt="" />
              </div>
              <p className="product__desc">The Daedreamer Set</p>
              <p className="product__desc">$49.00</p>
            </div>
          </div>
          <div className="product__slide">
            <img src={back} alt="" />
            <img src={next} alt="" />
          </div>
        </div>
      </div>
      <div className="product__bottom container">
        <div className="product__info df">
          <h3>Feel the warmth of the desert wherever you are.</h3>
          <p>Shop Sets</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
