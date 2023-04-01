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
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.2,
        once: true,
      }}
      className="footer"
    >
      <section className="container">
        <article className="footer-info">
          <motion.img
            variants={bounceDown}
            custom={1}
            src={logo}
            alt=""
            className="footer-info__logo"
          />
          <motion.p
            variants={bounceDown}
            custom={2}
            className="footer-info__text"
          >
            Lorem Ipsum is simply dummy text of the printing and industry. Lorem
            Ipsum has been the industry'
          </motion.p>
          <div className="footer-info__follow">
            <motion.p
              variants={fadeLeft}
              custom={3}
              className="footer-info__title"
            >
              Follow Us{" "}
            </motion.p>
            <ul className="footer-info__column">
              <li className="footer-info__item">
                <motion.img
                  variants={bounceUp}
                  custom={4}
                  src={img1}
                  alt=""
                  className="footer-info__logos"
                />
              </li>
              <li className="footer-info__item">
                <motion.img
                  variants={bounceUp}
                  custom={5}
                  src={img2}
                  alt=""
                  className="footer-info__logos"
                />
              </li>
              <li className="footer-info__item">
                <motion.img
                  variants={bounceUp}
                  custom={6}
                  src={img3}
                  alt=""
                  className="footer-info__logos"
                />
              </li>
              <li className="footer-info__item">
                <motion.img
                  variants={bounceUp}
                  custom={7}
                  src={img4}
                  alt=""
                  className="footer-info__logos"
                />
              </li>
            </ul>
          </div>
        </article>
        <article className="footer-links">
          <ul className="footer-links__column">
            <li className="footer-links__item">
              <motion.p
                variants={bounceDown}
                custom={8}
                className="footer-links__title"
              >
                Links
              </motion.p>
            </li>
            <motion.li
              variants={bounceDown}
              custom={10}
              className="footer-links__item"
            >
              <p className="footer-links__links">Home</p>
            </motion.li>
            <motion.li
              variants={bounceDown}
              custom={12}
              className="footer-links__item"
            >
              <p className="footer-links__links">Pricing</p>
            </motion.li>
            <motion.li
              variants={bounceDown}
              custom={14}
              className="footer-links__item"
            >
              <p className="footer-links__links">About us</p>
            </motion.li>
            <motion.li
              variants={bounceDown}
              custom={16}
              className="footer-links__item"
            >
              <p className="footer-links__links">Careers</p>
            </motion.li>
            <motion.li
              variants={bounceDown}
              custom={18}
              className="footer-links__item"
            >
              <p className="footer-links__links">Blogs</p>
            </motion.li>
          </ul>
          <ul className="footer-links__column">
            <li className="footer-links__item">
              <motion.p
                variants={bounceDown}
                custom={9}
                className="footer-links__title"
              >
                Help & Support
              </motion.p>
            </li>
            <motion.li
              variants={bounceDown}
              custom={11}
              className="footer-links__item"
            >
              <p className="footer-links__links">Support</p>
            </motion.li>
            <motion.li
              variants={bounceDown}
              custom={13}
              className="footer-links__item"
            >
              <p className="footer-links__links">FAQ</p>
            </motion.li>
            <motion.li
              variants={bounceDown}
              custom={15}
              className="footer-links__item"
            >
              <p className="footer-links__links">Privacy</p>
            </motion.li>
            <motion.li
              variants={bounceDown}
              custom={17}
              className="footer-links__item"
            >
              <p className="footer-links__links">Log In </p>
            </motion.li>
            <motion.li
              variants={bounceDown}
              custom={19}
              className="footer-links__item"
            >
              <p className="footer-links__links">Sign Up</p>
            </motion.li>
          </ul>
        </article>
        <article className="footer-contacts">
          <motion.p
            variants={bounce}
            custom={3}
            className="footer-contacts__title"
          >
            Contact Details
          </motion.p>
          <ul className="footer-contacts__column">
            <motion.li
              variants={fadeLeft}
              custom={5}
              className="footer-contacts__item"
            >
              <p className="footer-contacts__text">
                2118 Thornridge Connecticut 35624
              </p>
            </motion.li>
            <motion.li
              variants={bounceUp}
              custom={7}
              className="footer-contacts__item"
            >
              <p className="footer-contacts__text">info@gmail.com</p>
            </motion.li>
            <motion.li
              variants={fadeRight}
              custom={9}
              className="footer-contacts__item"
            >
              <p className="footer-contacts__text">(205) 555-0100</p>
            </motion.li>
          </ul>
          <motion.p
            variants={bounceDown}
            custom={6}
            className="footer-contacts-form__title"
          >
            Newslatter
          </motion.p>
          <form
            id="contactForm"
            action="send.php"
            method="post"
            className="footer-contacts-form"
          >
            <motion.input
              variants={bounceUp}
              custom={8}
              type="text"
              id="mail"
              name="user_mail"
              placeholder="Email address"
              required
              className="footer-contacts-form__input"
            />
            <motion.button
              variants={bounce}
              custom={10}
              type="submit"
              value="Send"
              className="footer-contacts-form__btn"
            >
              SUBSCRIBE
            </motion.button>
          </form>
        </article>
      </section>
      <article className="footer-copyright">
        <motion.p
          variants={bounceUp}
          custom={12}
          className="footer-copyright__title"
        >
          © 2023.<span>Allen</span> All rights reserved.
        </motion.p>
      </article>
    </motion.footer>
  );
}

export default Footer;
