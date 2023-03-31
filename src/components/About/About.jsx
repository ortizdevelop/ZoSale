// Libraries
import { motion } from "framer-motion";

// CSS Styles
import "./css/about.css";

// Images
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import rate from "./images/rate.png";

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

const bounceDownOp = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: (time) => ({
    opacity: 0.6,
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

function About() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.2,
        once: true,
      }}
      className="about"
      variants={bounce}
      custom={1}
    >
      <article className="about-title">
        <motion.p
          variants={bounceDownOp}
          custom={4}
          className="about-title__title"
        >
          2,157 people have said how good Rareblocks
        </motion.p>
        <motion.p
          variants={bounceDown}
          custom={5}
          className="about-title__subtitle"
        >
          Our happy clients say about us
        </motion.p>
      </article>
      <article className="about-clients">
        <ul className="about-clients__column">
          <motion.li
            variants={fadeLeft}
            custom={8}
            className="about-clients__item"
          >
            <motion.img
              variants={bounceDown}
              custom={9}
              src={rate}
              alt=""
              className="about-clients__rate"
            />
            <motion.p
              variants={bounceDown}
              custom={10}
              className="about-clients__text"
            >
              “You made it so simple. My new site is so much faster and easier
              to work with than my old site. I just choose the page, make the
              change.”
            </motion.p>
            <div className="about-clients__profile">
              <motion.img
                variants={bounceDown}
                custom={11}
                src={pic1}
                alt=""
                className="about-clients__picture"
              />
              <div className="about-clients__profile-info">
                <motion.p
                  variants={bounceDown}
                  custom={12}
                  className="about-clients__name"
                >
                  Leslie Alexander
                </motion.p>
                <motion.p
                  variants={bounceDown}
                  custom={13}
                  className="about-clients__position"
                >
                  Founder
                </motion.p>
              </div>
            </div>
          </motion.li>
          <motion.li
            variants={bounce}
            custom={7}
            className="about-clients__item"
          >
            <motion.img
              variants={bounceDown}
              custom={8}
              src={rate}
              alt=""
              className="about-clients__rate"
            />
            <motion.p
              variants={bounceDown}
              custom={9}
              className="about-clients__text"
            >
              “Simply the best. Better than all the rest. I’d recommend this
              product to beginners and advanced users.”
            </motion.p>
            <div className="about-clients__profile">
              <motion.img
                variants={bounceDown}
                custom={11}
                src={pic2}
                alt=""
                className="about-clients__picture"
              />
              <div className="about-clients__profile-info">
                <motion.p
                  variants={bounceDown}
                  custom={12}
                  className="about-clients__name"
                >
                  Jacob Jones
                </motion.p>
                <motion.p
                  variants={bounceDown}
                  custom={13}
                  className="about-clients__position"
                >
                  Co-Founder
                </motion.p>
              </div>
            </div>
          </motion.li>
          <motion.li
            variants={fadeRight}
            custom={9}
            className="about-clients__item"
          >
            <motion.img
              variants={bounceDown}
              custom={10}
              src={rate}
              alt=""
              className="about-clients__rate"
            />
            <motion.p
              variants={bounceDown}
              custom={11}
              className="about-clients__text"
            >
              “I cannot believe that I have got a brand new landing page after
              getting Omega. It was super easy to edit and faster and easier to
              work.”
            </motion.p>
            <div className="about-clients__profile">
              <motion.img
                variants={bounceDown}
                custom={12}
                src={pic3}
                alt=""
                className="about-clients__picture"
              />
              <div className="about-clients__profile-info">
                <motion.p
                  variants={bounceDown}
                  custom={13}
                  className="about-clients__name"
                >
                  Jenny Wilson
                </motion.p>
                <motion.p
                  variants={bounceDown}
                  custom={14}
                  className="about-clients__position"
                >
                  Chief Marketing Officer
                </motion.p>
              </div>
            </div>
          </motion.li>
        </ul>
      </article>
      <article className="about-check">
        <p className="about-check__title">Check all 2,157 reviews</p>
      </article>
    </motion.section>
  );
}

export default About;
