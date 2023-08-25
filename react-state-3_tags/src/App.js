import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  const handelAddTag = (newTag) => {
    setTags([...tags, newTag]);
  };

  const handelDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <main className="app">
      <Form onAddTag={handelAddTag} />
      <List tags={tags} onDeleteTag={handelDeleteTag} />
    </main>
  );
}
