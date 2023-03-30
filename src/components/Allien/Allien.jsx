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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.2,
          once: true,
        }}
        className="allien__inner"
      >
        <article className="allien-top">
          <motion.img
            variants={bounceDown}
            custom={1}
            src={img1}
            alt=""
            className="allien-top__img"
          />
          <ul className="allien-top__column">
            <motion.li
              variants={fadeRight}
              custom={2}
              className="allien-top__item"
            >
              <p className="allien-top__title">
                Allien uses a modern server-side templating languages
              </p>
            </motion.li>
            <motion.li
              variants={fadeRight}
              custom={3}
              className="allien-top__item"
            >
              <p className="allien-top__subtitle">
                Here are some templating languages that you can use, with little
                code snippets to show you how to work and what makes them unique
                & the modern server-side templating language renders directly/
              </p>
            </motion.li>
            <motion.li
              variants={bounceUp}
              custom={4}
              className="allien-top__item"
            >
              <button className="allien-top__button">
                <span>Try For Free</span>
              </button>
            </motion.li>
          </ul>
        </article>
        <article className="allien-bottom">
          <div>
            <motion.p
              variants={bounceDown}
              custom={5}
              className="allien-bottom__title"
            >
              Build a website based on your requirement
            </motion.p>
            <div className="allien-bottom__img-and-desc">
              <motion.img
                variants={bounce}
                custom={7}
                src={img2}
                alt=""
                className="allien-bottom__img"
              />
              <motion.p
                variants={bounceUp}
                custom={6}
                className="allien-bottom__desc"
              >
                Whatever you’re building, Sark has covered. With convenient,
                out-of-the-box features & even more ready-to-use integrations,
                Sark has everything that you need to build.
              </motion.p>
            </div>
          </div>
          <div>
            <ul className="allien-bottom__column">
              <motion.li
                variants={bounceDown}
                custom={8}
                className="allien-bottom__item"
              >
                <p className="allien-bottom__text">
                  Full webflow CMS integration
                </p>
              </motion.li>
              <motion.li
                variants={bounceDown}
                custom={9}
                className="allien-bottom__item"
              >
                <p className="allien-bottom__text">
                  Includes advanced UI elements
                </p>
              </motion.li>
              <motion.li
                variants={bounceDown}
                custom={10}
                className="allien-bottom__item"
              >
                <p className="allien-bottom__text">
                  Any block can be easily customized
                </p>
              </motion.li>
            </ul>
          </div>
        </article>
      </motion.div>
    </section>
  );
}

export default Allien;
