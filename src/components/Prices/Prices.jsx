// Libraries
import { motion } from "framer-motion";

// CSS Styles
import "./css/prices.css";

// Images
import icon1 from "./images/icon.svg";
import icon2 from "./images/icon-active.svg";
import shapes from "./images/shapes.png";
import vector from "./images/Vector.png";
import star from "./images/star.png";

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

function Prices() {
  return (
    <section className="prices">
      <article className="prices-pricing">
        <p className="prices-pricing__title"></p>
        <div className="prices-pricing__checkbox">
          <button className="prices-pricing__button"></button>
          <button className="prices-pricing__button"></button>
        </div>
        <div className="prices-pricing__plans">
          <ul className="prices-pricing__plans-column">
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
          </ul>
          <ul className="prices-pricing__plans-column">
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
          </ul>
          <ul className="prices-pricing__plans-column">
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
            <li className="prices-pricing__plans-item"></li>
          </ul>
        </div>
      </article>
      <article className="prices-qa">
        <p className="prices-qa__title">
          <ul className="prices-qa__column">
            <li className="prices-qa__item">
              <p className="prices-qa__number"></p>
              <p className="prices-qa__title"></p>
              <p className="prices-qa__text"></p>
            </li>
            <li className="prices-qa__item">
              <p className="prices-qa__number"></p>
              <p className="prices-qa__title"></p>
              <p className="prices-qa__text"></p>
            </li>
            <li className="prices-qa__item">
              <p className="prices-qa__number"></p>
              <p className="prices-qa__title"></p>
              <p className="prices-qa__text"></p>
            </li>
            <li className="prices-qa__item">
              <p className="prices-qa__number"></p>
              <p className="prices-qa__title"></p>
              <p className="prices-qa__text"></p>
            </li>
            <li className="prices-qa__item">
              <p className="prices-qa__number"></p>
              <p className="prices-qa__title"></p>
              <p className="prices-qa__text"></p>
            </li>
          </ul>
        </p>
      </article>
    </section>
  );
}

export default Prices;
