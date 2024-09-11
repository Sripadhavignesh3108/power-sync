import React from "react";
import "./SpinnerComponent.css";

function SpinnerComponent(props) {
    const {style} = props
  return (
    <div id="spinnerBody" style={style}>
      <div className="spinner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default SpinnerComponent;
