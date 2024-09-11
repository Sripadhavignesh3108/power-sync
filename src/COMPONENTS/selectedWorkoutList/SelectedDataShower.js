import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function SelectedDataShower() {
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState([]);
  var params = useRef();
  params = useParams();
  const TotalExercisesData = useSelector((each) => each.ApiDataReducer);
  useEffect(() => {
    setFilterData(TotalExercisesData.filter((each) => each.id == params.id));
  }, [TotalExercisesData]);
  console.log(filterData);
  return (
    <div id="dataShower-backgroundDiv">
      {filterData.length > 0 ? (
        filterData.map((each) => {
          return (
            <>
              <div id="leftImageDiv">
                <img src={each.gifUrl} alt={each.id} id="gifUrl" />
              </div>
              <div id="rightDataDiv">
                <div>
                  <h1>{each.name}</h1>
                  <hr className="hrTagOfDataShower" />
                  <h3>INFORMATION :-</h3>
                  <p>
                    <span>BODY PART ~ </span>
                    {each.bodyPart + " "}
                    Muscles
                  </p>
                  <p>
                    <span>REQUIRED EQUIPMENT ~ </span>
                    {each.equipment + " "}
                  </p>
                  <p>
                    <span>TARGET ~ </span>
                    {each.target + " "}
                  </p>
                  <p>
                    <span>MUSCLES INVOLVED ~ </span>
                    {"[ " + each.secondaryMuscles + " ]"}
                  </p>
                </div>
                <div>
                  <h3>INSTRUCTIONS :-</h3>
                  {each.instructions.map((e) => {
                    return <li typeof="1">{e}</li>;
                  })}
                </div>
                <button onClick={() => navigate("/select-level")}>
                  START YOUR JOURNEY
                </button>
              </div>
            </>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default SelectedDataShower;
