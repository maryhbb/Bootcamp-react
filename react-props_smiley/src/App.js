import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy />;
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? "Feeling Happy 😌" : "Feeling Sad 😢"}</h1>;
}
