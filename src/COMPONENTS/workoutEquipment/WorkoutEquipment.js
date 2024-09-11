import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WorkoutEquipment.css";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import SpinnerComponent from "../Spinner_Component/SpinnerComponent";
function WorkoutEquipment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var AllReduxData = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [equipmentSelection, setEquipmentSelection] = useState([]);
  const ReduxStoreData = useSelector((each) => each.ApiDataReducer);
  AllReduxData = useSelector((each) => each);
  const selectedMuscleArray = JSON.parse(
    localStorage.getItem("selectedMuscleArray")
  );
  console.log(AllReduxData);
  useEffect(() => {
    let UniqueValueArray = [];
    for (let i of selectedMuscleArray) {
      for (let j of ReduxStoreData) {
        if (j.target === i && !UniqueValueArray.includes(j.equipment)) {
          UniqueValueArray.push(j.equipment);
        }
      }
    }
    setFilteredData(UniqueValueArray);
  }, [AllReduxData]);

  const equipmentSelectionHandler = (id, each) => {
    if (equipmentSelection.includes(each)) {
      setEquipmentSelection(equipmentSelection.filter((e) => e !== each));
      document.getElementById(id).style.backgroundColor = "transparent";
      document.getElementById(id).style.border = "1px solid white";
    } else {
      setEquipmentSelection([...equipmentSelection, each]);
      document.getElementById(id).style.backgroundColor = "#ffc506";
      document.getElementById(id).style.border = "1px solid transparent";
    }
  };
  const SelectionSubmitionHandler = () => {
    if (equipmentSelection.length === 0) {
      document.getElementById("equipmentWarning").style.visibility = "visible";
    } else {
      dispatch({
        type: "selectedEquipment",
        package: equipmentSelection,
      });
      navigate("/selected-exercises");
    }
  };
  localStorage.setItem("AllReduxData", JSON.stringify(AllReduxData));
  return (
    <div id="backgroudDivOfEquipment">
      {filteredData.length > 0 ? (
        <div id="WorkoutEquipment-background">
          <p id="titleForMuscleGroup">Workout Equipments</p>
          <div id="GroupEquipment">
            {filteredData.map((each, index) => {
              return (
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  style={{ margin: "0" }}
                  id={"equipment" + index}
                  onClick={() =>
                    equipmentSelectionHandler("equipment" + index, each)
                  }
                >
                  {each}
                </motion.p>
              );
            })}
          </div>
          <p id="equipmentWarning">select atleast one option !</p>
          <div id="equipment-navigation">
            <button id="buttonPrevious" onClick={() => window.history.back()}>
              <p>PREVIOUS</p>
            </button>
            <button id="buttonNext" onClick={SelectionSubmitionHandler}>
              <p>NEXT</p>
            </button>
          </div>{" "}
        </div>
      ) : (
        <SpinnerComponent />
      )}
    </div>
  );
}

export default WorkoutEquipment;
