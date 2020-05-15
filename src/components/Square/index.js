import React from "react";
import "./style.css";

// Destructure props from react component for value and onClick
function Square({ value, onClick }) {
  return (
    <div>
      <button className="squares" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}
export default Square;
