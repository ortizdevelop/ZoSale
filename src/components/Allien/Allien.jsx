// Libraries
import { motion } from "framer-motion";

// CSS Styles
import "./css/Allien.css";

// Images
import img1 from "./images/image.png";
import img2 from "./images/icon.png";

const bounceDown = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: (time) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const bounceUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (time) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const bounce = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (time) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const bounce2 = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (time) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: time * 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const fadeLeft = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (time) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const fadeRight = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: (time) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

function Allien() {
  return (
    <section className="allien">
      <div className="allien__inner">
        <article className="allien-top">
          <img src={img1} alt="" className="allien-top__img" />
          <ul className="allien-top__column">
            <li className="allien-top__item">
              <p className="allien-top__title">
                Allien uses a modern server-side templating languages
              </p>
            </li>
            <li className="allien-top__item">
              <p className="allien-top__subtitle">
                Here are some templating languages that you can use, with little
                code snippets to show you how to work and what makes them unique
                & the modern server-side templating language renders directly/
              </p>
            </li>
            <li className="allien-top__item">
              <button className="allien-top__button">
                <span>Try For Free</span>
              </button>
            </li>
          </ul>
        </article>
        <article className="allien-bottom">
          <div>
            <p className="allien-bottom__title">
              Build a website based on your requirement
            </p>
            <img src={img2} alt="" className="allien-bottom__img" />
            <p className="allien-bottom__desc">
              Whatever you’re building, Sark has covered. With convenient,
              out-of-the-box features & even more ready-to-use integrations,
              Sark has everything that you need to build.
            </p>
          </div>
          <div>
            <ul className="allien-bottom__column">
              <li className="allien-bottom__item">
                <p className="allien-bottom__text">
                  Full webflow CMS integration
                </p>
              </li>
              <li className="allien-bottom__item">
                <p className="allien-bottom__text">
                  Includes advanced UI elements
                </p>
              </li>
              <li className="allien-bottom__item">
                <p className="allien-bottom__text">
                  Any block can be easily customized
                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Allien;
