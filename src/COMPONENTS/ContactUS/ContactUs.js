import React, { useRef } from "react";
import "./contactus.css";
import { motion } from "framer-motion";
function ContactUs(props) {
  const { style, id } = props;
  const form = useRef();
  const SubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      id={id}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration:1 }}
        className="form-container"
      >
        <div className="form" ref={form}>
          <div className="form-group">
            <p>CONTACT US</p>
            <label htmlFor="email">Email address</label>
            <input required name="email" id="email" type="email"></input>
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea
              required
              cols="50"
              rows="10"
              id="textarea"
              name="textarea"
            ></textarea>
          </div>
          <button
            type="submit"
            className="form-submit-btn"
            onClick={SubmitHandler}
          >
            Submit
          </button>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.301802724667!2d78.39954787369209!3d17.493100799754036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91625d9cd1ad%3A0x4455387ad24a675d!2s10000coders!5e0!3m2!1sen!2sin!4v1725454178850!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </motion.div>
    </div>
  );
}

export default ContactUs;
