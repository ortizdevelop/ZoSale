// Libraries
import { motion } from "framer-motion";

// CSS Styles
import "./css/about.css";

// Images
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import rate from "./images/rate.png";

function About() {
  return (
    <section className="about">
      <article className="about-title">
        <p className="about-title__title">
          2,157 people have said how good Rareblocks
        </p>
        <p className="about-title__subtitle">Our happy clients say about us</p>
      </article>
      <article className="about-clients">
        <ul className="about-clients__column">
          <li className="about-clients__item">
            <img src={rate} alt="" className="about-clients__rate" />
            <p className="about-clients__text">
              “You made it so simple. My new site is so much faster and easier
              to work with than my old site. I just choose the page, make the
              change.”
            </p>
            <div className="about-clients__profile">
              <img src={pic1} alt="" className="about-clients__picture" />
              <div className="about-clients__profile-info">
                <p className="about-clients__name">Leslie Alexander</p>
                <p className="about-clients__position">Founder</p>
              </div>
            </div>
          </li>
          <li className="about-clients__item">
            <img src={rate} alt="" className="about-clients__rate" />
            <p className="about-clients__text">
              “Simply the best. Better than all the rest. I’d recommend this
              product to beginners and advanced users.”
            </p>
            <div className="about-clients__profile">
              <img src={pic2} alt="" className="about-clients__picture" />
              <div className="about-clients__profile-info">
                <p className="about-clients__name">Jacob Jones</p>
                <p className="about-clients__position">Co-Founder</p>
              </div>
            </div>
          </li>
          <li className="about-clients__item">
            <img src={rate} alt="" className="about-clients__rate" />
            <p className="about-clients__text">
              “I cannot believe that I have got a brand new landing page after
              getting Omega. It was super easy to edit and faster and easier to
              work.”
            </p>
            <div className="about-clients__profile">
              <img src={pic3} alt="" className="about-clients__picture" />
              <div className="about-clients__profile-info">
                <p className="about-clients__name">Jenny Wilson</p>
                <p className="about-clients__position">
                  Chief Marketing Officer
                </p>
              </div>
            </div>
          </li>
        </ul>
      </article>
      <article className="about-check">
        <p className="about-check__title">Check all 2,157 reviews</p>
      </article>
    </section>
  );
}

export default About;
