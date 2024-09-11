import React from "react";
import "./occupyingButton.css";
import { motion } from "framer-motion";

function OccupyingButton(prop) {
  const { content, style, onClick } = prop;
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -120 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <button style={style} className="occupyingButtonStyle" onClick={onClick}>
        {content}
      </button>
    </motion.div>
  );
}

export default OccupyingButton;
