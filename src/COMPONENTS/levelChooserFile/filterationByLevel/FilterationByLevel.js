import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SpinnerComponent from "../../Spinner_Component/SpinnerComponent";
import "../ChoosingLevel.css";
import { Tilt } from "react-tilt";
function FilterationByLevel() {
  const [filteredData, changeFitleredData] = useState([]);
  var params = useRef();
  params = useParams();
  const navigate = useNavigate();
  const allExerciseData = useSelector((each) => each.ApiDataReducer);
  const journeyHandler = () => {
    localStorage.setItem(
      "filterdDataBasedOnLevel",
      JSON.stringify(filteredData)
    );
    navigate(`/start-working-out/level/${params.level}`);
  };
  const sortedDataofLevels = {
    beginner: [
      "body weight",
      "assisted",
      "band",
      "roller",
      "resistance band",
      "stability ball",
      "medicine ball",
      "stepmill machine",
      "stationary bike",
    ],
    intermediate: [
      "elliptical machine",
      "bosu ball",
      "cable",
      "rope",
      "elliptical machine",
      "hammer",
      "leverage machine",
      "kettlebell",
      "skierg machine",
      "weighted",
      "wheel roller",
    ],
    advanced: [
      "sled machine",
      "ez barbell",
      "olympic barbell",
      "sled machine",
      "smith machine",
      "trap bar",
      "upper body ergometer",
      "tire",
      "rope",
    ],
  };
  useEffect(() => {
    let filteredArray = [];
    for (let i of allExerciseData) {
      if (sortedDataofLevels[params.level].includes(i.equipment)) {
        filteredArray.push(i);
      }
    }
    if (params.level === "beginner") {
      let newFilteredData = filteredArray.filter((each) => {
        return each.bodyPart !== "chest" && each.bodyPart !== "back";
      });
      changeFitleredData(newFilteredData);
    }
    if (params.level === "intermediate") {
      let newFilteredData = filteredArray.filter((each) => {
        return (
          each.target !== "calves" &&
          each.target !== "abductors" &&
          each.target !== "lats" &&
          each.target !== "traps" &&
          each.target !== "serratus anterior" &&
          each.target !== "levator scapulae"
        );
      });
      changeFitleredData(newFilteredData);
    }
    if (params.level === "advanced") {
      changeFitleredData(filteredArray);
    }
  }, [allExerciseData, params]);

  return (
    <div
      id="FilterationByLevel-background"
      onScroll={() => {
        console.log("hello");
      }}
    >
      <div
        id="BackButton-div"
        style={{ margin: 0 }}
        onClick={() => navigate("/select-level")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/7756/7756187.png"
          alt="back"
        />
        <p>BACK</p>
      </div>
      <a id="upArrow" href="#BackButton-div">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5610/5610930.png"
          alt="upArrow"
        />
      </a>
      <h1 id="titleOfPage">
        <span>{params.level}</span> level workouts
      </h1>
      <p className="pressStart">Press start to begin your workout journey</p>
      <div className="workoutsButton" onClick={journeyHandler}>
        <p>Start your journey</p>
      </div>
      <div id="FilterationByLevel-div">
        {filteredData.length > 0 ? (
          filteredData.map((each) => {
            return (
              <div
                className="FilterationByLevel-cards"
                key={each.id}
              >
                <img src={each.gifUrl} loading="lazy" alt={each.name} />
                <p className="FilterationByLevel-title">{each.name}</p>
                <div className="FilterationByLevel-subData">
                  <span>{each.bodyPart}</span> <span>{each.equipment}</span>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <SpinnerComponent style={{ height: "100vh" }} />
          </>
        )}
      </div>
    </div>
  );
}

export default FilterationByLevel;
