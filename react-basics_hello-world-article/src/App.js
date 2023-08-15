import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>Welcome to My First React Component</h1>
      <p>
        Embark on a journey of coding with me as I delve into the world of React
        components. In this exciting venture, we will explore the building blocks
        of modern web development and harness the power of React to create
        dynamic and interactive user interfaces.
      </p>
    </article>
  );
}
