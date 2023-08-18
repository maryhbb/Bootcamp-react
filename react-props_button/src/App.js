import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("You clicked Button for Task4!");
  }
  return (
    <>
      <div>
        <Button
          disabled={false}
          text="Adding a Click Event"
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            margin: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("You clicked Button for Task 2!")}
        />
      </div>
      <div>
        <Button
          disabled={false}
          text="Pass a Function as Prop"
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            margin: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        />
      </div>
    </>
  );
}

function Button({ color, style, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      style={{ color: color, ...style }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
