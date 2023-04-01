// Libraries
import { motion } from "framer-motion";

// CSS Styles
import "./css/Footer.css";

// Images
import logo from "./images/Logo.png";
import img1 from "./images/Twitter.png";
import img2 from "./images/Behance.png";
import img3 from "./images/Instagram.png";
import img4 from "./images/Linkedin.png";

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

function Footer() {
  return (
    <footer className="footer">
      <section className="container">
        <article className="footer-info">
          <img src={logo} alt="" className="footer-info__logo" />
          <p className="footer-info__text">
            Lorem Ipsum is simply dummy text of the printing and industry. Lorem
            Ipsum has been the industry'
          </p>
          <div className="footer-info__follow">
            <p className="footer-info__title">Follow Us </p>
            <ul className="footer-info__column">
              <li className="footer-info__item">
                <img src={img1} alt="" className="footer-info__logos" />
              </li>
              <li className="footer-info__item">
                <img src={img2} alt="" className="footer-info__logos" />
              </li>
              <li className="footer-info__item">
                <img src={img3} alt="" className="footer-info__logos" />
              </li>
              <li className="footer-info__item">
                <img src={img4} alt="" className="footer-info__logos" />
              </li>
            </ul>
          </div>
        </article>
        <article className="footer-links">
          <ul className="footer-links__column">
            <li className="footer-links__item">
              <p className="footer-links__title">Links</p>
            </li>
            <li className="footer-links__item">
              <p className="footer-links__links">Home</p>
            </li>
            <li className="footer-links__item">
              <p className="footer-links__links">Pricing</p>
            </li>
            <li className="footer-links__item">
              <p className="footer-links__links">About us</p>
            </li>
            <li className="footer-links__item">
              <p className="footer-links__links">Careers</p>
            </li>
            <li className="footer-links__item">
              <p className="footer-links__links">Blogs</p>
            </li>
          </ul>
          <ul className="footer-links__column">
            <li className="footer-links__item">
              <p className="footer-links__title">Help & Support</p>
            </li>
            <li className="footer-links__item">
              <p className="footer-links__links">Support</p>
            </li>
            <li className="footer-links__item">
              <p className="footer-links__links">FAQ</p>
            </li>
            <li className="footer-links__item">
              <p className="footer-links__links">Privacy</p>
            </li>
            <li className="footer-links__item">
              <p className="footer-links__links">Log In </p>
            </li>
            <li className="footer-links__item">
              <p className="footer-links__links">Sign Up</p>
            </li>
          </ul>
        </article>
        <article className="footer-contacts">
          <p className="footer-contacts__title">Contact Details</p>
          <ul className="footer-contacts__column">
            <li className="footer-contacts__item">
              <p className="footer-contacts__text">
                2118 Thornridge Connecticut 35624
              </p>
            </li>
            <li className="footer-contacts__item">
              <p className="footer-contacts__text">info@gmail.com</p>
            </li>
            <li className="footer-contacts__item">
              <p className="footer-contacts__text">(205) 555-0100</p>
            </li>
          </ul>
          <p className="footer-contacts-form__title">Newslatter</p>
          <form
            id="contactForm"
            action="send.php"
            method="post"
            className="footer-contacts-form"
          >
            <input
              type="text"
              id="mail"
              name="user_mail"
              placeholder="Email address"
              required
              className="footer-contacts-form__input"
            />
            <button
              type="submit"
              value="Send"
              className="footer-contacts-form__btn"
            >
              SUBSCRIBE
            </button>
          </form>
        </article>
      </section>
      <article className="footer-copyright">
        <p className="footer-copyright__title">
          © 2023.<span>Allen</span> All rights reserved.
        </p>
      </article>
    </footer>
  );
}

export default Footer;
