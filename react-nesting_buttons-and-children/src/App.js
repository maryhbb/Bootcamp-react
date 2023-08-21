import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Learn More</Button>
      <Button>Explore Now</Button>
      <Button>Get Started</Button>
      <Button>Discover</Button>
    </main>
  );
}
function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
