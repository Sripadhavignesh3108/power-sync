import React, { useEffect, useRef, useState } from "react";
import logo from "../Assets/logo.png";
import OccupyingButton from "../COMPONENTS/Button_Component/OccupyingButton";
import TitleComponent from "../COMPONENTS/title_Component/TitleComponent";
import WorkoutOptions from "../COMPONENTS/workoutOptions/WorkoutOptions";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ContactUs from "../COMPONENTS/ContactUS/ContactUs";
import "./homePage.css";
import {
  inViewAnimationVariants,
  inViewAnimationVariantsforVideoTag,
} from "../animationVariants/animationVariants";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SubcribePackage from "../COMPONENTS/subscribePackages/SubcribePackage";
function Homepage() {
  const [hambergerOption, setHamberger] = useState(false);
  const navigate = useNavigate();
  const hamberger = useRef(null);
  const coachEnterHandler = (dataid, index) => {
    document.getElementById(dataid).style.opacity = "1";
    document.getElementsByTagName("hr")[index].style.width = "80%";
  };
  const coachLeaveHandler = (dataid, index) => {
    document.getElementById(dataid).style.opacity = "0";
    document.getElementsByTagName("hr")[index].style.width = "0%";
  };
  useEffect(
    () => {
      if (hambergerOption) {
        document.getElementById("hamberger").style.transform =
          "translateY(0px)";
      } else {
        document.getElementById("hamberger").style.transform =
          "translateY(-500px)";
      }
    },
    [hambergerOption],
    []
  );

  return (
    <div id="home-page-body">
      <div id="Home-page-top-Body">
        <nav>
          <motion.img
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            src={logo}
            alt="logo"
            id="homePage-logo"
          />
          <motion.div id="navbar-options">
            <AnchorLink href="#Home-page-top-Body">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="optionsBtn"
              >
                HOME
              </motion.p>
            </AnchorLink>
            <AnchorLink href="#about-power-sync-videos">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="optionsBtn"
              >
                ABOUT
              </motion.p>
            </AnchorLink>
            <AnchorLink href="#coach-data">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="optionsBtn"
              >
                TRAINERS
              </motion.p>
            </AnchorLink>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="optionsBtn"
              onClick={() => navigate("/exercises-types")}
            >
              EXERCISES
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="optionsBtn"
              onClick={() => navigate("/BMIcalculator")}
            >
              BMI CHECK
            </motion.p>
            <AnchorLink href="#contactUs">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="optionsBtn"
              >
                CONTACT
              </motion.p>
            </AnchorLink>
            {/* <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="optionsBtn"
            >
              LOGIN
            </motion.p> */}
            <AnchorLink href="#subscribe-background">
              <motion.button
                id="SubscribeBtn"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                transition={{ delay: 1.3 }}
                whileInView="visible"
                viewport={{ once: true }}
              ></motion.button>
            </AnchorLink>
          </motion.div>
          <input
            type="checkbox"
            id="checkbox"
            onClick={() => setHamberger(!hambergerOption)}
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
          <div id="hamberger" ref={hamberger}>
            <p aria-disabled></p>
            <AnchorLink href="#Home-page-top-Body">
              <p>HOME</p>
            </AnchorLink>
            <AnchorLink href="#about-power-sync-videos">
              <p>ABOUT</p>
            </AnchorLink>
            <AnchorLink href="#coach-data">
              <p>TRAINERS</p>
            </AnchorLink>
            <p onClick={() => navigate("/exercises-types")}>EXERCISES</p>
            <p onClick={() => navigate("/BMIcalculator")}>BMI CHECK</p>
            <AnchorLink href="#contactUs">
              <p>CONTACT</p>
            </AnchorLink>
            <div
              style={{
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AnchorLink href="#subscribe-background">
                <button id="SubscribeBtn"></button>
              </AnchorLink>
            </div>
          </div>
        </nav>
        <header id="beggining-Motive">
          <motion.h1
            variants={inViewAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            THE ONLY <span>IMPOSSIBLE JOURNEY</span> IS THE ONE YOU{" "}
            <span>NEVER BEGIN</span>
          </motion.h1>
          <OccupyingButton
            content="BEGIN YOUR JOURNEY"
            style={{
              paddingLeft: "28px",
              paddingRight: "28px",
              margin: "10px 0px 30px 0px",
              fontSize: "14px",
            }}
            onClick={() => navigate("/select-level")}
          />
        </header>
      </div>
      {/* ABOUT BODY OF POWER SYNC */}
      <div id="about-power-sync">
        <div id="about-Data">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            with the guidance of<span> world-class trainers</span> and{" "}
            <span>innovative</span> workout programs and
            <span> real-time feedback</span> help you achieve your goals by
            <span> syncing mind</span> and <span>body</span> for maximum{" "}
            <span>efficiency </span>
            and results
          </motion.p>
        </div>
      </div>
      {/* DUMMY coaches List */}
      <div id="about-info-sticky-data">
        <div id="about-power-sync-videos">
          <TitleComponent
            content="POWER SYNC"
            style={{ margin: "30px 0px 20px 0px" }}
          />
          <div className="video-data-about-powersync">
            <motion.video
              variants={inViewAnimationVariantsforVideoTag}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="about-video-tag"
              src={
                "https://videos.pexels.com/video-files/4438080/4438080-hd_1920_1080_25fps.mp4"
              }
              autoPlay
              loop
              muted
            />
            <motion.h3
              className="about-power-sync-videos-h1"
              variants={inViewAnimationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span>POWER SYNC</span> offers a wide range of
              <span> workout categories,</span> including strength training,
              <span> boxing , cardio,</span> flexibility ,<span>yoga,</span>{" "}
              HIIT,
              <span>and more.</span>
            </motion.h3>
          </div>
          <div className="video-data-about-powersync">
            <motion.h3
              variants={inViewAnimationVariantsforVideoTag}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="about-power-sync-videos-h1"
            >
              <span>POWER SYNC</span> offers over <span>1,300+ workouts, </span>
              categorizing to various fitness levels and<span> goals.</span>
            </motion.h3>
            <motion.video
              variants={inViewAnimationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="about-video-tag"
              src={
                "https://videos.pexels.com/video-files/5319438/5319438-sd_640_360_25fps.mp4"
              }
              autoPlay
              loop
              muted
            />
          </div>
          <div className="video-data-about-powersync">
            <motion.video
              variants={inViewAnimationVariantsforVideoTag}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="about-video-tag"
              src={
                "https://videos.pexels.com/video-files/5319759/5319759-uhd_2560_1440_25fps.mp4"
              }
              autoPlay
              loop
              muted
            />
            <motion.h3
              variants={inViewAnimationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="about-power-sync-videos-h1"
            >
              <span>Users</span> can access customized{" "}
              <span>workout plans </span>
              tailored to their specific <span>fitness needs and goals.</span>
            </motion.h3>
          </div>
          <div className="video-data-about-powersync">
            <motion.h3
              variants={inViewAnimationVariantsforVideoTag}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="about-power-sync-videos-h1"
            >
              The platform include<span> tips and guidance</span> from
              <span> fitness experts</span> to ensure users perform
              <span> exercises correctly</span> and safely
            </motion.h3>
            <motion.video
              variants={inViewAnimationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="about-video-tag"
              src={
                "https://videos.pexels.com/video-files/5319099/5319099-uhd_2560_1440_25fps.mp4"
              }
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <div id="coach-data">
          <TitleComponent
            content="MEET THE TEAM"
            style={{ margin: "60px 0px 40px 0px" }}
          />
          <div id="coachesList">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="coaches"
              onMouseLeave={() => coachLeaveHandler("CoachInsideData1", 0)}
              onMouseEnter={() => coachEnterHandler("CoachInsideData1", 0)}
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="coachInsideData"
                id="CoachInsideData1"
              >
                <p>ELOISE BANKS</p>
                <hr />
                <p>WOMEN COACH</p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="coaches"
              onMouseLeave={() => coachLeaveHandler("CoachInsideData2", 1)}
              onMouseEnter={() => coachEnterHandler("CoachInsideData2", 1)}
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="coachInsideData"
                id="CoachInsideData2"
              >
                <p>TOM DOWNEY</p>
                <hr />
                <p>MEN'S PHYSIQUE COACH</p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="coaches"
              onMouseLeave={() => coachLeaveHandler("CoachInsideData3", 2)}
              onMouseEnter={() => coachEnterHandler("CoachInsideData3", 2)}
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="coachInsideData"
                id="CoachInsideData3"
              >
                <p>CHIRS DUTCHMAN</p>
                <hr />
                <p>MEN'S COACH</p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="coaches"
              onMouseLeave={() => coachLeaveHandler("CoachInsideData4", 3)}
              onMouseEnter={() => coachEnterHandler("CoachInsideData4", 3)}
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="coachInsideData"
                id="CoachInsideData4"
              >
                <p>BRYAN HUNTER</p>
                <hr />
                <p>MEN'S BODY BUILDER </p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="coaches"
              onMouseLeave={() => coachLeaveHandler("CoachInsideData5", 4)}
              onMouseEnter={() => coachEnterHandler("CoachInsideData5", 4)}
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="coachInsideData"
                id="CoachInsideData5"
              >
                <p>GWEN STACY</p>
                <hr />
                <p>FITNESS AND STRENGHT</p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="coaches"
              onMouseLeave={() => coachLeaveHandler("CoachInsideData6", 5)}
              onMouseEnter={() => coachEnterHandler("CoachInsideData6", 5)}
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="coachInsideData"
                id="CoachInsideData6"
              >
                <p>RAHUL TRIPATI</p>
                <hr />
                <p>PERSONAL TRAINER</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div id="workout-categories">
          <WorkoutOptions style={{ marginTop: "40px" }} />
        </div>
        <TitleComponent
          content="PLANS & PACKAGES "
          style={{ margin: "60px 0px 40px 0px" }}
        />
        <SubcribePackage />

        <ContactUs style={{ padding: "100px 0px" }} id="contactUs" />
        <div>
          <div id="social-media">
            <h2>SOCIAL MEDIA PLATFORMS</h2>
            <motion.hr
              className="hrTag"
              variants={{
                hidden: { width: 0 },
                visible: { width: "320px" },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <div className="socialMediaGroup">
              <button className="button">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-800 dark:text-white"
                >
                  <path
                    clipRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    fillRule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button className="button">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-800 dark:text-white"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    fillRule="evenodd"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button className="button">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-800 dark:text-white"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="button">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-800 dark:text-white"
                >
                  <path
                    clipRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="button">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-800 dark:text-white"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div id="footer">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              POWER SYNC is a ad-free and product placement free global fitness
              resource. POWER SYNC is supported exclusively via user donations.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              style={{ lineHeight: "24px" }}
            >
              © 2024 - 2030 POWER SYNC | All Rights Reserved. This website uses
              Cookies. Disclaimer & Privacy Policy.
              <br /> All of the materials on this website are unique,
              copyrighted and are exclusive to powersync.com.
            </motion.p>
            <div className="footerOptions">
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0 }}
              >
                Workout Videos
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Custom Workouts
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Workout Programs
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                Meal Plans
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                Pilot Programs
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
              >
                Routines
              </motion.span>
            </div>
            <div className="footerOptions">
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Help Center
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                About Us
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Account Login
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                Returns & Exchanges
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                Contact Us
              </motion.span>
            </div>
            <div className="footerOptions">
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0 }}
              >
                Privacy Policy
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Non-Discrimination Statement
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Civil Rights Policy
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                Information Quality
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                Policies and Links
              </motion.span>
            </div>
            <p>
              Please Contact us <b>@</b> for an Queries "
              <a href="mailto:sripadhavignesh.dev@gmail.com">
                <strong>sripadhavignesh.dev@gmail.com</strong>
              </a>
              "
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
