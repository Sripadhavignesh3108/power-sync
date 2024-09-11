import React from "react";
import "./SubcribePackage.css";
import premium from "../../Assets/king.png";
import standard from "../../Assets/star.png";
import simple from "../../Assets/person.png";
import right from "../../Assets/right.png";
import wrong from "../../Assets/cross.png";
import { motion } from "framer-motion";
export default function SubcribePackage(props) {
  const { style } = props;
  return (
    <div id="subscribe-background" style={style}>
      <div className="each-packages-of-subscribe">
        <motion.img
          variants={{
            hidden: { opacity: 0, rotateY: "180deg" },
            visible: { opacity: 1, rotateY: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          src={simple}
          alt="simple"
          className="titleImage"
        />
        <h1>SIMPLE</h1>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="right" />
          <p>Access to 500+ workout types</p>
        </div>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="right" />
          <p>Customized Workout options</p>
        </div>
        <div className="subscibeOptions">
          <img src={wrong} className="wrong" alt="right" />
          <p>Timer Based Workouts</p>
        </div>
        <div className="subscibeOptions">
          <img src={wrong} className="wrong" alt="wrong" />
          <p>Personal coach Guidance</p>
        </div>
        <div className="subscibeOptions">
          <img src={wrong} className="wrong" alt="wrong" />
          <p>24/7 customer support </p>
        </div>
        <div className="subscibeOptions">
          <img src={wrong} className="wrong" alt="wrong" />
          <p>One to one trainer interaction</p>
        </div>
        <h3 className="price">0$ / MONTH</h3>
      </div>
      <div className="each-packages-of-subscribe">
        <motion.img
          variants={{
            hidden: { opacity: 0, rotateY: "180deg" },
            visible: { opacity: 1, rotateY: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          src={premium}
          alt="standard"
          className="titleImage"
        />
        <h1>PREMIUM</h1>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="right" />
          <p>Access to 1300+ workout types</p>
        </div>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="right" />
          <p>Customized Workout options</p>
        </div>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="right" />
          <p>Timer Based Workouts</p>
        </div>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="wrong" />
          <p>Personal coach Guidance</p>
        </div>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="wrong" />
          <p>24/7 customer support </p>
        </div>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="wrong" />
          <p>One to one trainer interaction</p>
        </div>
        <h3 className="price">49$ / MONTH</h3>
      </div>
      <div className="each-packages-of-subscribe">
        <motion.img
          variants={{
            hidden: { opacity: 0, rotateY: "180deg" },
            visible: { opacity: 1, rotateY: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          src={standard}
          alt="standard"
          className="titleImage"
        />
        <h1>STANDARD</h1>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="right" />
          <p>Access to 900+ workout types</p>
        </div>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="right" />
          <p>Customized Workout options</p>
        </div>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="right" />
          <p>Timer Based Workouts</p>
        </div>
        <div className="subscibeOptions">
          <img src={right} className="right" alt="wrong" />
          <p>Personal coach Guidance</p>
        </div>
        <div className="subscibeOptions">
          <img src={wrong} className="wrong" alt="wrong" />
          <p>24/7 customer support </p>
        </div>
        <div className="subscibeOptions">
          <img src={wrong} className="wrong" alt="wrong" />
          <p>One to one trainer interaction</p>
        </div>
        <h3 className="price">29$ / MONTH</h3>
      </div>
    </div>
  );
}
