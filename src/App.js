import logo from "./logo.svg";
import avatar from "./assets/images/avatar.svg";
import follow1 from "./assets/images/follow1.svg";
import follow2 from "./assets/images/follow2.svg";
import follow3 from "./assets/images/follow3.svg";
import "./App.css";
import Header from "./components/header/Header";
import Product from "./components/products/Product";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Product />
      <div className="comment">
        <div className="container">
          <div className="comment__cards">
            <div className="comment__card">
              <img src={avatar} alt="" />
            </div>
            <div className="comment__card__info">
              <h3 className="comment__title">Meet Dae</h3>
              <p className="comment__desc">
                We’re a haircare line based in sunny Arizona. Our products are
                made up of the many things that make our home special, including
                the scent of orange blossoms in the air, colors of majestic
                sunsets and nourishing ingredients derived from desert
                botanicals. We believe haircare doesn’t have to be complicated
                and aimed to make a line that is simple and effective. We hope
                that dae plays a special role in your everyday hair routine from
                sunrise to sunset and allows you to feel the warmth of the
                desert wherever you are.
              </p>
              <h4>Read More</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="follow">
        <div className="container">
          <h3 className="follow__title">Follow Us @daehair</h3>
          <div className="follow__cards">
            <div className="follow__card">
              <img src={follow1} alt="" />
            </div>
            <div className="follow__card">
              <img src={follow2} alt="" />
            </div>
            <div className="follow__card">
              <img src={follow3} alt="" />
            </div>
            <div className="follow__card">
              <img src={follow1} alt="" />
            </div>
            <div className="follow__card">
              <img src={follow2} alt="" />
            </div>
            <div className="follow__card">
              <img src={follow3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
