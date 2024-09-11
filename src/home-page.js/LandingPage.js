import React, { useEffect } from "react";
import "./homePage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 4500);
  }, []);
  return (
    <div id="LandingPageBackground">
      <div id="LandingTitleDiv">
        <h1 style={{ margin: "0" }}>POWER SYNC</h1>
        <p>Ultimate fusion of Strength and Control</p>
      </div>
    </div>
  );
}

export default LandingPage;
