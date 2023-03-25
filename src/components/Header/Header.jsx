// Styles
import styles from "./Header.module.css";

// Images

import logo from "./image/Logo.png";

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
    </header>
  );
}

export default Header;
