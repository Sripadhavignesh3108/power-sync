import React from "react";
import "./TitleComponent.css";
import { motion } from "framer-motion";
function TitleComponent(props) {
  const { content, style } = props;
  return (
    <div id="TitleData" style={style}>
      <motion.h1
        variants={{
          hidden: { opacity: 0, x: "-50%" },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {content}
      </motion.h1>
      <motion.h1
        variants={{
          hidden: { opacity: 0, x: "100%" },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {content}
      </motion.h1>
    </div>
  );
}

export default TitleComponent;
