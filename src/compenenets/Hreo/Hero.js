import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter"
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile=window.innerWidth <= 768 ?true : false;
  return (
    <div className="hero"id="home">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
        {/* the best btn*/}
        <div className="thebest-add">
          <motion.div
            initial={{ left: mobile?"168px":"238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text"> shape </span>
            <span>your</span>
          </div>

          <div>
            <span>I deal body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up
            </span>
          </div>
        </div>
        {/* figures*/}
        <div className="figeures">
          <div>
            <span>
              <NumberCounter end={140} start={100} preFix="+" delay="4"/>
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>             <NumberCounter end={978} start={800} preFix="+" delay="4"/>
</span>
            <span>member</span>
          </div>
          <div>
            <span>              <NumberCounter end={50} start={0} preFix="+" delay="4"/>
 </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/*btn-hero*/}
        <div className="hero-button">
          <button className="btn">get started</button>
          <button className="btn">learn more</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">join now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "5rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span> 55 bbm<span></span>
        </motion.div>
        <img src={hero_image} className="hero-image" alt="" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          className="hero-image-back"
          alt=""
        />
        {/* calories*/}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories </span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
