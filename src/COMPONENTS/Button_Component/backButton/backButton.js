import React from "react";
import "./bakcButton.css";
function BackButton(props) {
  const { content, style, onClick } = props;
  return (
    <div id="BackButton-div" style={style} onClick={onClick}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/7756/7756187.png"
        alt="back"
      />
      <p>{content}</p>
    </div>
  );
}

export default BackButton;
