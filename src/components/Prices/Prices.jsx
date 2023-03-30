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
        <p className="prices-pricing__title">
          Best new pricing Plan for your future
        </p>
        <div className="prices-pricing__checkbox">
          <button className="prices-pricing__button">Monthly</button>
          <button className="prices-pricing__button">Yearly</button>
        </div>
        <div className="prices-pricing__plans">
          <form className="prices-pricing__plans-profile">
            <p className="plans-form__title">Personal</p>
            <p className="plans-form__price">$29</p>
            <ul className="plans-form__column">
              <li className="plans-form__item">
                <p>10 GB Disk Space</p>
              </li>
              <li className="plans-form__item">
                <p>1 Year Support</p>
              </li>
              <li className="plans-form__item">
                <p>500 Queries</p>
              </li>
              <button className="plans-form__button">Purchase Now</button>
            </ul>
          </form>
          <form className="prices-pricing__plans-professional">
            <p className="plans-form__title">Professional</p>
            <p className="plans-form__price">$99</p>
            <ul className="plans-form__column">
              <li className="plans-form__item">
                <p>800 GB Disk Space</p>
              </li>
              <li className="plans-form__item">
                <p>10 Year Support</p>
              </li>
              <li className="plans-form__item">
                <p>800 Queries</p>
              </li>
              <li className="plans-form__item">
                <p>Fully Statistics</p>
              </li>
              <li className="plans-form__item">
                <p>Free Custom Domain</p>
              </li>
              <button className="plans-form__button">Purchase Now</button>
            </ul>
          </form>
          <form className="prices-pricing__plans-enterprice">
            <p className="plans-form__title">Enterprise</p>
            <p className="plans-form__price">$79</p>
            <ul className="plans-form__column">
              <li className="plans-form__item">
                <p>500 GB Disk Space</p>
              </li>
              <li className="plans-form__item">
                <p>5 Year Support</p>
              </li>
              <li className="plans-form__item">
                <p>600 Queries</p>
              </li>
              <button className="plans-form__button">Purchase Now</button>
            </ul>
          </form>
        </div>
      </article>
      <article className="prices-qa">
        <p className="prices-qa__title">Questions & Answers</p>
        <ul className="prices-qa__column">
          <li className="prices-qa__item">
            <p className="prices-qa__title">
              01. How does the free trial work?
            </p>
            <p className="prices-qa__text"></p>
          </li>
          <li className="prices-qa__item">
            <p className="prices-qa__title">
              02. How do you find different criteria in your process?
            </p>
            <p className="prices-qa__text"></p>
          </li>
          <li className="prices-qa__item">
            <p className="prices-qa__title">
              03 What do you look for in a founding team?
            </p>
            <p className="prices-qa__text"></p>
          </li>
          <li className="prices-qa__item">
            <p className="prices-qa__title">
              04. Do you recimmend Pay as you go or Pre Pay?
            </p>
            <p className="prices-qa__text"></p>
          </li>
          <li className="prices-qa__item">
            <p className="prices-qa__title">
              05. What do I get for $0 with my plan?
            </p>
            <p className="prices-qa__text"></p>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Prices;
