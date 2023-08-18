import "./styles.css";

export default function App() {
  return <Greeting name="Mary" />;
}

let coachName;
function Greeting(props) {
  return <h1>Hello {coachName ? "Coach" : props.name}!</h1>;
}
