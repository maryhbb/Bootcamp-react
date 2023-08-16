import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Article></Article>
    </div>
  );
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">
        Exploring the Power of Components in React
      </h2>
      <label htmlFor="inputField">Search Term:</label>
      <input
        id="inputField"
        type="text"
        placeholder="Enter a term to explore"
      />
      <p>
        In this article, we will delve into the world of React components,
        exploring their reusability and the advantages they bring to the table.
        Whether you are a beginner or an experienced developer, understanding
        components is crucial for building scalable and maintainable web
        applications.
      </p>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
      >
        Learn More on Wikipedia
      </a>
    </article>
  );
}
