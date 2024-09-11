import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./selectedWorkoutList.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function SelectedWorkoutsList() {
  const navigate = useNavigate();
  const [filteredCardData, setFilteredData] = useState([]);
  const exercisesFullData = useSelector((each) => each);
  console.log(exercisesFullData);
  useEffect(() => {
    const newDataArray = [];
    for (let i of exercisesFullData.ApiDataReducer) {
      if (
        exercisesFullData.equipmentSelection.includes(i.equipment) &&
        exercisesFullData.selectedWorkoutMuscleList.includes(i.target)
      ) {
        newDataArray.push(i);
      }
    }
    setFilteredData(newDataArray);
  }, []);
  console.log(filteredCardData);
  return (
    <div id="selectedWorkoutList-body">
      <div id="selectedWorkoutList-nav">
        <p id="titlefor-selectedWorkoutList">filtered Results</p>
        <div id="selectedWorkoutList-nav-button-list">
          <button
            className="selectedWorkoutList-nav-buttons"
            onClick={() => window.history.go(-2)}
          >
            <p>PREVIOUS PAGE</p>
          </button>
          <button
            className="selectedWorkoutList-nav-buttons"
            onClick={() => window.history.go(-3)}
          >
            <p>CATEGORY</p>
          </button>
          <button className="selectedWorkoutList-nav-buttons">
            <p>REPORT BUG</p>
          </button>
          <button
            className="selectedWorkoutList-nav-buttons"
            onClick={() => navigate("/home")}
          >
            <p>BACK TO HOME</p>
          </button>
        </div>
      </div>
      {filteredCardData.length > 0 ? (
        <div id="cardsContainer">
          {filteredCardData.map((each, index) => {
            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="selectedWorkoutList-card"
                onClick={() => navigate(`/selected-exercises/${each.id}`)}
              >
                <div className="cardTopData">
                  <p className="cardTitle">{each.name}</p>
                  <p className="subCardData">
                    <span style={{ fontWeight: "600" }}>Target muscle :</span>
                    {` ${each.secondaryMuscles} `}
                  </p>
                  <p className="subCardData">
                    <span style={{ fontWeight: "600" }}>Equipment :</span>
                    {` ${each.equipment} `}
                  </p>
                  <p className="subCardData">
                    <span style={{ fontWeight: "600" }}>Body part :</span>
                    {` ${each.bodyPart} `}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div id="warningOfEmptyData">
          <p>
            Something went wrong Please press {"[ PREVIOUS PAGE ]"} Button !
          </p>
        </div>
      )}
    </div>
  );
}

export default SelectedWorkoutsList;
