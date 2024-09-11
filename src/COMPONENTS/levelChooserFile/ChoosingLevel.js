import React, { useEffect, useState } from "react";
import "./ChoosingLevel.css";
import { ReactReduxContext } from "react-redux";
import SpinnerComponent from "../Spinner_Component/SpinnerComponent";
import { useNavigate } from "react-router-dom";
import TitleComponent from "../title_Component/TitleComponent";
import BackButton from "../Button_Component/backButton/backButton";
import { motion } from "framer-motion";
function ChoosingLevel() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 1500);
  }, []);
  if (loader) {
    return (
      <div id="backGroundForLevel">
        <BackButton
          content={"back"}
          onClick={() => navigate("/home")}
          style={{ position: "absolute", top: "10px", left: "10px" }}
        />
        <div id="level-container">
          <div
            className="levelTypeOfDiv"
            onClick={() => navigate("/select-level/beginner")}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              Beginner
            </motion.h1>
            <motion.img
                            variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              src="https://cdn-icons-png.flaticon.com/128/8243/8243698.png"
              width={50}
              alt="begginer"
            />
          </div>
          <div
            className="levelTypeOfDiv"
            onClick={() => navigate("/select-level/intermediate")}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              Intermediate
            </motion.h1>
            <motion.img
                            variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              src="https://cdn-icons-png.flaticon.com/128/7922/7922199.png"
              width={50}
              alt="Intermediate"
            />
          </div>
          <div
            className="levelTypeOfDiv"
            onClick={() => navigate("/select-level/advanced")}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Advanced
            </motion.h1>
            <motion.img
                            variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              src="https://cdn-icons-png.flaticon.com/128/2548/2548492.png"
              width={50}
              alt="Advance"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <SpinnerComponent style={{ height: "100vh" }} />;
  }
}

export default ChoosingLevel;
