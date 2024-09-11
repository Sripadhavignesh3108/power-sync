import React, { useState } from "react";
import "./bmiCalculator.css";
import BackButton from "../Button_Component/backButton/backButton";
import { useNavigate } from "react-router-dom";
const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      let category = "";
      if (bmiValue < 18.5) category = "Underweight";
      else if (bmiValue < 24.9) category = "Normal weight";
      else if (bmiValue < 29.9) category = "Overweight";
      else category = "Obesity";

      setCategory(category);
    }
  };

  return (
    <div id="BMIBackground">
      <BackButton
        content="HOME"
        style={{
          color: "white",
          position: "absolute",
          top: "10px",
          left: "10px",
        }}
        onClick={() => navigate("/home")}
      />
      <div className="bmi-container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calculateBMI}>
          <div className="form-group-bmi">
            <fieldset>
              <legend htmlFor="height">Height (cm) :</legend>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </fieldset>
          </div>
          <div className="form-group-bmi">
            <fieldset>
              <legend htmlFor="weight">Weight (kg) :</legend>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </fieldset>
          </div>
          <button type="submit">Calculate</button>
        </form>
        {bmi && (
          <div className="bmi-result">
            <h2>Your BMI is : {bmi}</h2>
            <p>Category : {category}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
