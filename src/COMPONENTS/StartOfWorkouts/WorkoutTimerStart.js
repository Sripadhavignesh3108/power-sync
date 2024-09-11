import React, { useEffect, useRef, useState } from "react";
import "./startOfWorkouts.css";
import SpinnerComponent from "../Spinner_Component/SpinnerComponent";
import useCountDown from "../customHooks/useCountDownHook";
import BackButton from "../Button_Component/backButton/backButton";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

function WorkoutTimerStart() {
  const [filteredData, setFilteredData] = useState([]);
  const [workoutCompleted, setWorkoutCompleted] = useState([]);
  const [secondsLeft, start] = useCountDown();
  const [workoutNumber, setWorkoutNumber] = useState(0);
  const inputRef = useRef(0);
  const [resetHandler, setReset] = useState(0);
  const navigate = useNavigate();
  //   const AllexerciseData = useSelector((each) => each.ApiDataReducer);
  useEffect(() => {
    let arrayOfStrings = [];
    let filteredArrayOfWorkouts = [];
    let data = JSON.parse(localStorage.getItem("filterdDataBasedOnLevel"));
    for (let i of data) {
      if (!arrayOfStrings.includes(i.equipment)) {
        arrayOfStrings.push(i.equipment);
      }
    }
    for (let m of arrayOfStrings) {
      let count = 0;
      for (let n of data) {
        if (count <= 4) {
          if (m === n.equipment) {
            filteredArrayOfWorkouts.push(n);
            count++;
          }
        } else {
          break;
        }
      }
    }
    setFilteredData(filteredArrayOfWorkouts);
  }, []);
  const TimerStartHandler = () => {
    if (inputRef?.current?.value && secondsLeft === 0) {
      start(inputRef.current.value);
      document.getElementById(
        "WorkoutTimerStart-rightDiv-h1-div"
      ).style.animation = `rotation ${inputRef.current.value}s linear`;
      let warn = document.getElementById("warningPlace");
      warn.style.visibility = "hidden";
    } else {
      if (inputRef?.current?.value) {
        let warn = document.getElementById("warningPlace");
        warn.style.visibility = "visible";
        warn.innerHTML = "The time has already started , Begin you workout";
      } else {
        let warn = document.getElementById("warningPlace");
        warn.style.visibility = "visible";
        warn.innerHTML = "Please enter Time to Start.";
      }
    }
  };
  const ResetHandler = () => {
    start(0);
    let warning = document.getElementById("warningPlace");
    warning.style.visibility = "hidden";
  };
  const NextHandler = () => {
    if (workoutNumber < filteredData.length - 1 && secondsLeft === 0) {
      setWorkoutNumber(workoutNumber + 1);
      start(0);
      let warning = document.getElementById("warningPlace");
      warning.style.visibility = "hidden";
      document.getElementById("WorkoutTimerStart-rightDiv-h1").style.animation =
        "workoutCompletion 1s linear";
      document.getElementById(
        "WorkoutTimerStart-rightDiv-h1-div"
      ).style.animation = "workoutCompletion 1s linear";
      setTimeout(() => {
        document.getElementById(
          "WorkoutTimerStart-rightDiv-h1"
        ).style.animation = "none";
        document.getElementById(
          "WorkoutTimerStart-rightDiv-h1-div"
        ).style.animation = "none";
      }, 1000);
    } else {
      if (secondsLeft !== 0) {
        let warning = document.getElementById("warningPlace");
        warning.style.visibility = "visible";
        warning.innerText = "There is still time left complete the workout";
      } else {
        let comparedArray = [];
        let collectedArray = workoutCompleted.sort((a, b) => a - b);
        if (collectedArray.length < filteredData.length - 1) {
          for (let i = 0; i < filteredData.length - 1; i++) {
            if (!collectedArray.includes(i)) {
              comparedArray.push(i);
              console.log(i);
            }
          }
          console.log("not completed");
          let warn = document.getElementById("warningPlace");
          warn.style.visibility = "visible";
          warn.innerHTML = `Complete ${comparedArray} Numbered Workouts to Complete the Session`;
        } else {
          console.log("Congratulations")
          navigate("/celebrations-of-Completion")
        }
      }
    }
  };
  const previousHandler = () => {
    if (workoutNumber > 0 && secondsLeft === 0) {
      setWorkoutNumber(workoutNumber - 1);
      const warn = document.getElementById("warningPlace");
      warn.style.visibility = "hidden";
      start(0);
    } else {
      if (secondsLeft !== 0) {
        const warn = document.getElementById("warningPlace");
        warn.style.visibility = "visible";
        warn.innerHTML = "There is still time left to complete the workout ! ";
      } else {
        const warn = document.getElementById("warningPlace");
        warn.style.visibility = "visible";
        warn.innerHTML =
          "Looks like your are at FIRST workout , Press start ! ";
      }
    }
  };
  useEffect(() => {
    if (
      secondsLeft === 0 &&
      document.getElementById("WorkoutTimerStart-rightDiv-h1-div")
    ) {
      document.getElementById(
        "WorkoutTimerStart-rightDiv-h1-div"
      ).style.animation = "none";
      if (!workoutCompleted.includes(workoutNumber)) {
        setWorkoutCompleted([...workoutCompleted, workoutNumber]);
        confetti({
          particleCount: 400,
          spread: 1000,
          startVelocity: 30,
          scalar: 0.8,
          ticks: 100,
          gravity: 0,
          // drift: 3,
        });
      }
    }
  }, [secondsLeft]);
  console.log(workoutCompleted.sort((a, b) => a - b));

  return (
    <div style={{ backgroundColor: "rgb(252, 252, 252)" }}>
      <div id="WorkoutTimerStart-background">
        {filteredData.length > 0 ? (
          <>
            <div id="WorkoutTimerStart-leftDiv">
              <BackButton
                content={"BACK"}
                style={{
                  gap: "6px",
                  position: "absolute",
                  top: "5px",
                  left: "5px",
                  width: "74px",
                }}
                onClick={() => window.history.back()}
              />
              <img src={filteredData[workoutNumber].gifUrl} alt="img" />
              <h1>{filteredData[workoutNumber].name}</h1>
              <div id="bodyPart-target-equipment">
                <span>{filteredData[workoutNumber].bodyPart}</span>
                <span>{filteredData[workoutNumber].target}</span>
                <span>{filteredData[workoutNumber].equipment}</span>
              </div>
              <div id="secondaryMuscles">
                <span>secondary Muscles :</span>

                {filteredData[workoutNumber].secondaryMuscles.map((each) => {
                  return <li key={each}>{each}</li>;
                })}
              </div>
              <div id="WorkoutTimerStart-instructions">
                <h3>instructions :</h3>
                {filteredData[workoutNumber].instructions.map((each, index) => {
                  return <li key={index}>{each}</li>;
                })}
              </div>
            </div>
            <div id="WorkoutTimerStart-rightDiv">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div id="topNotch"></div>
                <div id="WorkoutTimerStart-rightDiv-h1-div"></div>
                <h1 id="WorkoutTimerStart-rightDiv-h1">{secondsLeft}</h1>
              </div>
              <input
                type="number"
                placeholder="PLEASE ENTER SECONDS"
                ref={inputRef}
                id="TimerInput"
                autoFocus
              />
              <p id="warningPlace">klm</p>
              <div id="buttonsContainer">
                <div className="eachButton" onClick={previousHandler}>
                  <p id="previousHandler">PREVIOUS</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/7756/7756187.png"
                    width={25}
                    alt="start"
                  />
                </div>
                <div className="eachButton" onClick={ResetHandler}>
                  <p>RESET </p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/16585/16585245.png"
                    width={20}
                    alt="start"
                  />
                </div>
                <div className="eachButton" onClick={TimerStartHandler}>
                  <p>START</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/870/870132.png"
                    width={25}
                    alt="start"
                  />
                </div>
                <div className="eachButton" onClick={NextHandler}>
                  <p id="NextHandler">NEXT</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/11519/11519985.png"
                    width={25}
                    alt="start"
                  />
                </div>
              </div>
              <h1 id="count-of-workouts">
                {workoutNumber} / {filteredData.length - 1}
              </h1>
            </div>
          </>
        ) : (
          <SpinnerComponent style={{ height: "100vh" }} />
        )}
      </div>
    </div>
  );
}

export default WorkoutTimerStart;
