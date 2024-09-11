import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./workoutDetails.css";
import { motion } from "framer-motion";
import SpinnerComponent from "../Spinner_Component/SpinnerComponent";
function WorkoutDetails() {
  const [selectedMuscleGroup, setSelection] = useState([]);
  const dispatch = useDispatch();
  const ReduxStoreData = useSelector((each) => each.ApiDataReducer);
  const SelectedMuscleData = useSelector((each) => each.selectedMuscle);
  var params = useRef();
  params = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    let data = ReduxStoreData.filter((each) => {
      if (
        each.bodyPart
          .toLowerCase()
          .includes(params.workoutName.toLowerCase()) ||
        each.target.toLowerCase().includes(params.workoutName.toLowerCase())
      ) {
        return each.target;
      }
    });
    dispatch({
      type: "selectedMuscle",
      package: removeDuplicates(data.map((each) => each.target)),
    });
  }, [ReduxStoreData]);
  const selectionHandler = (each) => {
    if (selectedMuscleGroup.includes(each)) {
      setSelection(selectedMuscleGroup.filter((e) => e !== each));
      document.getElementById(each).style.backgroundColor = "transparent";
      document.getElementById(each).style.border = "1px solid white";
    } else {
      setSelection([...selectedMuscleGroup, each]);
      document.getElementById(each).style.backgroundColor = "#ffc506";
      document.getElementById(each).style.border = "1px solid transparent";
    }
  };
  // useEffect(() => {
  //   if (SelectedMuscleData.length !== 0) {
  //     localStorage.setItem(
  //       "SelectedMuscleData",
  //       JSON.stringify(SelectedMuscleData)
  //     );
  //   }
  // }, [SelectedMuscleData]);
  const NextButtonHandler = () => {
    if (selectedMuscleGroup.length === 0) {
      document.getElementById("warning").style.display = "block";
    } else {
      localStorage.setItem(
        "selectedMuscleArray",
        JSON.stringify(selectedMuscleGroup)
      );
      dispatch({
        type: "selectedWorkoutMuscleList",
        package: selectedMuscleGroup,
      });
      navigate(`/exercises-types/equipment`);
    }
  };
  return (
    <div id="selected-muscle-background">
      {SelectedMuscleData.length > 0 ? (
        <div id="selected-muscle-card">
          <div>
            <p id="titleForMuscleGroup">Target Muscles</p>
            <div id="GroupOfPTAGS">
              {SelectedMuscleData.map((each, index) => {
                return (
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    style={{ margin: "0" }}
                    key={each}
                    id={each}
                    onClick={() => selectionHandler(each)}
                  >
                    {each}
                  </motion.p>
                );
              })}
            </div>
          </div>
          <p id="warning">select atleast one option !</p>
          <div id="buttonDiv">
            <button id="buttonPrevious" onClick={() => window.history.back()}>
              <p>PREVIOUS</p>
            </button>
            <button id="buttonNext" onClick={NextButtonHandler}>
              <p>NEXT</p>
            </button>
          </div>
        </div>
      ) : (
        <SpinnerComponent />
      )}
    </div>
  );
}

export default WorkoutDetails;

function removeDuplicates(arr) {
  let unique = [];
  arr.every((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
    return true;
  });
  return unique;
}
