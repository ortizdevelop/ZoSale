import { motion } from "framer-motion";

// Styles
import styles from "./Header.module.css";

// Images

import logo from "./image/Logo.png";
import image from "./image/Designs.png";
import arrow from "./image/shape.png";
import rate from "./image/text.png";
import shapes from "./image/shapes.png";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_column}>
          <li className={styles.navbar_list}>
            <a href="#s">
              <img className={styles.navbar_image} src={logo} alt="" />
            </a>
          </li>
          <li className={styles.navbar_list}>
            <a href="#s" className={styles.navbar_link}>
              <span>Demos</span>
            </a>
          </li>
          <li className={styles.navbar_list}>
            <a href="#s" className={styles.navbar_link}>
              <span>About</span>
            </a>
          </li>
          <li className={styles.navbar_list}>
            <a href="#s" className={styles.navbar_link}>
              <span>Blog</span>
            </a>
          </li>
          <li className={styles.navbar_list}>
            <a href="#s" className={styles.navbar_link}>
              <span>Pages</span>
            </a>
          </li>
          <li className={styles.navbar_list}>
            <a href="#s" className={styles.navbar_link}>
              <span>Contact</span>
            </a>
          </li>
        </ul>
        <article className={styles.navbar_buttons}>
          <button className={styles.navbar_button}>Sign In</button>
          <button className={styles.navbar_button}>Get Started Free</button>
        </article>
      </nav>
      <div className={styles.content}>
        <article className={styles.image}>
          <img src={image} alt="" />
        </article>
        <article className={styles.info}>
          <img className={styles.arrow} src={arrow} alt="" />
          <div>
            <p className={styles.title}>
              Create Beautiful Apps Using Drag & Drop
            </p>
            <p className={styles.subtitle}>
              With Loopple, you can build your next Bootstrap Dashboard easily
              using drag and drop.
            </p>
          </div>
          <div>
            <button className={styles.buttons}>
              <span>Try For Free</span>
            </button>
            <button className={styles.buttons}>
              <span>Watch Video</span>
            </button>
          </div>
          <img className={styles.rate} src={rate} alt="" />
        </article>
        <article className={styles.shapes}>
          <img src={shapes} alt="" />
        </article>
      </div>
      <article className={styles.banner}>
        <p>
          100+ Trusted Partners ------- Google . Facebook . Insta . Dribbble .
          Fundbox . Segment
        </p>
      </article>
    </header>
  );
}

export default Header;
