import React, { useEffect, useState } from "react";
import "./celebrations-of-Completion.css";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

function CelebrationsofCompletion() {
  const navigate = useNavigate();
  const [timeLeftToNavigate, setTimeLeft] = useState(8);
  useEffect(() => {
    setTimeout(() => {
      if (timeLeftToNavigate > 0) setTimeLeft(timeLeftToNavigate - 1);
    }, 800);
  }, [timeLeftToNavigate]);

  useEffect(() => {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 40, spread: 360, ticks: 60, zIndex: 0 };
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 2000) {
      }
      setTimeout(() => {
        navigate("/home");
        clearInterval(interval);
      }, 8000);
      var particleCount = 100 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }, []);
  return (
    <div id="celebrations-of-Completion-background">
      <p>
        <span>&#127881;</span>Congratulations for successfully completing
        Session &#127881;
      </p>
      <p>Navigating to Home page in {timeLeftToNavigate}</p>
    </div>
  );
}

export default CelebrationsofCompletion;
