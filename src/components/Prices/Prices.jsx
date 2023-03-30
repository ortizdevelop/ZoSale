// Libraries
import { motion } from "framer-motion";
import { useState } from "react";

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
  const [activeButton, setActiveButton] = useState("button-active");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <section className="prices">
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.1,
          once: true,
        }}
        className="prices-pricing"
      >
        <motion.p
          variants={bounceDown}
          custom={1}
          className="prices-pricing__title"
        >
          Best new pricing <br />
          Plan for your future
        </motion.p>
        <motion.div
          variants={bounceUp}
          custom={2}
          className="prices-pricing__checkbox"
        >
          <button
            className={`button ${
              activeButton === "Monthly"
                ? "button-active"
                : "prices-pricing__button"
            }`}
            onClick={() => handleButtonClick("Monthly")}
          >
            Monthly
          </button>
          <button
            className={`button ${
              activeButton === "Yearly"
                ? "button-active"
                : "prices-pricing__button"
            }`}
            onClick={() => handleButtonClick("Yearly")}
          >
            Yearly
          </button>
        </motion.div>
        <div className="prices-pricing__plans">
          <motion.form
            variants={fadeLeft}
            custom={4.5}
            className="prices-pricing__plans-profile plans-form"
          >
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
          </motion.form>
          <motion.form
            variants={bounce}
            custom={3.5}
            className="prices-pricing__plans-professional plans-form"
          >
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
          </motion.form>
          <motion.form
            variants={fadeRight}
            custom={5.5}
            className="prices-pricing__plans-enterprice plans-form"
          >
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
          </motion.form>
        </div>
      </motion.article>
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.1,
          once: true,
        }}
        className="prices-qa"
      >
        <motion.p variants={bounceDown} custom={1} className="prices-qa__title">
          Questions & Answers
        </motion.p>
        <ul className="prices-qa__column">
          <motion.li variants={bounceUp} custom={2} className="prices-qa__item">
            <p className="prices-qa__item-title">
              01. How does the free trial work?
            </p>
            <p className="prices-qa__text">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </motion.li>
          <motion.li variants={bounceUp} custom={3} className="prices-qa__item">
            <p className="prices-qa__item-title">
              02. How do you find different criteria in your process?
            </p>
            <p className="prices-qa__text">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </motion.li>
          <motion.li variants={bounceUp} custom={4} className="prices-qa__item">
            <p className="prices-qa__item-title">
              03 What do you look for in a founding team?
            </p>
            <p className="prices-qa__text">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </motion.li>
          <motion.li variants={bounceUp} custom={5} className="prices-qa__item">
            <p className="prices-qa__item-title">
              04. Do you recimmend Pay as you go or Pre Pay?
            </p>
            <p className="prices-qa__text">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </motion.li>
          <motion.li variants={bounceUp} custom={6} className="prices-qa__item">
            <p className="prices-qa__item-title">
              05. What do I get for $0 with my plan?
            </p>
            <p className="prices-qa__text">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </motion.li>
        </ul>
      </motion.article>
    </section>
  );
}

export default Prices;
